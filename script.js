// Makes the computer's choice.
// Randomly chooses between rock, paper or scissors.
function getComputerChoice() {
  const MAX = 3; // Generates, at the maximum, 3 different random values (between 0-2).
  const randomValue = Math.floor(Math.random() * MAX);

  switch (randomValue) {
    case 0: {
      return "rock";
    }
    case 1: {
      return "paper";
    }
    case 2: {
      return "scissors";
    }
  }
}

// Prompts human for a choice.
// Will not let the human choose an invalid option.
function getHumanChoice() {
  while (true) {
    let humanChoice = prompt("Rock, paper or scissors?");
    humanChoice = humanChoice.toLocaleLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
      return humanChoice;
    }
    else {
      alert("Invalid option! Please try again.");
      continue;
    }
  }
}

// Plays a game of rock paper scissors.
// Determines a winner after 5 rounds.
function playGame() {
  alert("Welcome to rock, paper, scissors! A game where you play five rounds of rock paper scissors against the computer!");

  let humanScore = 0;
  let computerScore = 0;

  // Plays a sinlge round of rock, paper, scissors.
  // Determines who is the winner and increments their respective score.
  function playRound(humanChoice, computerChoice) {
    alert(`Your choice: ${humanChoice}\nThe computer's choice: ${computerChoice}`);

    // Checks if the human wins
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
      humanScore += 1;
      alert("You win!");
      return;
    }

    // Checks if the computer wins
    if (computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "paper" && humanChoice == "rock" ||
        computerChoice == "scissors" && humanChoice == "paper") {
      computerScore += 1;
      alert("You lose! The computer wins!");
      return;
    }

    // If neither of those previous conditions are met
    // this means it was a draw.
    alert("Draw! Better luck next time!");
  }

  for (let i = 0; i < 5; i++) {
    alert(`Round ${i+1}\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    alert(`Congratulations! You won the game!\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
  }
  else if (computerScore > humanScore) {
    alert(`Awww, you lost the game! Better luck next time!\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
  }
  else {
    alert(`You tied with the computer!\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
  }
}

playGame();
