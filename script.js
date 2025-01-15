const foodQuiz = [ // Fixed spelling to 'foodQuiz'
    {
        question: "Which country is Biryani a popular dish in?",
        choices: ["India", "Nepal", "Pakistan", "Sri Lanka"],
        correctAnswer: 0 // Index of the correct answer ("India")
    },
    {
        question: "What is a popular street food in Sri Lanka?",
        choices: ["Sushi", "Kottu Roti", "Pizza", "Tacos"],
        correctAnswer: 1 // "Kottu Roti"
    },
    {
        question: "Momo dumplings are a specialty of which country?",
        choices: ["Afghanistan", "Nepal", "Pakistan", "India"],
        correctAnswer: 1 // "Nepal"
    }, 
    {
        question: "What Country does Tex-Mex Originate from?",
        choices: ["United States", "Mexico", "Canada", "Mexico and United States"],
        correctAnswer: 3 // "Mexico and United States"
    },
    {
        question: "Which country is known for Sushi?",
        choices: ["Japan", "China", "Korea", "Vietnam"],
        correctAnswer: 0 // "Japan"
    }
];

document.getElementById('start-quiz').addEventListener('click', startQuiz);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('quiz-container').innerHTML = renderQuestion(currentQuestionIndex);
}

function renderQuestion(index) {
    const question = foodQuiz[index];
    let choicesHTML = '';
    question.choices.forEach((choice, i) => {
        choicesHTML += `
            <button class="btn btn-secondary mt-2" onclick="checkAnswer(${i})">${choice}</button>
        `;
    });

    return `
        <h3>${question.question}</h3>
        <div>${choicesHTML}</div>
    `;
}

function checkAnswer(selectedIndex) {
    const correctIndex = foodQuiz[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < foodQuiz.length) {
        document.getElementById('quiz-container').innerHTML = renderQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').innerHTML = `
        <h3>Quiz Completed!</h3>
        <p>Your score: ${score} out of ${foodQuiz.length}</p>
    `;
}
