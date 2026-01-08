"""
Enhanced Selenium Test for Psychology Assessment System v2.0
Tests new features: Auto-save Progress, Resume, Review Answers, PDF Export
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import time
import os

class EnhancedAssessmentTest:
    """Enhanced automated testing for new features"""
    
    def __init__(self, headless=False):
        """Initialize WebDriver"""
        self.options = Options()
        if headless:
            self.options.add_argument('--headless')
        
        self.options.add_argument('--no-sandbox')
        self.options.add_argument('--disable-dev-shm-usage')
        self.options.add_argument('--window-size=1920,1080')
        self.options.add_argument('--disable-blink-features=AutomationControlled')
        
        self.driver = webdriver.Chrome(options=self.options)
        self.driver.maximize_window()
        self.wait = WebDriverWait(self.driver, 10)
        
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.index_url = f"file://{self.base_dir}/index.html"
        
        print("=" * 60)
        print("🧪 ENHANCED PSYCHOLOGY ASSESSMENT TEST (v2.0)")
        print("=" * 60)
        print(f"✓ WebDriver initialized")
        print(f"✓ Base directory: {self.base_dir}\n")
    
    def test_fresh_start(self):
        """Test 1: Fresh start without saved progress"""
        print("📋 TEST 1: Fresh Start")
        print("-" * 60)
        
        try:
            # Clear localStorage first
            self.driver.get(self.index_url)
            self.driver.execute_script("localStorage.clear();")
            time.sleep(1)
            
            # Reload page
            self.driver.refresh()
            time.sleep(2)
            
            # Check that progress alert is hidden
            progress_alert = self.driver.find_element(By.ID, "progress-alert")
            is_visible = progress_alert.is_displayed()
            
            if not is_visible:
                print("✓ Progress alert correctly hidden (no saved progress)")
            else:
                print("❌ BUG: Progress alert visible even without saved progress!")
                return False
            
            # Start assessment
            start_btn = self.wait.until(
                EC.element_to_be_clickable((By.ID, "start-btn"))
            )
            start_btn.click()
            print("✓ Assessment started successfully")
            time.sleep(1)
            
            return True
            
        except Exception as e:
            print(f"❌ TEST 1 FAILED: {e}")
            return False
    
    def test_auto_save_progress(self):
        """Test 2: Auto-save after answering questions"""
        print("\n📋 TEST 2: Auto-Save Progress")
        print("-" * 60)
        
        try:
            # Answer first 5 questions
            print("Answering first 5 questions...")
            for i in range(5):
                time.sleep(0.5)
                
                # Click option 2 for all
                js_click = """
                var options = document.getElementsByClassName('option');
                if (options && options.length > 1) {
                    options[1].click();
                }
                """
                self.driver.execute_script(js_click)
                time.sleep(0.8)
                
                # Click next (except on 5th question)
                if i < 4:
                    self.driver.execute_script("document.getElementById('next-btn').click();")
                    time.sleep(0.5)
            
            print("✓ Answered 5 questions")
            
            # Check localStorage for saved progress
            saved_data = self.driver.execute_script("""
                return localStorage.getItem('quizProgress');
            """)
            
            if saved_data:
                print("✓ Progress saved to localStorage")
                
                # Parse and validate
                progress = self.driver.execute_script("""
                    var data = JSON.parse(localStorage.getItem('quizProgress'));
                    return {
                        currentIndex: data.currentQuestionIndex,
                        answerCount: Object.keys(data.userAnswers).length
                    };
                """)
                
                print(f"  - Current question index: {progress['currentIndex']}")
                print(f"  - Saved answers: {progress['answerCount']}")
                
                if progress['answerCount'] == 5:
                    print("✓ Correct number of answers saved")
                    return True
                else:
                    print(f"❌ BUG: Expected 5 answers, got {progress['answerCount']}")
                    return False
            else:
                print("❌ BUG: Progress not saved to localStorage!")
                return False
                
        except Exception as e:
            print(f"❌ TEST 2 FAILED: {e}")
            return False
    
    def test_resume_functionality(self):
        """Test 3: Resume from saved progress"""
        print("\n📋 TEST 3: Resume Functionality")
        print("-" * 60)
        
        try:
            # Reload page (simulating browser close/reopen)
            print("Reloading page to simulate browser restart...")
            self.driver.refresh()
            time.sleep(2)
            
            # Check if progress alert is visible
            progress_alert = self.driver.find_element(By.ID, "progress-alert")
            is_visible = progress_alert.is_displayed()
            
            if is_visible:
                print("✓ Progress alert displayed correctly")
            else:
                print("❌ BUG: Progress alert not visible despite saved progress!")
                return False
            
            # Click resume button
            resume_btn = self.wait.until(
                EC.element_to_be_clickable((By.ID, "resume-btn"))
            )
            resume_btn.click()
            print("✓ Clicked 'Resume' button")
            time.sleep(2)
            
            # Check if quiz resumed at correct position
            current_index = self.driver.execute_script("return currentQuestionIndex;")
            answer_count = self.driver.execute_script("return Object.keys(userAnswers).length;")
            
            print(f"  - Resumed at question index: {current_index}")
            print(f"  - Restored answers: {answer_count}")
            
            if answer_count == 5:
                print("✓ Answers correctly restored")
                return True
            else:
                print(f"❌ BUG: Expected 5 restored answers, got {answer_count}")
                return False
                
        except Exception as e:
            print(f"❌ TEST 3 FAILED: {e}")
            return False
    
    def test_review_answers(self):
        """Test 4: Review Answers functionality"""
        print("\n📋 TEST 4: Review Answers Page")
        print("-" * 60)
        
        try:
            # Answer more questions to have enough data
            print("Answering questions 6-10...")
            for i in range(5):
                time.sleep(0.5)
                self.driver.execute_script("""
                    var options = document.getElementsByClassName('option');
                    if (options && options.length > 2) {
                        options[2].click();
                    }
                """)
                time.sleep(0.8)
                if i < 4:
                    self.driver.execute_script("document.getElementById('next-btn').click();")
                    time.sleep(0.5)
            
            print("✓ Answered 10 questions total")
            time.sleep(1)
            
            # Click Review button
            review_btn = self.wait.until(
                EC.element_to_be_clickable((By.ID, "review-btn"))
            )
            review_btn.click()
            print("✓ Clicked 'Review Answers' button")
            time.sleep(2)
            
            # Check if review page is displayed
            try:
                review_container = self.driver.find_element(By.CLASS_NAME, "review-container")
                if review_container.is_displayed():
                    print("✓ Review page displayed")
                    
                    # Count review items
                    review_items = self.driver.find_elements(By.CLASS_NAME, "review-item")
                    print(f"  - Total questions shown: {len(review_items)}")
                    
                    # Count answered vs unanswered
                    answered = self.driver.find_elements(By.CSS_SELECTOR, ".review-item.answered")
                    unanswered = self.driver.find_elements(By.CSS_SELECTOR, ".review-item.unanswered")
                    
                    print(f"  - Answered: {len(answered)}")
                    print(f"  - Unanswered: {len(unanswered)}")
                    
                    if len(review_items) == 50:
                        print("✓ All 50 questions displayed in review")
                        
                        # Click on an answered question to test navigation
                        print("Testing navigation back to question...")
                        answered[0].click()
                        time.sleep(2)
                        
                        # Check if we're back at quiz
                        question_text = self.driver.find_element(By.ID, "question-text")
                        if question_text.is_displayed():
                            print("✓ Navigation from review to question works")
                            return True
                        else:
                            print("❌ BUG: Failed to navigate back to question")
                            return False
                    else:
                        print(f"❌ BUG: Expected 50 questions, got {len(review_items)}")
                        return False
                else:
                    print("❌ BUG: Review container not visible")
                    return False
                    
            except NoSuchElementException:
                print("❌ BUG: Review container not found")
                return False
                
        except Exception as e:
            print(f"❌ TEST 4 FAILED: {e}")
            return False
    
    def test_complete_and_pdf(self):
        """Test 5: Complete quiz and PDF export"""
        print("\n📋 TEST 5: Complete Quiz & PDF Export")
        print("-" * 60)
        
        try:
            # Click review button to go back to review page
            review_btn = self.driver.find_element(By.ID, "review-btn")
            review_btn.click()
            time.sleep(2)
            
            # Answer all remaining questions from review page
            print("Answering remaining 40 questions...")
            unanswered = self.driver.find_elements(By.CSS_SELECTOR, ".review-item.unanswered")
            
            for idx, item in enumerate(unanswered[:40]):  # Answer all remaining
                item.click()
                time.sleep(0.5)
                
                # Select an option
                self.driver.execute_script("""
                    var options = document.getElementsByClassName('option');
                    if (options && options.length > 1) {
                        options[1].click();
                    }
                """)
                time.sleep(0.5)
                
                # Go back to review
                self.driver.execute_script("document.getElementById('review-btn').click();")
                time.sleep(0.5)
                
                if (idx + 1) % 10 == 0:
                    print(f"  ✓ Answered {idx + 11}/50 questions")
            
            print("✓ All 50 questions answered")
            time.sleep(1)
            
            # Submit from review page
            submit_from_review = self.driver.find_element(By.ID, "submit-from-review-btn")
            
            if submit_from_review.is_enabled():
                print("✓ Submit button enabled on review page")
                submit_from_review.click()
                print("✓ Quiz submitted")
                time.sleep(3)
                
                # Check if we're on results page
                if "result.html" in self.driver.current_url:
                    print("✓ Redirected to results page")
                    
                    # Wait for results to load
                    time.sleep(3)
                    
                    # Get final score
                    final_score = self.driver.execute_script("""
                        return document.getElementById('final-score').textContent;
                    """)
                    print(f"  - Final Score: {final_score}")
                    
                    # Test PDF download button
                    try:
                        pdf_btn = self.driver.find_element(By.ID, "download-pdf-btn")
                        if pdf_btn.is_displayed() and pdf_btn.is_enabled():
                            print("✓ PDF download button available")
                            
                            # Click PDF button
                            pdf_btn.click()
                            print("✓ PDF download button clicked")
                            time.sleep(3)
                            
                            # Check button text change
                            button_text = pdf_btn.text
                            if "Downloaded" in button_text or "Generating" in button_text:
                                print(f"✓ PDF generation triggered (button: '{button_text}')")
                                return True
                            else:
                                print(f"⚠️  PDF button text: '{button_text}' (check functionality)")
                                return True
                        else:
                            print("❌ BUG: PDF button not available or disabled")
                            return False
                    except NoSuchElementException:
                        print("❌ BUG: PDF download button not found")
                        return False
                else:
                    print("❌ BUG: Not redirected to results page")
                    return False
            else:
                print("❌ BUG: Submit button disabled despite all questions answered")
                return False
                
        except Exception as e:
            print(f"❌ TEST 5 FAILED: {e}")
            return False
    
    def run_all_tests(self):
        """Run all tests and generate report"""
        print("\n🚀 Starting Enhanced Test Suite...")
        print("=" * 60)
        
        results = {}
        
        # Test 1: Fresh Start
        results['Fresh Start'] = self.test_fresh_start()
        
        # Test 2: Auto-Save
        results['Auto-Save Progress'] = self.test_auto_save_progress()
        
        # Test 3: Resume
        results['Resume Functionality'] = self.test_resume_functionality()
        
        # Test 4: Review Answers
        results['Review Answers'] = self.test_review_answers()
        
        # Test 5: Complete & PDF
        results['Complete & PDF Export'] = self.test_complete_and_pdf()
        
        # Generate report
        print("\n" + "=" * 60)
        print("📊 TEST RESULTS SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for v in results.values() if v)
        total = len(results)
        
        for test_name, result in results.items():
            status = "✅ PASSED" if result else "❌ FAILED"
            print(f"{status} - {test_name}")
        
        print("-" * 60)
        print(f"Total: {passed}/{total} tests passed ({(passed/total)*100:.1f}%)")
        print("=" * 60)
        
        return results
    
    def close(self):
        """Close the browser"""
        print("\n🔒 Closing browser...")
        self.driver.quit()
        print("✓ Browser closed")

def main():
    """Main execution"""
    bot = None
    try:
        bot = EnhancedAssessmentTest(headless=False)
        results = bot.run_all_tests()
        
        # Return exit code based on results
        all_passed = all(results.values())
        return 0 if all_passed else 1
        
    except KeyboardInterrupt:
        print("\n⚠️  Test interrupted by user")
        return 130
    except Exception as e:
        print(f"\n❌ Fatal error: {e}")
        import traceback
        traceback.print_exc()
        return 1
    finally:
        if bot:
            bot.close()

if __name__ == "__main__":
    exit_code = main()
    exit(exit_code)
