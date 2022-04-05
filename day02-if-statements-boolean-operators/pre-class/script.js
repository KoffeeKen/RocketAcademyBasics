var orangeJuiceMain = function (numberOfGuests, glassesOfOrangeJuicePerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  // Each glass of orange juice requires 4 oranges.
  var orangesPerGlass = 4;
  // Calculate total number of glasses of orange juice required.
  var totalGlassesOfOrangeJuice = numberOfGuests * glassesOfOrangeJuicePerGuest;
  // Calculate total number of oranges required
  var myOutputValue = `If there are ${numberOfGuests} guests,and each guest requires ${glassesOfOrangeJuicePerGuest} glasses of orange juice, we will require ${
    orangesPerGlass * totalGlassesOfOrangeJuice
  } oranges.`;
  return myOutputValue;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// ================================================================
// Random Dice Rolls
// ================================================================

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // The resulting integer will be from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // Generate a random dice number.
  var randomDiceNumber = rollDice();

  // Personalise the output.
  var myOutputValue = `You just rolled a ${randomDiceNumber}!`;

  // Return and print output.
  return myOutputValue;
};

// ================================================================
// Secret Phrase
// ================================================================

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue.
  var myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue.
  if (input === "palatable melon") {
    myOutputValue = "You know the password!";
  } else myOutputValue = "You are not one of us.";
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
