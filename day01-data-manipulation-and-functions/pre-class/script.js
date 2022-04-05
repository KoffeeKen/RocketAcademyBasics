var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = "Hi everyone!";
  return myOutputValue;
};

var replyGreeting = function (guestName) {
  var myOutputValue =
    "Hi, " + guestName + "! What a lovely name you have, " + guestName + "!";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = replyGreeting(input);
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  // define input as distance in km
  var distanceInKm = input;
  // define formula to convert km to miles
  var distanceInMiles = distanceInKm * 0.625;
  // define output
  var myOutputValue = `Hi! ${input} kilometres is equal to ${distanceInMiles} miles.`;

  // var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Train 1 is travelling at 200kph, and will reach Tokyo in 2hrs. Distance travelled is 400km.
var distanceToTokyo = 2 * 200;

// To calculate the remaining time based on how long train 2 was delayed.
var calculateTimeLeft = function (timeDelayed) {
  var timeInHrs = 2 - timeDelayed;
  return timeInHrs;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = distanceToTokyo / calculateTimeLeft(input);
  return myOutputValue;
};

// Every minute = 360/60 = 6 degree movement by the minute hand, and 30/60 = 0.5 degree movement by the hour hand.
var minuteHandOffset = 360 / 60;
var hourHandOffset = 30 / 60;

// At 1pm, the minute hand is 0 degree away from the 12 o'clock position, while the hour hand is 30 degrees away from the 12 o'clock position.
var hourHandStart = 360 / 12;

var calculateAngleDifference = function (minutesPast1Pm) {
  var angleDifference =
    hourHandStart +
    hourHandOffset * minutesPast1Pm -
    minuteHandOffset * minutesPast1Pm;
  return angleDifference;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = calculateAngleDifference(input);
  return myOutputValue;
};
