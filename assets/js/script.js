var startQuizBtn = document.getElementById("start-quiz"); // target start quiz button
var quizContentEl =  document.getElementById("quiz-content");
var initialsInputEl = document.getElementById("initials-wrapper");
var questionText = document.getElementById("quiz-h2");
var resultsText = document.getElementById("result");
// elements from highscores.html
var highScoreEl = document.getElementById("high-score-initials");
var scoreIdCounter = 0;

// variables to hold time left and target HTML display
var timeLeft = 75;
var timeLeftDisplay = document.getElementById("quiz-timer");

// variable to set which question/answers are displayed
var currentQ = 0;

// empty array to hold initials entered after quiz in highscores page
var initialsArr = [];

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
        question: "How do we stop a loop from from repeating indefinitely?",
        answers: {
        a: "When the condition is false.",
        b: "When the condition is true.",
        c: "When we have iterated through half of the condition.",
        d: "With the break keyword."
        }, 
    correctAnswer: "b"
    },
    {
        question: "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
        answers: {
        a: "pop() and unshift()",
        b: "push() and sort()",
        c: "forEach() and pop()",
        d: "concat() and shift()"
        }, 
    correctAnswer: "a"
    },
    {
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        answers: {
        a: "1",
        b: "0",
        c: "2",
        d: "3"
        }, 
    correctAnswer: "a"
    }
];

var quizTimer = function() {

    timeLeftDisplay.textContent = timeLeft;

    // count down from 75 seconds and update timer display, stop at 0
    setInterval ( function() {
        if (timeLeft === 0) {
            clearInterval(quizTimer);
        } else {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        }
    }, 1000);

};

var generateQuestions = function () {

    // set question text
    questionText.textContent = quizQuestions[currentQ].question;

    // create buttons and apply answer text to them
    var answerA = document.createElement("button");
    answerA.className = "quiz-btn";
    answerA.setAttribute("id", "a");
    answerA.textContent = quizQuestions[currentQ].answers.a;
    quizContentEl.appendChild(answerA);

    var answerB = document.createElement("button");
    answerB.className = "quiz-btn";
    answerB.setAttribute("id", "b");
    answerB.textContent = quizQuestions[currentQ].answers.b;
    quizContentEl.appendChild(answerB);

    var answerC = document.createElement("button");
    answerC.className = "quiz-btn";
    answerC.setAttribute("id", "c");
    answerC.textContent = quizQuestions[currentQ].answers.c;
    quizContentEl.appendChild(answerC);

    var answerD = document.createElement("button");
    answerD.className = "quiz-btn";
    answerD.setAttribute("id", "d");
    answerD.textContent = quizQuestions[currentQ].answers.d;
    quizContentEl.appendChild(answerD);

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

var switchQuestion = function (event) {

    var buttonClick = event.target;
    var lastQuestion = quizQuestions.length - 1;
    // only iterate through questions array after start quiz is clicked
    if (currentQ === lastQuestion) {
        endQuiz();
    } else if (buttonClick) {
        currentQ++;
        questionText.textContent = quizQuestions[currentQ].question;
        document.getElementById("a").textContent = quizQuestions[currentQ].answers.a;
        document.getElementById("b").textContent = quizQuestions[currentQ].answers.b;
        document.getElementById("c").textContent = quizQuestions[currentQ].answers.c;
        document.getElementById("d").textContent = quizQuestions[currentQ].answers.d;
    }
};

var checkAnswer = function (event) {

    var buttonId = event.target.getAttribute("id");
    
    if (buttonId == quizQuestions[currentQ].correctAnswer) {
        resultsText.textContent = "Correct!";
    } else {
        resultsText.textContent = "Incorrect - time left reduced by 10 seconds";
        timeLeft = timeLeft - 10;
    }

}

var endQuiz = function () {

    // stop the timer when the quiz has ended
    clearInterval(quizTimer);
    // change text at top when quiz ends
    questionText.textContent = "You have completed the quiz.";
    resultsText.textContent = "";
    // hide buttons when quiz ends
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";
    // create input field for initials
    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type", "text");
    initialsInput.setAttribute("name", "initials");
    initialsInput.setAttribute("placeholder", "Enter Initials");
    initialsInput.className = "initials-input";
    initialsInputEl.appendChild(initialsInput);
    // create submit button for initials
    var initialsSubmit = document.createElement("button");
    initialsSubmit.setAttribute("type", "submit");
    initialsSubmit.className = "quiz-btn";
    initialsSubmit.textContent = "Submit High Score";
    initialsInputEl.appendChild(initialsSubmit);

}

var submitHighScore =  function (event) {
    event.preventDefault();

    var initialsInput = document.querySelector("input[name='initials']").value;
    console.log(initialsInput);

    // check that initials were entered
    if (!initialsInput) {
        alert("Please enter your initials");
        return false;
    } else {
         // save initials to array to go to storage
        initialsArr.push(initialsInput);
        // save intials to local storage
        localStorage.setItem("highscore", JSON.stringify(initialsArr));

        //createScoreEl(initialsInput);    
    }

}

var createScoreEl = function () {

    var listItemEl = document.createElement("li");
    listItemEl.className = "score-initials";
    listItemEl.setAttribute("data-score-id", scoreIdCounter);
    listItemEl.textContent = "Test";
    highScoreEl.appendChild(listItemEl);

    //increment score id by one after entry
    scoreIdCounter++;
}

var loadScores = function() {
    var savedScores = localStorage.getItem("highscore");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedScores) {
      return false;
    }
}

startQuizBtn.addEventListener('click', startQuiz);
quizContentEl.addEventListener('click', checkAnswer);
quizContentEl.addEventListener('click', switchQuestion);
initialsInputEl.addEventListener('submit', submitHighScore);