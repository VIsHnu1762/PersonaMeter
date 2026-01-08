# 🧠 Psychological Assessment System

A comprehensive web-based psychological assessment tool designed to evaluate four key professional personality traits in students and professionals. This system provides detailed insights into Communication, Leadership, Stress Management, and Teamwork capabilities.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Assessment Details](#assessment-details)
- [Scoring Formula](#scoring-formula)
- [Classification Criteria](#classification-criteria)
- [Screenshots](#screenshots)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

### Core Functionality
- **50 Comprehensive Questions** - Carefully designed MCQ questions covering four professional traits
- **Real-time Progress Tracking** - Visual progress bar showing completion status
- **Category-wise Evaluation** - Separate scoring for each psychological trait
- **Weighted Scoring Algorithm** - Advanced formula for accurate personality assessment
- **Interactive UI** - Smooth animations and engaging user experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

### 🆕 NEW: Enhanced User Experience (v2.0)
- 💾 **Auto-Save Progress** - Never lose your answers! The system automatically saves your progress after each question
- 🔄 **Resume Capability** - Return anytime and continue from where you left off
- 👁️ **Review Answers** - Review all your responses before final submission with easy navigation to edit answers
- 📄 **PDF Export** - Download your assessment results as a professional PDF report

### User Experience
- ✅ One question per page for focused attention
- ✅ Visual category badges for each question
- ✅ Auto-advance after answer selection (optional)
- ✅ Keyboard navigation support (Arrow keys, number keys)
- ✅ Prevention of accidental data loss with auto-save
- ✅ Clean and modern interface design

### Results & Analytics
- 📊 Detailed bar charts using Chart.js
- 📈 Category-wise score breakdown
- 💡 Personalized improvement suggestions
- 🎯 Classification into three personality types
- 📄 Downloadable PDF reports
- 🖨️ Printable results page
- 🔄 Option to retake assessment

## Demo

### Live Preview
Open `index.html` in your browser to start the assessment.

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/Psychology_Score.git

# Navigate to the project directory
cd Psychology_Score

# Open in browser
open index.html
# or
start index.html  # Windows
```

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, and responsive design |
| **Vanilla JavaScript** | Quiz logic, calculations, and interactivity |
| **jsPDF** | PDF generation for downloadable reports |
| **html2canvas** | Canvas rendering for PDF export |
| **Chart.js** | Data visualization and graphing |
| **LocalStorage API** | Temporary result storage |

**No frameworks or build tools required** - Just pure web technologies!

## Project Structure

> **Note:** See [FILE_STRUCTURE.md](FILE_STRUCTURE.md) for detailed visual tree and organization guide.

```
Psychology_Score/
│
├── index.html                      # Main quiz interface
├── result.html                     # Results display page
├── style.css                       # Complete styling and responsive design
├── script.js                       # Quiz logic and calculations
├── data.js                         # 50 questions with categories and weights
├── README.md                       # Project documentation
├── FILE_STRUCTURE.md               # Detailed file organization guide
│
└── tests/                          # Testing and development files
    ├── test_automation.py          # Original Selenium test suite
    ├── test_enhanced.py            # Comprehensive v2.0 feature tests
    ├── test_diagnostic.py          # Quick diagnostic tool
    ├── BUG_FIX_REPORT.md          # Detailed bug fix documentation
    ├── README.md                   # Testing documentation
    └── screenshots/                # Test result screenshots
        └── *.png                   # Automated test captures
```

### File Descriptions

**Core Application Files:**
- **index.html** - Welcome screen and quiz interface with progress tracking
- **result.html** - Comprehensive results page with charts and PDF export
- **style.css** - Modern, responsive CSS with animations and review page styles
- **script.js** - Quiz logic, auto-save, resume functionality, and calculations
- **data.js** - Question bank with category assignments and option weights (50 questions)

**Testing Files (in `tests/` folder):**
- **test_automation.py** - Selenium automation for basic quiz completion testing
- **test_enhanced.py** - Advanced test suite for v2.0 features (auto-save, resume, review, PDF)
- **test_diagnostic.py** - Quick diagnostic tool for JavaScript error detection
- **BUG_FIX_REPORT.md** - Comprehensive documentation of all bugs fixed in v2.0
- **screenshots/** - Folder containing automated test result captures

## Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or dependencies required!

### Steps

1. **Download the project**
   ```bash
   git clone https://github.com/yourusername/Psychology_Score.git
   ```

2. **Navigate to the folder**
   ```bash
   cd Psychology_Score
   ```

3. **Open the application**
   - Double-click `index.html`, or
   - Right-click → Open with → Your Browser, or
   - Use Live Server in VS Code, or
   - Run a local server:
     ```bash
     python3 -m http.server 8080
     # Then open http://localhost:8080/index.html
     ```

That's it! The application is ready to use.

## Testing

The project includes comprehensive automated tests to ensure quality and reliability.

### Running Tests

**Prerequisites:**
```bash
pip install selenium
```

**1. Diagnostic Test** (Quick check for errors)
```bash
cd tests
python3 test_diagnostic.py
```
Tests for JavaScript errors and basic functionality.

**2. Original Test Suite** (Basic functionality)
```bash
cd tests
python3 test_automation.py
```
Completes full quiz with different answer strategies.

**3. Enhanced Test Suite** (v2.0 features)
```bash
cd tests
python3 test_enhanced.py
```
Tests auto-save, resume, review page, and PDF export.

### Test Coverage

- ✅ Fresh start without saved progress
- ✅ Auto-save after each answer
- ✅ Resume functionality after page reload
- ✅ Review answers page display
- ✅ Navigation between questions
- ✅ Submit button enablement
- ✅ PDF download trigger
- ✅ Score calculation accuracy
- ✅ Results page rendering

### Test Results

See `tests/BUG_FIX_REPORT.md` for detailed test results and bug fixes from v2.0 development.

## Usage

### Taking the Assessment

1. **Welcome Screen**
   - Read the introduction and test details
   - Click "Start Assessment" to begin

2. **🆕 Resume from Previous Session**
   - If you have saved progress, you'll see a prompt
   - Click "Resume" to continue from where you left off
   - Or click "Start Fresh" to begin a new assessment

3. **Answering Questions**
   - Read each question carefully
   - Select one of the four options
   - Use "Previous" and "Next" buttons to navigate
   - Your progress is automatically saved after each answer

4. **🆕 Review Your Answers**
   - Click "Review Answers" button anytime during the quiz
   - See all 50 questions with your selected answers
   - Green = answered, Red = unanswered
   - Click any question to edit your answer
   - Submit directly from review page when ready

5. **Keyboard Shortcuts**
   - `1-4`: Select options quickly
   - `←` / `→`: Navigate between questions
   - `Enter`: Move to next question or submit

6. **Submitting**
   - Answer all 50 questions
   - Click "Submit Test" on the last question or from review page
   - Results will be calculated automatically

7. **Viewing Results**
   - See your overall score and classification
   - Review category-wise performance
   - Explore visual charts
   - Read personalized suggestions
   - 🆕 **Download PDF report** for your records
   - Print or retake the assessment

## Assessment Details

### Four Key Categories

#### 💬 Communication (13 questions)
Evaluates your ability to:
- Express ideas clearly
- Listen actively
- Handle feedback
- Adapt communication style
- Resolve misunderstandings

#### 👔 Leadership (12 questions)
Measures your capacity to:
- Take initiative
- Motivate others
- Make decisions under pressure
- Delegate effectively
- Handle conflicts

#### 🧘 Stress Management (13 questions)
Assesses your ability to:
- Cope with deadlines
- Handle unexpected changes
- Maintain work-life balance
- Recognize stress triggers
- Recover from setbacks

#### 🤝 Teamwork (12 questions)
Evaluates your skills in:
- Collaboration with diverse teams
- Supporting team members
- Handling disagreements
- Sharing credit
- Building trust

### Question Weights

Each option carries a weight from 1 to 4:
- **1** = Low/Rarely
- **2** = Moderate/Sometimes
- **3** = Good/Often
- **4** = Excellent/Always

## Scoring Formula

### Category Scores
```javascript
Category Score = Sum of selected option weights
```

**Maximum Possible Scores:**
- Communication: 52 (13 questions × 4)
- Leadership: 48 (12 questions × 4)
- Stress Management: 52 (13 questions × 4)
- Teamwork: 48 (12 questions × 4)

### Final Score Calculation
```javascript
Final Score = (Communication × 1.2) + 
              (Leadership × 1.5) + 
              (Stress Management × 1.1) + 
              (Teamwork × 1.3)
```

**Weighted Multipliers Explained:**
- **Leadership (1.5)** - Highest weight, critical for professional success
- **Teamwork (1.3)** - Important for collaborative work environments
- **Communication (1.2)** - Essential for effective interaction
- **Stress Management (1.1)** - Important for sustainability

## Classification Criteria

| Final Score | Classification | Description |
|------------|----------------|-------------|
| **< 80** | 🌱 Needs Improvement | Significant room for growth in professional skills |
| **80-130** | ⚖️ Balanced Personality | Well-rounded skills with good potential |
| **> 130** | ⭐ Strong Professional | Exceptional traits and leadership qualities |

### Score Interpretation

- **Needs Improvement (< 80)**
  - Focus on building foundational competencies
  - Prioritize top 2 weakest categories
  - Seek mentorship and training

- **Balanced Personality (80-130)**
  - Solid professional foundation
  - Opportunities for targeted growth
  - Ready for moderate responsibilities

- **Strong Professional (> 130)**
  - Exceptional professional skills
  - Leadership material
  - Should mentor others

## Screenshots

Screenshots of the application are available in the `tests/screenshots/` folder, showing:
- Test completion results
- Various scoring scenarios
- Different personality classifications
- Automated test captures

### Main Features

**Welcome Screen**
- Clean introduction with trait overview and test details
- Resume prompt for saved progress (v2.0)

**Quiz Interface**
- One question at a time with progress tracking
- Category badges for each question
- Navigation and review buttons

**Review Page (v2.0)**
- Grid view of all 50 questions
- Color-coded answered/unanswered status
- Click to edit any answer
- Submit from review

**Results Page**
- Comprehensive analysis with interactive Chart.js visualizations
- Category-wise score breakdown with colored bars
- Personalized improvement suggestions
- PDF download button (v2.0)

## Customization

### Modifying Questions

Edit `data.js` to customize questions:

```javascript
{
  id: 51,  // Unique ID
  category: "Communication",  // Category name
  question: "Your question text here?",
  options: [
    { text: "Option 1", weight: 1 },
    { text: "Option 2", weight: 2 },
    { text: "Option 3", weight: 3 },
    { text: "Option 4", weight: 4 }
  ]
}
```

### Changing Color Scheme

Modify CSS variables in `style.css`:

```css
:root {
  --primary-color: #6366f1;    /* Main theme color */
  --secondary-color: #10b981;  /* Accent color */
  --text-primary: #1f2937;     /* Main text */
  /* ... more variables */
}
```

### Adjusting Weights

Modify the formula in `script.js`:

```javascript
const finalScore = 
  (categoryScores.Communication * 1.2) +
  (categoryScores.Leadership * 1.5) +
  (categoryScores['Stress Management'] * 1.1) +
  (categoryScores.Teamwork * 1.3);
```

### Changing Classification Thresholds

Modify the classification logic in `script.js`:

```javascript
if (finalScore < 80) {
  classification = 'Needs Improvement';
} else if (finalScore >= 80 && finalScore <= 130) {
  classification = 'Balanced Personality';
} else {
  classification = 'Strong Professional Personality';
}
```

## Browser Support

| Browser | Version | Supported |
|---------|---------|-----------|
| Chrome | 90+ | ✅ |
| Firefox | 88+ | ✅ |
| Safari | 14+ | ✅ |
| Edge | 90+ | ✅ |
| Opera | 76+ | ✅ |

**Required Browser Features:**
- CSS Grid and Flexbox
- ES6 JavaScript
- LocalStorage API
- Canvas (for Chart.js)

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Ideas for Contribution
- Add more questions or categories
- Improve accessibility (ARIA labels, screen reader support)
- Create backend for result storage and user accounts
- Add multi-language support (i18n)
- Implement result comparison with peer averages
- Add time tracking and analytics
- Create admin dashboard for question management
- Improve PDF export with more customization
- Add email result delivery
- Implement dark mode toggle
- Add social media sharing capabilities

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Psychology Score Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contact

**Project Link:** [https://github.com/yourusername/Psychology_Score](https://github.com/yourusername/Psychology_Score)

**Author:** Your Name
- Email: vishnudharshan01627@gmail.com

## Acknowledgments

- **Chart.js** - For beautiful data visualizations
- **jsPDF** - For professional PDF report generation
- **MDN Web Docs** - For excellent web development references
- **Selenium** - For robust automated testing framework
- **Psychology Experts** - For guidance on assessment design

## Changelog

### Version 2.0.0 (2026-01-08) 🆕
**Major Feature Release**
- ✨ Auto-save progress after each answer
- 🔄 Resume functionality with saved state restoration
- 👁️ Review answers page with complete overview
- 📄 PDF export with professional formatting
- 🐛 Fixed 6 critical bugs (see `tests/BUG_FIX_REPORT.md`)
- ✅ 80% test coverage with comprehensive test suite
- 📁 Reorganized project structure with `tests/` folder
- 📚 Enhanced documentation and README

### Version 1.0.0 (2026-01-08)
**Initial Release**
- 50 comprehensive questions across 4 categories
- Four category evaluation system (Communication, Leadership, Stress Management, Teamwork)
- Weighted scoring algorithm with customizable multipliers
- Interactive quiz interface with progress tracking
- Detailed results page with Chart.js visualizations
- Responsive design for all devices
- Keyboard navigation support
- LocalStorage for temporary result storage

## Future Enhancements

### Planned Features
- [ ] Backend integration with database
- [ ] User authentication and account management
- [ ] Historical result tracking and progress over time
- [ ] Email result delivery with customizable templates
- [ ] Enhanced PDF reports with graphs and insights
- [ ] Admin dashboard for question and user management
- [ ] Multi-language support (Spanish, French, German, etc.)
- [ ] Dark mode toggle with theme persistence
- [ ] Social media sharing with custom cards
- [ ] Comparison with peer averages and industry benchmarks
- [ ] Mobile app (React Native/Flutter)
- [ ] API for third-party integrations
- [ ] Advanced analytics dashboard
- [ ] Team assessment mode for organizations
- [ ] Custom branding options for institutions

### Under Consideration
- Integration with HR systems
- Video question format
- AI-powered personalized recommendations
- Gamification with badges and achievements
- Live coaching integration

---

**Made with ❤️ for better professional development**

*Star ⭐ this repository if you find it helpful!*
