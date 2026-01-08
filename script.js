/**
 * Psychological Assessment System - Main Script
 * Handles quiz logic, navigation, calculations, and result storage
 */

// ===========================
// Global State Management
// ===========================
let currentQuestionIndex = 0;
let userAnswers = {}; // Store user answers: { questionId: weight }
let startTime = null;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const categoryBadge = document.getElementById('category-badge');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// ===========================
// Event Listeners
// ===========================
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', showPreviousQuestion);
nextBtn.addEventListener('click', showNextQuestion);
submitBtn.addEventListener('click', submitQuiz);

// ===========================
// Quiz Initialization
// ===========================
/**
 * Initialize and start the quiz
 */
function startQuiz() {
    // Hide welcome screen, show quiz screen
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');

    // Record start time
    startTime = new Date();

    // Reset state
    currentQuestionIndex = 0;
    userAnswers = {};

    // Display first question
    displayQuestion();
}

// ===========================
// Question Display Logic
// ===========================
/**
 * Display the current question and its options
 */
function displayQuestion() {
    const question = questionsData[currentQuestionIndex];

    // Update question text
    questionText.textContent = question.question;

    // Update category badge
    categoryBadge.textContent = question.category;
    updateCategoryBadgeColor(question.category);

    // Update progress
    updateProgress();

    // Display options
    displayOptions(question);

    // Update button states
    updateNavigationButtons();
}

/**
 * Display options for the current question
 */
function displayOptions(question) {
    // Clear existing options
    optionsContainer.innerHTML = '';

    // Create option elements
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        // Check if this option was previously selected
        const isSelected = userAnswers[question.id] === option.weight;
        if (isSelected) {
            optionDiv.classList.add('selected');
        }

        // Create radio input
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question-${question.id}`;
        radio.value = option.weight;
        radio.className = 'option-radio';
        radio.id = `option-${question.id}-${index}`;
        radio.checked = isSelected;

        // Create label
        const label = document.createElement('label');
        label.className = 'option-label';
        label.htmlFor = `option-${question.id}-${index}`;
        label.textContent = option.text;

        // Add event listener
        optionDiv.addEventListener('click', () => selectOption(question.id, option.weight, optionDiv));

        // Append elements
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });
}

/**
 * Handle option selection
 */
function selectOption(questionId, weight, selectedDiv) {
    // Store the answer
    userAnswers[questionId] = weight;

    // Update UI - remove 'selected' class from all options
    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));

    // Add 'selected' class to clicked option
    selectedDiv.classList.add('selected');

    // Check the radio button
    const radio = selectedDiv.querySelector('input[type="radio"]');
    radio.checked = true;

    // Enable next button
    nextBtn.disabled = false;

    // Auto-advance after selection (optional - can be removed if not desired)
    if (currentQuestionIndex < questionsData.length - 1) {
        setTimeout(() => {
            showNextQuestion();
        }, 500);
    }
}

// ===========================
// Navigation Functions
// ===========================
/**
 * Show the previous question
 */
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

/**
 * Show the next question
 */
function showNextQuestion() {
    if (currentQuestionIndex < questionsData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

/**
 * Update navigation button states
 */
function updateNavigationButtons() {
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Check if current question is answered
    const currentQuestion = questionsData[currentQuestionIndex];
    const isAnswered = userAnswers.hasOwnProperty(currentQuestion.id);

    // Next button
    if (currentQuestionIndex === questionsData.length - 1) {
        // Last question - hide next, show submit
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        submitBtn.disabled = !isAnswered;
    } else {
        // Not last question
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
        nextBtn.disabled = !isAnswered;
    }
}

/**
 * Update progress bar and text
 */
function updateProgress() {
    const current = currentQuestionIndex + 1;
    const total = questionsData.length;
    const percentage = (current / total) * 100;

    // Update text
    progressText.textContent = `Question ${current} of ${total}`;

    // Update progress bar
    progressFill.style.width = `${percentage}%`;
}

/**
 * Update category badge color based on category
 */
function updateCategoryBadgeColor(category) {
    categoryBadge.className = 'category-badge';

    switch (category) {
        case 'Communication':
            categoryBadge.style.background = '#3b82f6';
            break;
        case 'Leadership':
            categoryBadge.style.background = '#ef4444';
            break;
        case 'Stress Management':
            categoryBadge.style.background = '#f59e0b';
            break;
        case 'Teamwork':
            categoryBadge.style.background = '#10b981';
            break;
        default:
            categoryBadge.style.background = '#6366f1';
    }
}

// ===========================
// Quiz Submission & Calculation
// ===========================
/**
 * Submit the quiz and calculate results
 */
function submitQuiz() {
    // Validate all questions are answered
    if (Object.keys(userAnswers).length !== questionsData.length) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Calculate results
    const results = calculateResults();

    // Store results in localStorage
    localStorage.setItem('assessmentResults', JSON.stringify(results));

    // Redirect to results page
    window.location.href = 'result.html';
}

/**
 * Calculate total and category-wise scores
 * Apply weighted formula for final score
 */
function calculateResults() {
    // Initialize category scores
    const categoryScores = {
        'Communication': 0,
        'Leadership': 0,
        'Stress Management': 0,
        'Teamwork': 0
    };

    // Calculate total score and category scores
    let totalScore = 0;

    questionsData.forEach(question => {
        const answer = userAnswers[question.id];
        if (answer !== undefined) {
            totalScore += answer;
            categoryScores[question.category] += answer;
        }
    });

    // Apply weighted formula
    // FinalScore = (Communication * 1.2) + (Leadership * 1.5) + (Stress * 1.1) + (Teamwork * 1.3)
    const finalScore =
        (categoryScores.Communication * 1.2) +
        (categoryScores.Leadership * 1.5) +
        (categoryScores['Stress Management'] * 1.1) +
        (categoryScores.Teamwork * 1.3);

    // Calculate time taken
    const endTime = new Date();
    const timeTaken = Math.round((endTime - startTime) / 1000); // in seconds

    // Determine personality classification
    let classification;
    if (finalScore < 80) {
        classification = 'Needs Improvement';
    } else if (finalScore >= 80 && finalScore <= 130) {
        classification = 'Balanced Personality';
    } else {
        classification = 'Strong Professional Personality';
    }

    // Return results object
    return {
        totalScore: totalScore,
        finalScore: Math.round(finalScore * 100) / 100, // Round to 2 decimal places
        categoryScores: categoryScores,
        classification: classification,
        timeTaken: timeTaken,
        timestamp: new Date().toISOString(),
        totalQuestions: questionsData.length,
        answeredQuestions: Object.keys(userAnswers).length
    };
}

// ===========================
// Utility Functions
// ===========================
/**
 * Format time from seconds to readable format
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

/**
 * Get percentage score for a category
 */
function getCategoryPercentage(score, maxScore) {
    return Math.round((score / maxScore) * 100);
}

// ===========================
// Keyboard Navigation Support
// ===========================
document.addEventListener('keydown', (e) => {
    // Only handle keyboard events when quiz is active
    if (!quizScreen.classList.contains('active')) return;

    switch (e.key) {
        case 'ArrowLeft':
            if (!prevBtn.disabled) {
                showPreviousQuestion();
            }
            break;
        case 'ArrowRight':
            if (!nextBtn.disabled) {
                showNextQuestion();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            // Select option by number key
            const optionIndex = parseInt(e.key) - 1;
            const options = optionsContainer.querySelectorAll('.option');
            if (options[optionIndex]) {
                options[optionIndex].click();
            }
            break;
        case 'Enter':
            if (currentQuestionIndex === questionsData.length - 1 && !submitBtn.disabled) {
                submitQuiz();
            } else if (!nextBtn.disabled) {
                showNextQuestion();
            }
            break;
    }
});

// ===========================
// Page Load Check
// ===========================
/**
 * Check if user is returning to complete quiz
 */
window.addEventListener('load', () => {
    // Check if there's saved progress (optional feature for future)
    // For now, always start fresh
    console.log('Psychological Assessment System loaded');
    console.log(`Total questions: ${questionsData.length}`);

    // Validate data structure
    validateQuestionData();
});

/**
 * Validate question data structure
 */
function validateQuestionData() {
    if (!questionsData || questionsData.length === 0) {
        console.error('Question data is missing or empty!');
        return;
    }

    // Check if we have exactly 50 questions
    if (questionsData.length !== 50) {
        console.warn(`Expected 50 questions, found ${questionsData.length}`);
    }

    // Validate each question has required properties
    questionsData.forEach((question, index) => {
        if (!question.id || !question.category || !question.question || !question.options) {
            console.error(`Question ${index + 1} is missing required properties`);
        }

        // Validate options
        if (question.options.length !== 4) {
            console.warn(`Question ${question.id} should have 4 options, has ${question.options.length}`);
        }
    });

    console.log('✅ Question data validation complete');
}

// ===========================
// Prevent Accidental Page Exit
// ===========================
window.addEventListener('beforeunload', (e) => {
    // Only show warning if quiz is in progress
    if (quizScreen.classList.contains('active') && Object.keys(userAnswers).length > 0) {
        e.preventDefault();
        e.returnValue = 'You have unsaved progress. Are you sure you want to leave?';
        return e.returnValue;
    }
});
