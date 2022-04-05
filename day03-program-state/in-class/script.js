var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Dice Within

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var withinNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var withinNum = randomInteger + 1;
  return withinNum;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "";
  var rollingDice1 = rollDice();
  var rollingDice2 = rollDice();
  var varianceNumber = withinNumber();
  console.log(
    "Dice roll is ",
    rollingDice1,
    "&",
    rollingDice2,
    ", within number is ",
    varianceNumber
  );
  console.log(
    `Dice roll is ${rollingDice1} & ${rollingDice2}, within number is ${varianceNumber}.`
  );
  if (
    input == rollingDice1 + varianceNumber ||
    input == rollingDice1 - varianceNumber ||
    input == rollingDice2 + varianceNumber ||
    input == rollingDice2 - varianceNumber
  ) {
    myOutputValue = "You win!";
  } else myOutputValue = "Please try again......";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
