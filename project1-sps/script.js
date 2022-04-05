var rollDice = function () {
  var randDecimal = Math.random();
  var randNumber = randDecimal * 3;
  var diceRoll = Math.floor(randNumber);
  var diceNum = diceRoll + 1;
  return diceNum;
};

var playerWins = 0;
var computerWins = 0;
var drawGames = 0;
var totalPlays = 0;

var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

var comGuess = "";

// To determine if computer guess from dice roll is scissors, paper, or stone
var guessByComputer = function () {
  var computerGuess = rollDice();
  if (computerGuess == 1) {
    comGuess = SCISSORS;
    console.log(`Computer guess ${comGuess}.`);
    return 1;
  } else if (computerGuess == 2) {
    comGuess = STONE;
    console.log(`Computer guess ${comGuess}.`);
    return 2;
  } else if (computerGuess == 3) {
    comGuess = PAPER;
    console.log(`Computer guess ${comGuess}.`);
    return 3;
  }
};

// To validate user input
var guessByUser = function (input) {
  if (input == SCISSORS) {
    console.log(`User guess ${input}`);
    return 1;
  }
  if (input == STONE) {
    console.log(`User guess ${input}`);
    return 2;
  }
  if (input == PAPER) {
    console.log(`User guess ${input}`);
    return 3;
  }
};

var main = function (userInput) {
  //1 = scissors, 2 = stone, 3 = paper, 4 = scissors
  var myOutputValue = "";
  var spsRand = guessByComputer();
  var userChoice = guessByUser(userInput);
  var computerWinPercentage = 0;
  var playerWinPercentage = 0;
  var calculateComputerWinPercentage = function () {
    computerWinPercentage = (computerWins / totalPlays) * 100;
    return computerWinPercentage;
  };
  var calculatePlayerWinPercentage = function () {
    playerWinPercentage = (playerWins / totalPlays) * 100;
    return playerWinPercentage;
  };

  if (
    userInput == "" ||
    userInput != SCISSORS ||
    userInput != STONE ||
    userInput != PAPER
  ) {
    myOutputValue = "Please input a valid selection.";
  }
  if (spsRand == 3 && userChoice == 1) {
    userChoice += 3;
  }
  if (spsRand == 1 && userChoice == 3) {
    spsRand += 3;
  }
  if (spsRand > userChoice) {
    computerWins += 1;
    totalPlays += 1;
    calculateComputerWinPercentage();
    calculatePlayerWinPercentage();
    myOutputValue = `Computer guess ${comGuess}, you guess ${userInput}. You lose!<br>Total plays: ${totalPlays}.<br>You have won ${playerWins} game(s), bringing your total winning rate to ${playerWinPercentage}%.<br>The computer has won ${computerWins} game(s), bringing its total winning rate to ${computerWinPercentage}%.<br>Total number of games that ended in a draw: ${drawGames}.`;
  } else if (spsRand < userChoice) {
    playerWins += 1;
    totalPlays += 1;
    calculateComputerWinPercentage();
    calculatePlayerWinPercentage();
    myOutputValue = `Computer guess ${comGuess}, you guess ${userInput}. You win!<br>Total plays: ${totalPlays}.<br>You have won ${playerWins} game(s), bringing your total winning rate to ${playerWinPercentage}%.<br>The computer has won ${computerWins} game(s), bringing its total winning rate to ${computerWinPercentage}%.<br>Total number of games that ended in a draw: ${drawGames}.`;
  } else if (spsRand == userChoice) {
    drawGames += 1;
    totalPlays += 1;
    calculateComputerWinPercentage();
    calculatePlayerWinPercentage();
    myOutputValue = `Computer guess ${comGuess}, you guess ${userInput}. It is a draw.<br>Total plays: ${totalPlays}.<br>You have won ${playerWins} game(s), bringing your total winning rate to ${playerWinPercentage}%.<br>The computer has won ${computerWins} game(s), bringing its total winning rate to ${computerWinPercentage}%.<br>Total number of games that ended in a draw: ${drawGames}.`;
  }
  return myOutputValue;
};
