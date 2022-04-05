// ================================================================
// Intro to Scope
// ================================================================

// global scope
var globalVariable = 0;

// also global scope
var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  // function scope
  console.log("globalVariable has a value of ", globalVariable);
  // we can manipulate the value of a global variable without having to re-declare using the var keyword
  globalVariable += 1;
  console.log("globalVariable now has a value of ", globalVariable);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

// Bank Roll State

// initial bankRoll state
// var bankRoll = 10;
// var rollDice = function () {
//   // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 6;

//   // Remove the decimal with the floor operation.
//   // The resulting integer will be from 0 to 5 inclusive.
//   var randomInteger = Math.floor(randomDecimal);

//   // Add 1 to get valid dice rolls of 1 through 6 inclusive.
//   var diceNumber = randomInteger + 1;

//   return diceNumber;
// };
// var introScopeMain = function (input) {
//   var randomDiceNumber = rollDice();
//   console.log("Dice rolled ", randomDiceNumber);
//   var myOutputValue = "you lose. current bank roll: " + bankRoll;

//   // change bankRoll state if the dice matches the randomDice
//   if (randomDiceNumber == input) {
//     bankRoll = bankRoll + 1;

//     myOutputValue = "you win. current bank roll: " + bankRoll;
//   }
//   // else {
//   //   bankRoll = bankRoll - 1;
//   //   myOutputValue = "you lose. Current bank roll: " - bankRoll;
//   // }
//   return myOutputValue;
// };

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
