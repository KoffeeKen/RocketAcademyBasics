// ================================================================
// Lucky 11
// ================================================================

// Generate a random dice number function.
var randomInteger = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // The resulting integer will be from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  // Generate dice roll for dice 1.
  var rollDice1 = randomInteger();
  // Generate dice roll for dice 2.
  var rollDice2 = randomInteger();
  console.log("User guessed ", input);
  console.log("Dice 1 is ", rollDice1);
  console.log("Dice 1 is ", rollDice2);
  console.log("total dice roll is ", rollDice1 + rollDice2);
  var myOutputValue = "Please roll the dice again.";
  if (input == rollDice1 || input == rollDice2) {
    myOutputValue = "Congratulations, you have guessed the correct number!";
    console.log("Correct guess");
  } else if (rollDice1 + rollDice2 == 11) {
    myOutputValue =
      "Congratulations, you have won as the total dice roll is 11!";
  }
  // Code works even without the last "else".
  // else {
  //   console.log("else part");
  //   myOutputValue = "Please roll the dice again.";
  // }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "This item is not in the menu";
  // define dishes with rice
  // var riceDishes = "chicken rice" || "nasi lemak";
  // // define dishes with noodles
  // var noodleDishes = "hokkien mee" || "laksa";
  // // define other dishes
  // var otherDishes = "roti prata" || "bak kut teh";
  if (input == "chicken rice" || input == "nasi lemak") {
    console.log("1st condition satisfied");
    myOutputValue = "rice";
  } else if (input == "hokkien mee" || input == "laksa") {
    console.log("2nd condition satisfied");
    myOutputValue = "noodles";
  } else if (input == "roti prata" || input == "bak kut teh") {
    console.log("3rd condition satisfied");
    myOutputValue = "others";
  } else {
    console.log("last else");
    myOutputValue = "This item is not in the menu.";
  }
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
