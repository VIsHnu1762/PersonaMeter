// Questions data with categories and weighted options
// Categories: Communication, Leadership, Stress Management, Teamwork
// Each option has a weight (1-4): 1=Low, 2=Moderate, 3=Good, 4=Excellent

const questionsData = [
    // Communication Questions (1-13)
    {
        id: 1,
        category: "Communication",
        question: "How comfortable are you expressing your ideas in a group setting?",
        options: [
            { text: "Very uncomfortable", weight: 1 },
            { text: "Somewhat uncomfortable", weight: 2 },
            { text: "Comfortable", weight: 3 },
            { text: "Very comfortable", weight: 4 }
        ]
    },
    {
        id: 2,
        category: "Communication",
        question: "How often do you actively listen to others without interrupting?",
        options: [
            { text: "Rarely", weight: 1 },
            { text: "Sometimes", weight: 2 },
            { text: "Often", weight: 3 },
            { text: "Always", weight: 4 }
        ]
    },
    {
        id: 3,
        category: "Communication",
        question: "How clearly can you explain complex concepts to others?",
        options: [
            { text: "Struggle significantly", weight: 1 },
            { text: "Manage with difficulty", weight: 2 },
            { text: "Explain fairly well", weight: 3 },
            { text: "Explain very clearly", weight: 4 }
        ]
    },
    {
        id: 4,
        category: "Communication",
        question: "How well do you handle constructive criticism?",
        options: [
            { text: "Take it personally", weight: 1 },
            { text: "Feel defensive", weight: 2 },
            { text: "Accept it calmly", weight: 3 },
            { text: "Welcome and use it", weight: 4 }
        ]
    },
    {
        id: 5,
        category: "Communication",
        question: "How effective are you at written communication (emails, reports)?",
        options: [
            { text: "Often unclear", weight: 1 },
            { text: "Somewhat clear", weight: 2 },
            { text: "Clear and concise", weight: 3 },
            { text: "Highly effective", weight: 4 }
        ]
    },
    {
        id: 6,
        category: "Communication",
        question: "How well do you read non-verbal cues in conversations?",
        options: [
            { text: "Rarely notice", weight: 1 },
            { text: "Sometimes notice", weight: 2 },
            { text: "Usually notice", weight: 3 },
            { text: "Always attentive", weight: 4 }
        ]
    },
    {
        id: 7,
        category: "Communication",
        question: "How comfortable are you giving presentations?",
        options: [
            { text: "Extremely anxious", weight: 1 },
            { text: "Nervous but manage", weight: 2 },
            { text: "Fairly comfortable", weight: 3 },
            { text: "Very confident", weight: 4 }
        ]
    },
    {
        id: 8,
        category: "Communication",
        question: "How well do you adapt your communication style to different audiences?",
        options: [
            { text: "Use same style always", weight: 1 },
            { text: "Minimal adaptation", weight: 2 },
            { text: "Adapt moderately", weight: 3 },
            { text: "Adapt seamlessly", weight: 4 }
        ]
    },
    {
        id: 9,
        category: "Communication",
        question: "How effectively do you resolve misunderstandings?",
        options: [
            { text: "Often struggle", weight: 1 },
            { text: "Eventually resolve", weight: 2 },
            { text: "Resolve efficiently", weight: 3 },
            { text: "Prevent and resolve expertly", weight: 4 }
        ]
    },
    {
        id: 10,
        category: "Communication",
        question: "How open are you to different viewpoints?",
        options: [
            { text: "Stick to my views", weight: 1 },
            { text: "Somewhat open", weight: 2 },
            { text: "Open-minded", weight: 3 },
            { text: "Actively seek diverse views", weight: 4 }
        ]
    },
    {
        id: 11,
        category: "Communication",
        question: "How well do you articulate your feelings and emotions?",
        options: [
            { text: "Very difficult", weight: 1 },
            { text: "Somewhat difficult", weight: 2 },
            { text: "Express adequately", weight: 3 },
            { text: "Express clearly", weight: 4 }
        ]
    },
    {
        id: 12,
        category: "Communication",
        question: "How effectively do you use feedback to improve communication?",
        options: [
            { text: "Ignore feedback", weight: 1 },
            { text: "Consider sometimes", weight: 2 },
            { text: "Usually implement", weight: 3 },
            { text: "Actively seek and apply", weight: 4 }
        ]
    },
    {
        id: 13,
        category: "Communication",
        question: "How well do you maintain professional relationships through communication?",
        options: [
            { text: "Often have conflicts", weight: 1 },
            { text: "Maintain basic relationships", weight: 2 },
            { text: "Build good relationships", weight: 3 },
            { text: "Excel at relationship building", weight: 4 }
        ]
    },

    // Leadership Questions (14-25)
    {
        id: 14,
        category: "Leadership",
        question: "How often do you take initiative in group projects?",
        options: [
            { text: "Never", weight: 1 },
            { text: "Occasionally", weight: 2 },
            { text: "Frequently", weight: 3 },
            { text: "Always lead", weight: 4 }
        ]
    },
    {
        id: 15,
        category: "Leadership",
        question: "How well do you motivate others to achieve goals?",
        options: [
            { text: "Unable to motivate", weight: 1 },
            { text: "Motivate with difficulty", weight: 2 },
            { text: "Motivate effectively", weight: 3 },
            { text: "Inspire and energize", weight: 4 }
        ]
    },
    {
        id: 16,
        category: "Leadership",
        question: "How do you handle decision-making under pressure?",
        options: [
            { text: "Freeze or avoid", weight: 1 },
            { text: "Make hasty decisions", weight: 2 },
            { text: "Decide thoughtfully", weight: 3 },
            { text: "Excel under pressure", weight: 4 }
        ]
    },
    {
        id: 17,
        category: "Leadership",
        question: "How well do you delegate tasks to team members?",
        options: [
            { text: "Do everything myself", weight: 1 },
            { text: "Delegate reluctantly", weight: 2 },
            { text: "Delegate appropriately", weight: 3 },
            { text: "Empower others effectively", weight: 4 }
        ]
    },
    {
        id: 18,
        category: "Leadership",
        question: "How do you respond when your leadership decisions are questioned?",
        options: [
            { text: "Become defensive", weight: 1 },
            { text: "Feel uncertain", weight: 2 },
            { text: "Listen and explain", weight: 3 },
            { text: "Welcome dialogue", weight: 4 }
        ]
    },
    {
        id: 19,
        category: "Leadership",
        question: "How effectively do you set clear goals for your team?",
        options: [
            { text: "Goals are unclear", weight: 1 },
            { text: "Goals somewhat clear", weight: 2 },
            { text: "Set clear goals", weight: 3 },
            { text: "Set inspiring, clear goals", weight: 4 }
        ]
    },
    {
        id: 20,
        category: "Leadership",
        question: "How well do you handle conflicts within your team?",
        options: [
            { text: "Avoid conflicts", weight: 1 },
            { text: "Struggle to resolve", weight: 2 },
            { text: "Mediate effectively", weight: 3 },
            { text: "Turn conflicts into growth", weight: 4 }
        ]
    },
    {
        id: 21,
        category: "Leadership",
        question: "How do you balance being authoritative and approachable?",
        options: [
            { text: "Struggle with balance", weight: 1 },
            { text: "Lean too much one way", weight: 2 },
            { text: "Maintain good balance", weight: 3 },
            { text: "Master the balance", weight: 4 }
        ]
    },
    {
        id: 22,
        category: "Leadership",
        question: "How well do you recognize and appreciate team members' contributions?",
        options: [
            { text: "Rarely acknowledge", weight: 1 },
            { text: "Occasionally recognize", weight: 2 },
            { text: "Regularly appreciate", weight: 3 },
            { text: "Consistently celebrate success", weight: 4 }
        ]
    },
    {
        id: 23,
        category: "Leadership",
        question: "How do you handle failure or setbacks as a leader?",
        options: [
            { text: "Blame others", weight: 1 },
            { text: "Get discouraged", weight: 2 },
            { text: "Learn and move forward", weight: 3 },
            { text: "Turn failures into opportunities", weight: 4 }
        ]
    },
    {
        id: 24,
        category: "Leadership",
        question: "How well do you mentor and develop others?",
        options: [
            { text: "Don't mentor", weight: 1 },
            { text: "Provide basic guidance", weight: 2 },
            { text: "Actively mentor", weight: 3 },
            { text: "Develop future leaders", weight: 4 }
        ]
    },
    {
        id: 25,
        category: "Leadership",
        question: "How effectively do you communicate vision and direction?",
        options: [
            { text: "No clear vision", weight: 1 },
            { text: "Vision unclear to others", weight: 2 },
            { text: "Communicate vision well", weight: 3 },
            { text: "Inspire with compelling vision", weight: 4 }
        ]
    },

    // Stress Management Questions (26-38)
    {
        id: 26,
        category: "Stress Management",
        question: "How well do you cope with tight deadlines?",
        options: [
            { text: "Overwhelmed and anxious", weight: 1 },
            { text: "Stressed but complete tasks", weight: 2 },
            { text: "Handle well with planning", weight: 3 },
            { text: "Thrive under deadlines", weight: 4 }
        ]
    },
    {
        id: 27,
        category: "Stress Management",
        question: "How do you react to unexpected changes or challenges?",
        options: [
            { text: "Panic or freeze", weight: 1 },
            { text: "Feel anxious but adapt slowly", weight: 2 },
            { text: "Adapt reasonably well", weight: 3 },
            { text: "Embrace change confidently", weight: 4 }
        ]
    },
    {
        id: 28,
        category: "Stress Management",
        question: "How well do you maintain work-life balance?",
        options: [
            { text: "No balance, always stressed", weight: 1 },
            { text: "Struggle to balance", weight: 2 },
            { text: "Maintain decent balance", weight: 3 },
            { text: "Excellent balance", weight: 4 }
        ]
    },
    {
        id: 29,
        category: "Stress Management",
        question: "How do you handle criticism or negative feedback?",
        options: [
            { text: "Very stressed, take personally", weight: 1 },
            { text: "Feel upset but recover", weight: 2 },
            { text: "Handle constructively", weight: 3 },
            { text: "Use as growth opportunity", weight: 4 }
        ]
    },
    {
        id: 30,
        category: "Stress Management",
        question: "How well do you manage multiple priorities simultaneously?",
        options: [
            { text: "Feel overwhelmed", weight: 1 },
            { text: "Manage with difficulty", weight: 2 },
            { text: "Prioritize effectively", weight: 3 },
            { text: "Excel at multitasking", weight: 4 }
        ]
    },
    {
        id: 31,
        category: "Stress Management",
        question: "How often do you practice stress-relief techniques?",
        options: [
            { text: "Never", weight: 1 },
            { text: "Rarely", weight: 2 },
            { text: "Regularly", weight: 3 },
            { text: "Daily routine", weight: 4 }
        ]
    },
    {
        id: 32,
        category: "Stress Management",
        question: "How well do you recognize your stress triggers?",
        options: [
            { text: "Unaware of triggers", weight: 1 },
            { text: "Somewhat aware", weight: 2 },
            { text: "Clearly identify triggers", weight: 3 },
            { text: "Proactively manage triggers", weight: 4 }
        ]
    },
    {
        id: 33,
        category: "Stress Management",
        question: "How do you handle conflict in high-pressure situations?",
        options: [
            { text: "Avoid or escalate", weight: 1 },
            { text: "Struggle to manage", weight: 2 },
            { text: "Handle calmly", weight: 3 },
            { text: "De-escalate effectively", weight: 4 }
        ]
    },
    {
        id: 34,
        category: "Stress Management",
        question: "How well do you maintain focus during stressful periods?",
        options: [
            { text: "Lose focus easily", weight: 1 },
            { text: "Focus wavers", weight: 2 },
            { text: "Maintain focus mostly", weight: 3 },
            { text: "Laser-focused always", weight: 4 }
        ]
    },
    {
        id: 35,
        category: "Stress Management",
        question: "How do you recover after a stressful day?",
        options: [
            { text: "Carry stress for days", weight: 1 },
            { text: "Take time to recover", weight: 2 },
            { text: "Recover by next day", weight: 3 },
            { text: "Bounce back immediately", weight: 4 }
        ]
    },
    {
        id: 36,
        category: "Stress Management",
        question: "How well do you ask for help when overwhelmed?",
        options: [
            { text: "Never ask for help", weight: 1 },
            { text: "Reluctant to ask", weight: 2 },
            { text: "Ask when necessary", weight: 3 },
            { text: "Proactively seek support", weight: 4 }
        ]
    },
    {
        id: 37,
        category: "Stress Management",
        question: "How do you handle failure or mistakes under pressure?",
        options: [
            { text: "Dwell on mistakes", weight: 1 },
            { text: "Feel guilty, then move on", weight: 2 },
            { text: "Learn and improve", weight: 3 },
            { text: "Quick learner, resilient", weight: 4 }
        ]
    },
    {
        id: 38,
        category: "Stress Management",
        question: "How well do you maintain positive attitude during challenges?",
        options: [
            { text: "Become negative", weight: 1 },
            { text: "Struggle to stay positive", weight: 2 },
            { text: "Mostly stay positive", weight: 3 },
            { text: "Always optimistic", weight: 4 }
        ]
    },

    // Teamwork Questions (39-50)
    {
        id: 39,
        category: "Teamwork",
        question: "How well do you collaborate with diverse team members?",
        options: [
            { text: "Prefer working alone", weight: 1 },
            { text: "Work with similar people only", weight: 2 },
            { text: "Collaborate well with most", weight: 3 },
            { text: "Thrive in diverse teams", weight: 4 }
        ]
    },
    {
        id: 40,
        category: "Teamwork",
        question: "How do you contribute to team discussions?",
        options: [
            { text: "Rarely participate", weight: 1 },
            { text: "Contribute minimally", weight: 2 },
            { text: "Active participant", weight: 3 },
            { text: "Drive meaningful discussions", weight: 4 }
        ]
    },
    {
        id: 41,
        category: "Teamwork",
        question: "How well do you support team members who are struggling?",
        options: [
            { text: "Focus on my work only", weight: 1 },
            { text: "Help if asked", weight: 2 },
            { text: "Proactively offer help", weight: 3 },
            { text: "Mentor and support actively", weight: 4 }
        ]
    },
    {
        id: 42,
        category: "Teamwork",
        question: "How do you handle disagreements within the team?",
        options: [
            { text: "Create more conflict", weight: 1 },
            { text: "Stay silent", weight: 2 },
            { text: "Express views respectfully", weight: 3 },
            { text: "Facilitate consensus", weight: 4 }
        ]
    },
    {
        id: 43,
        category: "Teamwork",
        question: "How well do you share credit for team achievements?",
        options: [
            { text: "Take credit myself", weight: 1 },
            { text: "Acknowledge some contributions", weight: 2 },
            { text: "Share credit fairly", weight: 3 },
            { text: "Highlight others' contributions", weight: 4 }
        ]
    },
    {
        id: 44,
        category: "Teamwork",
        question: "How reliable are you in meeting team commitments?",
        options: [
            { text: "Often miss deadlines", weight: 1 },
            { text: "Sometimes late", weight: 2 },
            { text: "Usually reliable", weight: 3 },
            { text: "Always dependable", weight: 4 }
        ]
    },
    {
        id: 45,
        category: "Teamwork",
        question: "How well do you adapt to different team roles?",
        options: [
            { text: "Inflexible with roles", weight: 1 },
            { text: "Prefer specific roles", weight: 2 },
            { text: "Adapt to needed roles", weight: 3 },
            { text: "Excel in any role", weight: 4 }
        ]
    },
    {
        id: 46,
        category: "Teamwork",
        question: "How do you contribute to team morale?",
        options: [
            { text: "Bring negativity", weight: 1 },
            { text: "Neutral presence", weight: 2 },
            { text: "Positive contributor", weight: 3 },
            { text: "Boost team spirit actively", weight: 4 }
        ]
    },
    {
        id: 47,
        category: "Teamwork",
        question: "How well do you give constructive feedback to teammates?",
        options: [
            { text: "Never provide feedback", weight: 1 },
            { text: "Give critical feedback only", weight: 2 },
            { text: "Provide balanced feedback", weight: 3 },
            { text: "Excel at constructive feedback", weight: 4 }
        ]
    },
    {
        id: 48,
        category: "Teamwork",
        question: "How do you handle team members who don't pull their weight?",
        options: [
            { text: "Complain or ignore", weight: 1 },
            { text: "Do their work myself", weight: 2 },
            { text: "Address issue diplomatically", weight: 3 },
            { text: "Coach and support improvement", weight: 4 }
        ]
    },
    {
        id: 49,
        category: "Teamwork",
        question: "How well do you build trust within your team?",
        options: [
            { text: "Trust issues common", weight: 1 },
            { text: "Basic trust level", weight: 2 },
            { text: "Build good trust", weight: 3 },
            { text: "Create strong, trusting bonds", weight: 4 }
        ]
    },
    {
        id: 50,
        category: "Teamwork",
        question: "How effectively do you celebrate team successes?",
        options: [
            { text: "Don't celebrate", weight: 1 },
            { text: "Minimal acknowledgment", weight: 2 },
            { text: "Celebrate appropriately", weight: 3 },
            { text: "Create memorable celebrations", weight: 4 }
        ]
    }
];
