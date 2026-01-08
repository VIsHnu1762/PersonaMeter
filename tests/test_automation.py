"""
Selenium Automation Script for Psychology Assessment System
Automates the quiz completion and captures results
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
import random
import os
from datetime import datetime

class PsychologyAssessmentBot:
    """Automated testing bot for Psychology Assessment System"""
    
    def __init__(self, headless=False):
        """Initialize the Selenium WebDriver"""
        self.options = Options()
        
        if headless:
            self.options.add_argument('--headless')
        
        # Common options for better stability
        self.options.add_argument('--no-sandbox')
        self.options.add_argument('--disable-dev-shm-usage')
        self.options.add_argument('--window-size=1920,1080')
        self.options.add_argument('--disable-blink-features=AutomationControlled')
        
        # Initialize driver
        self.driver = webdriver.Chrome(options=self.options)
        self.driver.maximize_window()
        self.wait = WebDriverWait(self.driver, 10)
        
        # Get the current directory and construct file path
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.index_url = f"file://{self.base_dir}/index.html"
        
        print(f"✓ WebDriver initialized")
        print(f"✓ Base directory: {self.base_dir}")
    
    def start_assessment(self):
        """Navigate to the assessment and click start"""
        try:
            print("\n🚀 Starting assessment...")
            self.driver.get(self.index_url)
            time.sleep(2)
            
            # Click "Start Assessment" button
            start_button = self.wait.until(
                EC.element_to_be_clickable((By.ID, "start-btn"))
            )
            start_button.click()
            print("✓ Assessment started")
            time.sleep(1)
            
        except Exception as e:
            print(f"❌ Error starting assessment: {e}")
            raise
    
    def answer_questions(self, strategy="balanced"):
        """
        Answer all 50 questions based on strategy
        
        Strategies:
        - 'random': Random answers
        - 'balanced': Mix of good and moderate answers (scores 80-130)
        - 'high': All excellent answers (score > 130)
        - 'low': All low answers (score < 80)
        """
        try:
            print(f"\n📝 Answering questions with '{strategy}' strategy...")
            
            for question_num in range(1, 51):
                # Wait for question to load
                time.sleep(0.7)
                
                # Select answer index based on strategy
                if strategy == "random":
                    choice_index = random.randint(0, 3)
                elif strategy == "high":
                    choice_index = 3  # Always select option 4 (weight 4)
                elif strategy == "low":
                    choice_index = 0  # Always select option 1 (weight 1)
                elif strategy == "balanced":
                    # Mix of options 2 and 3, occasionally 4
                    choice_index = random.choices([1, 2, 3], weights=[30, 40, 30])[0]
                else:
                    choice_index = random.randint(0, 3)
                
                # Use JavaScript to click the option to avoid stale element issues
                js_click = f"""
                var options = document.getElementsByClassName('option');
                if (options && options.length > {choice_index}) {{
                    options[{choice_index}].click();
                }}
                """
                self.driver.execute_script(js_click)
                time.sleep(0.8)  # Longer wait to ensure selection registers
                
                # Progress indicator
                if question_num % 10 == 0:
                    print(f"  ✓ Answered {question_num}/50 questions")
                
                # Click next button manually (not on last question)
                if question_num < 50:
                    try:
                        next_btn_click = "document.getElementById('next-btn').click();"
                        self.driver.execute_script(next_btn_click)
                        time.sleep(0.5)
                    except Exception as e:
                        print(f"  ⚠️  Warning clicking next on question {question_num}: {e}")
                else:
                    # Last question - wait longer and verify submit button is enabled
                    print(f"  ✓ Answered final question {question_num}/50")
                    time.sleep(2)
                    # Check if submit button is enabled
                    submit_enabled = self.driver.execute_script("return !document.getElementById('submit-btn').disabled;")
                    print(f"  Submit button enabled: {submit_enabled}")
            
            print(f"✓ All 50 questions answered!")
            time.sleep(1)
            
        except Exception as e:
            print(f"❌ Error answering questions: {e}")
            raise
    
    def submit_assessment(self):
        """Submit the assessment"""
        try:
            print("\n📤 Submitting assessment...")
            time.sleep(2)
            
            # Check how many answers are recorded
            answer_count = self.driver.execute_script("return Object.keys(userAnswers).length;")
            print(f"Answers recorded in userAnswers: {answer_count}/50")
            
            # Wait for submit button to be visible
            submit_button = self.wait.until(
                EC.visibility_of_element_located((By.ID, "submit-btn"))
            )
            
            # Check if submit button is enabled
            is_enabled = submit_button.is_enabled()
            print(f"Submit button enabled: {is_enabled}")
            
            if not is_enabled:
                print("❌ BUG DETECTED: Submit button is disabled even though all questions are answered!")
                print("This indicates the updateNavigationButtons() wasn't called after last selection")
                # Save screenshot showing the bug
                self.save_screenshot("bug_submit_disabled.png")
                raise Exception("Submit button is disabled - bug not fixed")
            
            # Scroll to button
            self.driver.execute_script("arguments[0].scrollIntoView(true);", submit_button)
            time.sleep(0.5)
            
            # Click the submit button normally
            submit_button.click()
            
            print("✓ Submit button clicked successfully")
            
            # Wait for page navigation
            time.sleep(3)
            
            print(f"Current URL after submit: {self.driver.current_url}")
            
            # Verify we're on the results page
            if 'result.html' in self.driver.current_url:
                print("✓ Successfully navigated to results page")
            else:
                raise Exception("Failed to navigate to results page")
            
        except Exception as e:
            print(f"❌ Error submitting assessment: {e}")
            print(f"Current URL: {self.driver.current_url}")
            try:
                self.save_screenshot("submit_error.png")
            except:
                pass
            raise
    
    def capture_results(self):
        """Capture and display results from the results page"""
        try:
            print("\n📊 Capturing results...")
            
            # Wait for page transition to result.html
            time.sleep(4)
            
            print(f"Current URL: {self.driver.current_url}")
            
            # Wait for animations and chart to load
            time.sleep(2)
            
            # Try to get final score with longer wait
            try:
                final_score_element = WebDriverWait(self.driver, 15).until(
                    EC.presence_of_element_located((By.ID, "final-score"))
                )
                final_score = final_score_element.text
            except:
                final_score = "Unable to capture"
            
            # Get personality type
            try:
                personality = self.driver.find_element(By.ID, "personality-type").text
            except:
                personality = "Unable to capture"
            
            # Get category scores
            try:
                comm_score = self.driver.find_element(By.ID, "comm-score").text
            except:
                comm_score = "N/A"
                
            try:
                lead_score = self.driver.find_element(By.ID, "lead-score").text
            except:
                lead_score = "N/A"
                
            try:
                stress_score = self.driver.find_element(By.ID, "stress-score").text
            except:
                stress_score = "N/A"
                
            try:
                team_score = self.driver.find_element(By.ID, "team-score").text
            except:
                team_score = "N/A"
            
            # Print results
            print("\n" + "="*60)
            print("🎯 ASSESSMENT RESULTS")
            print("="*60)
            print(f"\n🏆 Final Score: {final_score} points")
            print(f"\n{personality}")
            print("\n📈 Category Breakdown:")
            print(f"  💬 Communication:       {comm_score}/52")
            print(f"  👔 Leadership:          {lead_score}/48")
            print(f"  🧘 Stress Management:   {stress_score}/52")
            print(f"  🤝 Teamwork:            {team_score}/48")
            print("\n" + "="*60)
            
            return {
                'final_score': final_score,
                'personality': personality,
                'communication': comm_score,
                'leadership': lead_score,
                'stress_management': stress_score,
                'teamwork': team_score
            }
            
        except Exception as e:
            print(f"❌ Error capturing results: {e}")
            print(f"Page source preview: {self.driver.page_source[:500]}")
            raise
    
    def save_screenshot(self, filename=None):
        """Save screenshot of results page"""
        try:
            if filename is None:
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                filename = f"result_screenshot_{timestamp}.png"
            
            filepath = os.path.join(self.base_dir, filename)
            self.driver.save_screenshot(filepath)
            print(f"\n📸 Screenshot saved: {filename}")
            return filepath
            
        except Exception as e:
            print(f"❌ Error saving screenshot: {e}")
            return None
    
    def close(self):
        """Close the browser"""
        try:
            print("\n🔒 Closing browser...")
            time.sleep(2)  # Give time to view results
            self.driver.quit()
            print("✓ Browser closed")
        except Exception as e:
            print(f"⚠️  Warning while closing: {e}")


def main():
    """Main execution function"""
    print("="*60)
    print("🧠 PSYCHOLOGY ASSESSMENT AUTOMATION")
    print("="*60)
    
    # Initialize bot
    bot = PsychologyAssessmentBot(headless=False)
    
    try:
        # Run the assessment
        bot.start_assessment()
        bot.answer_questions(strategy="balanced")  # Change to 'high', 'low', or 'random'
        bot.submit_assessment()
        
        # Capture and display results
        results = bot.capture_results()
        
        # Save screenshot
        bot.save_screenshot()
        
        print("\n✅ Automation completed successfully!")
        print("\n💡 Tip: Check the screenshot file for visual results")
        
    except Exception as e:
        print(f"\n❌ Automation failed: {e}")
        # Save error screenshot
        bot.save_screenshot("error_screenshot.png")
        
    finally:
        # Close browser
        bot.close()


if __name__ == "__main__":
    main()
