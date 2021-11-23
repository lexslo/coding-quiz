var startQuizBtn = document.getElementById("start-quiz"); // target start quiz button
var quizButtonsEl =  document.getElementById("quiz-page");

// variable to set which question/answers are displayed
var currentQ = 0;

// create array of objects to store questions, question answers, and correct answers
const quizQuestions = [
    {
        question: "Commonly used data types do NOT include",
        answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
        }, 
    correctAnswer: "c"
    },
    {
        question: "Second question",
        answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d"
        }, 
    correctAnswer: "b"
    },
    {
        question: "Third question",
        answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d"
        }, 
    correctAnswer: "c"
    },
    {
        question: "Fourth question",
        answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d"
        }, 
    correctAnswer: "d"
    }
];

var quizTimer = function() {
    // variables to hold time left and target HTML display
    var timeLeft = 75;
    var timeLeftDisplay = document.getElementById("quiz-timer");
    timeLeftDisplay.textContent = timeLeft;
    // count down from 75 seconds and update timer display, stop at 0
    setInterval ( function() {
        if (timeLeft < 0) {
            clearInterval(quizTimer);
        } else {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        }
    }, 1000);

};

var generateQuestions = function () {

    // set question text
    var questionText = document.getElementById("quiz-h2");
    questionText.textContent = quizQuestions[currentQ].question;

    // create buttons and apply answer text to them
    var answerA = document.createElement("button");
    answerA.className = "quiz-btn";
    answerA.setAttribute("id", "answer-a");
    answerA.textContent = quizQuestions[currentQ].answers.a;
    quizButtonsEl.appendChild(answerA);

    var answerB = document.createElement("button");
    answerB.className = "quiz-btn";
    answerB.setAttribute("id", "answer-b");
    answerB.textContent = quizQuestions[currentQ].answers.b;
    quizButtonsEl.appendChild(answerB);

    var answerC = document.createElement("button");
    answerC.className = "quiz-btn";
    answerC.setAttribute("id", "answer-c");
    answerC.textContent = quizQuestions[currentQ].answers.c;
    quizButtonsEl.appendChild(answerC);

    var answerD = document.createElement("button");
    answerD.className = "quiz-btn";
    answerD.setAttribute("id", "answer-d");
    answerD.textContent = quizQuestions[currentQ].answers.d;
    quizButtonsEl.appendChild(answerD);

}

var startQuiz = function () {

    // remove text and previous heading content
    var pageText = document.getElementById("quiz-p");
    pageText.textContent = "";
    // remove start quiz button from view
    startQuizBtn.style.display = "none";

    quizTimer();
    generateQuestions();

};

startQuizBtn.addEventListener('click', startQuiz);