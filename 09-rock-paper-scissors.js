let wins = 0;
let losses = 0;
let ties = 0;

const savedScore = localStorage.getItem("rpsScore");
if (savedScore) {
  const score = JSON.parse(savedScore);
  wins = score.wins;
  losses = score.losses;
  ties = score.ties;
  updateScore();
}

function playGame(userPlayed) {
  let randomNum = Math.random();
  let computerPlayed = "";
  console.log(randomNum);
  if (randomNum <= 1 / 3) {
    computerPlayed = "rock";
  } else if (randomNum <= 2 / 3) {
    computerPlayed = "paper";
  } else {
    computerPlayed = "scissors";
  }

  if (
    (computerPlayed == "rock" && userPlayed == "scissors") ||
    (computerPlayed == "paper" && userPlayed == "rock") ||
    (computerPlayed == "scissors" && userPlayed == "paper")
  ) {
    losses++;
    document.querySelector(".scoreOut").innerHTML = `You lose! <br><br>
    You <img class="move-icon" src="${userPlayed}-emoji.png"> - <img class="move-icon" src="${computerPlayed}-emoji.png"> Computer`;
  } else if (computerPlayed == userPlayed) {
    ties++;
    document.querySelector(".scoreOut").innerHTML = `It's a tie! <br><br>
    You <img class="move-icon" src="${userPlayed}-emoji.png"> - <img class="move-icon" src="${computerPlayed}-emoji.png"> Computer`;
  } else {
    wins++;
    document.querySelector(".scoreOut").innerHTML = `You win! <br><br>
    You <img class="move-icon" src="${userPlayed}-emoji.png"> - <img class="move-icon" src="${computerPlayed}-emoji.png">Computer`;
  }

  updateScore();

  // Save to localStorage
  localStorage.setItem(
    "rpsScore",
    JSON.stringify({
      wins: wins,
      losses: losses,
      ties: ties,
    })
  );
}

function updateScore() {
  document.querySelector(
    ".score"
  ).innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;
  document.querySelector(".score").innerText = "Wins: 0, Losses: 0, Ties: 0";
  localStorage.removeItem("rpsScore");
  document.querySelector(".scoreOut").innerText = "";
}
