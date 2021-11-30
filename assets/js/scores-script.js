var scoreIdCounter = 0;
var highScoreEl = document.getElementById("scores-container");

// load scores from local storage and write to page
function loadScores() {

    var savedScores = localStorage.getItem("highscore");
    
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedScores) {
        return false;
    }
    console.log("Saved scores found!");
    // else, load up saved scores

    // parse string into object
    savedScores = JSON.parse(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
        console.log(savedScores[i].initials + ": " + savedScores[i].score);
        var newHighScore = document.createElement("li");
        newHighScore.textContent = savedScores[i].initials + ": " + savedScores[i].score;
        highScoreEl.appendChild(newHighScore);
    }

}

loadScores();
