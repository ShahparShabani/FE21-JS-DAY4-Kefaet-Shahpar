const leftPerson = prompt("Please enter name of the first player:");
const rightPerson = prompt("Please enter name of the second player:");

let scores = new Array();

onDocLoad();

document.getElementById("btn-left").addEventListener("click", function () {
  leftScore = rollDice();
  document.getElementById("number-left").innerText = leftScore;
  scores.push(leftScore);
  if (scores.length >= 2) {
    findMaxScore();
  }
});
document.getElementById("btn-right").addEventListener("click", function () {
  rightScore = rollDice();
  document.getElementById("number-right").innerText = rightScore;
  scores.push(rightScore);
  if (scores.length >= 2) {
    findMaxScore();
    scores = [];
  }
});

function onDocLoad() {
  if (
    leftPerson != null &&
    leftPerson != "" &&
    rightPerson != null &&
    rightPerson !=""
  ) {
    document.getElementById(
      "header-title"
    ).innerHTML = `${leftPerson} vs. ${rightPerson}`;
  } else {
    document.getElementById(
      "header-title"
    ).innerHTML = `There is no enough players.`;
  }
}

function rollDice() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
  return num;
}

function findMaxScore() {
  let winner = document.querySelector("#winner");
  if (leftScore > rightScore) {
    winner.innerHTML = `Winner is ${leftPerson} with ${leftScore}.`;
    console.log("Winner is left with");
  } else if (leftScore < rightScore) {
    winner.innerHTML = `Winner is ${rightPerson} with ${rightScore}.`;
    console.log("Winner is right with");
  } else {
    winner.innerHTML = `Both ${leftPerson} and ${rightPerson} have the scame score ${leftScore}.`;
    console.log("both");
  }
}
