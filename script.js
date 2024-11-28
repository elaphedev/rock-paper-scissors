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

// Prompts user for a choice.
// Will not let user choose an invalid option.
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

console.log(getHumanChoice());
