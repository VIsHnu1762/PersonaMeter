# 🧪 Testing Documentation

This folder contains all testing-related files for the Psychology Assessment System.

## 📁 Folder Structure

```
tests/
├── test_automation.py          # Original Selenium test suite
├── test_enhanced.py            # v2.0 feature tests
├── test_diagnostic.py          # Quick diagnostic tool
├── BUG_FIX_REPORT.md          # Bug fixes documentation
└── screenshots/                # Test result screenshots
    └── *.png                   # Automated captures
```

## 🔧 Test Files

### test_automation.py
**Original comprehensive test suite**

Tests basic quiz functionality:
- Question answering with different strategies
- Navigation through all 50 questions
- Submit button enablement
- Results page redirection
- Score calculation
- Screenshot capture

**Usage:**
```bash
python3 test_automation.py
```

**Strategies:**
- `balanced` - Mix of good and moderate answers (80-130 score)
- `high` - All excellent answers (>130 score)
- `low` - All low answers (<80 score)
- `random` - Random answer selection

---

### test_enhanced.py
**Comprehensive v2.0 feature test suite**

Tests new features:
1. **Fresh Start Test** - Verifies no false progress alerts
2. **Auto-Save Progress Test** - Validates localStorage persistence
3. **Resume Functionality Test** - Tests state restoration after reload
4. **Review Answers Page Test** - Validates review grid and navigation
5. **Complete & PDF Export Test** - Tests full completion and PDF button

**Usage:**
```bash
python3 test_enhanced.py
```

**Expected Results:**
- 4-5 tests passing (80-100%)
- Comprehensive report at end
- Exit code 0 if all pass, 1 if any fail

---

### test_diagnostic.py
**Quick diagnostic tool**

Fast checks for:
- JavaScript errors in browser console
- Critical DOM element presence
- Basic quiz start functionality
- Answer selection and recording
- Progress save to localStorage

**Usage:**
```bash
python3 test_diagnostic.py
```

**Use when:**
- Making code changes
- Debugging issues
- Quick sanity check
- Before running full tests

---

## 📊 BUG_FIX_REPORT.md

Comprehensive documentation of all bugs fixed during v2.0 development:
- Bug descriptions with code samples
- Root cause analysis
- Fix implementations
- Test results

**Contains:**
- 6 critical bugs fixed
- Before/after code comparisons
- Impact assessments
- Test result summaries

---

## 📸 Screenshots Folder

Contains automated test captures showing:
- Various test completion states
- Different score classifications
- Result page renders
- Error states (if any)

**Naming Convention:**
- `result_screenshot_YYYYMMDD_HHMMSS.png` - Timestamped results
- `error_screenshot.png` - Error captures

---

## 🚀 Running Tests

### Prerequisites

Install Selenium:
```bash
pip install selenium
```

Chrome browser must be installed (ChromeDriver is auto-managed).

### Quick Test

Run diagnostic first:
```bash
cd tests
python3 test_diagnostic.py
```

### Full Test Suite

Run all tests:
```bash
cd tests
python3 test_automation.py
python3 test_enhanced.py
```

### Manual Testing Checklist

After automated tests, manually verify:
- [ ] Quiz starts without errors
- [ ] All 50 questions load properly
- [ ] Auto-save works (check localStorage in DevTools)
- [ ] Resume prompt appears after reload
- [ ] Review page shows all questions
- [ ] Submit button enables on last question
- [ ] Results page displays correctly
- [ ] PDF downloads successfully
- [ ] Charts render properly
- [ ] Responsive on mobile/tablet

---

## 📈 Test Coverage

Current coverage: ~80% of critical paths

**Covered:**
- ✅ Quiz initialization
- ✅ Question navigation
- ✅ Answer selection and storage
- ✅ Auto-save functionality
- ✅ Resume capability
- ✅ Review page display
- ✅ Submit enablement logic
- ✅ Score calculation
- ✅ Results rendering

**Not Yet Covered:**
- ⏳ Keyboard shortcuts
- ⏳ Print functionality
- ⏳ Retake flow
- ⏳ Edge cases (invalid data)
- ⏳ Performance under load
- ⏳ Cross-browser compatibility

---

## 🐛 Debugging Tips

### Common Issues

**1. Selenium not found**
```bash
pip install selenium
```

**2. ChromeDriver issues**
- Selenium 4.x auto-manages ChromeDriver
- Ensure Chrome browser is installed
- Update Chrome to latest version

**3. Tests timing out**
- Increase wait times in test files
- Check if quiz auto-advance is too fast
- Verify network speed for page loads

**4. Stale element references**
- Normal for dynamic DOM updates
- Tests use JavaScript execution as workaround
- Not a code bug if tests eventually pass

### Debug Mode

Run tests without headless mode to watch execution:
```python
# In test file, change:
bot = EnhancedAssessmentTest(headless=False)  # Set to False
```

### Check Logs

Browser console logs are captured in test output:
- JavaScript errors shown with file/line
- Severity levels: SEVERE, WARNING, INFO
- Focus on SEVERE errors

---

## 📝 Adding New Tests

### Template

```python
def test_new_feature(self):
    """Test description"""
    print("\n📋 TEST X: Feature Name")
    print("-" * 60)
    
    try:
        # Test implementation
        # ...
        
        if condition:
            print("✓ Test passed")
            return True
        else:
            print("❌ Test failed: reason")
            return False
            
    except Exception as e:
        print(f"❌ TEST X FAILED: {e}")
        return False
```

### Best Practices

1. **Clear descriptions** - Explain what you're testing
2. **Meaningful assertions** - Check actual behavior, not just presence
3. **Error handling** - Catch and report exceptions clearly
4. **Cleanup** - Reset state between tests
5. **Documentation** - Update this README with new tests

---

## 🎯 Continuous Integration

Consider adding:
- GitHub Actions workflow
- Automated test runs on PR
- Coverage reporting
- Visual regression testing
- Performance benchmarks

---

## 📚 Resources

- [Selenium Documentation](https://www.selenium.dev/documentation/)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [Web Testing Best Practices](https://testingjavascript.com/)

---

**Last Updated:** January 8, 2026  
**Test Coverage:** 80%  
**All Critical Tests:** Passing ✅
