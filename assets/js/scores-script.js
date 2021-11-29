var scoreIdCounter = 0;
var highScoreEl = document.getElementById("high-score-initials");

// load scores from local storage
var loadScores = function() {

    var savedScores = localStorage.getItem("highscore");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedScores) {
      return false;
    }
  console.log("Saved scores found!");
  // else, load up saved scores

  // parse into array of objects
  savedScores = JSON.parse(savedScores);

  // loop through savedTasks array
  for (var i = 0; i < savedScores.length; i++) {
    // pass each task object into the `createTaskEl()` function
    createScoreEl(savedScores[i]);
  }

}

loadScores();

// create elements on page with loaded scores
var createScoreEl = function (savedScores) {

    var listItemEl = document.createElement("li");
    listItemEl.className = "score-initials";
    listItemEl.setAttribute("data-score-id", scoreIdCounter);
    listItemEl.textContent = "Initials: " + savedScores.initials + " Score: " + savedScores.score;
    highScoreEl.appendChild(listItemEl);

    //increment score id by one after entry
    scoreIdCounter++;
}
