var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  // Initialise counter at 0
  var counter = 0;
  var myOutputValue = "";
  // Set the while loop condition to continue when counter is less than input
  while (counter < input) {
    // Log emoji with each iteration of the loop
    myOutputValue += "✌";
    //Increment the counter by 1 at the end of each loop iteration.
    counter += 1;
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  // Initialise the outer counter, row counter at 0
  var rowCounter = 0;
  var myOutputValue = "";
  // Set the while loop condition for row counter
  while (rowCounter < input) {
    // Initialise the inner counter, column counter at 0
    var colCounter = 0;
    // Set the while loop condition for column counter
    while (colCounter < input) {
      myOutputValue += "✌";
      colCounter += 1;
    }
    myOutputValue += "<br>";
    rowCounter += 1;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var rowCounter = 0;
  var myOutputValue = "";

  while (rowCounter < input) {
    var colCounter = 0;
    // Set the while loop condition for column counter
    while (colCounter < input) {
      if (rowCounter >= colCounter) {
        console.log(
          `Input is ${input}. Column counter is ${colCounter} initially`
        );
        myOutputValue += "✌";
        colCounter += 1;
        console.log(`column counter is now ${colCounter}.`);
      }
    }
    myOutputValue += "<br>";
    rowCounter += 1;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
