"""
Quick Diagnostic Test - Check for JavaScript errors and basic functionality
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

def diagnostic_test():
    """Run quick diagnostic"""
    options = Options()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    
    driver = webdriver.Chrome(options=options)
    driver.maximize_window()
    wait = WebDriverWait(driver, 10)
    
    base_dir = os.path.dirname(os.path.abspath(__file__))
    index_url = f"file://{base_dir}/index.html"
    
    print("🔍 DIAGNOSTIC TEST")
    print("=" * 60)
    
    try:
        # Load page
        driver.get(index_url)
        time.sleep(2)
        
        # Check for JavaScript errors
        logs = driver.get_log('browser')
        js_errors = [log for log in logs if log['level'] == 'SEVERE']
        
        if js_errors:
            print(f"❌ Found {len(js_errors)} JavaScript errors:")
            for error in js_errors:
                print(f"  - {error['message']}")
        else:
            print("✅ No JavaScript errors found")
        
        # Check if key elements exist
        print("\n📋 Checking DOM elements...")
        elements_to_check = [
            ('start-btn', 'Start Button'),
            ('quiz-screen', 'Quiz Screen'),
            ('progress-alert', 'Progress Alert'),
            ('review-btn', 'Review Button'),
            ('welcome-screen', 'Welcome Screen')
        ]
        
        for element_id, name in elements_to_check:
            try:
                element = driver.find_element(By.ID, element_id)
                print(f"  ✅ {name} exists")
            except:
                print(f"  ❌ {name} NOT FOUND!")
        
        # Test starting quiz
        print("\n🚀 Testing quiz start...")
        start_btn = wait.until(EC.element_to_be_clickable((By.ID, "start-btn")))
        start_btn.click()
        time.sleep(2)
        
        # Check if quiz screen is visible
        quiz_screen = driver.find_element(By.ID, "quiz-screen")
        if quiz_screen.is_displayed():
            print("  ✅ Quiz started successfully")
        else:
            print("  ❌ Quiz screen not visible!")
        
        # Test answering one question
        print("\n📝 Testing answer selection...")
        options = driver.find_elements(By.CLASS_NAME, 'option')
        if len(options) > 0:
            print(f"  ✅ Found {len(options)} options")
            
            # Click first option
            options[0].click()
            time.sleep(1)
            
            # Check if answer was recorded
            answer_count = driver.execute_script("return Object.keys(userAnswers).length;")
            print(f"  ✅ Answers recorded: {answer_count}")
            
            # Check progress save
            progress_saved = driver.execute_script("return localStorage.getItem('quizProgress') !== null;")
            if progress_saved:
                print("  ✅ Progress auto-saved to localStorage")
            else:
                print("  ❌ Progress NOT saved!")
            
        else:
            print("  ❌ No options found!")
        
        # Check for console errors again
        logs = driver.get_log('browser')
        new_errors = [log for log in logs if log['level'] == 'SEVERE']
        
        if new_errors:
            print(f"\n⚠️  New JavaScript errors after interaction:")
            for error in new_errors:
                print(f"  - {error['message']}")
        
        print("\n" + "=" * 60)
        print("✅ Diagnostic test completed!")
        
    except Exception as e:
        print(f"\n❌ Diagnostic test failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        time.sleep(2)
        driver.quit()
        print("🔒 Browser closed")

if __name__ == "__main__":
    diagnostic_test()
