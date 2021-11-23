var startQuiz = document.getElementById("start-quiz"); // target start quiz button

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

startQuiz.addEventListener('click', quizTimer);