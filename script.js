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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
