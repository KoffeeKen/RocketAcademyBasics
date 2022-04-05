var fahrenheitToCelsiusMain = function (abc) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  // define formula for conversion = (F - 32) * 5/9
  var answer = (abc - 32) * (5 / 9);
  return answer;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  // define formula to convert km to miles
  var convertKmToMiles = input * 0.62;
  // define number of miles car can travel per litre
  var milesPerLitre = 9;
  // define cost of fuel in miles/litre
  var carFuelCost = 2.2;
  // define cost per trip = number of miles / miles per litre * fuel cost
  var myOutputValue = (convertKmToMiles / milesPerLitre) * carFuelCost;
  return myOutputValue;
};

// ================================================================
// Road Trip Cost Comfortable
// ================================================================

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelSavings = function (tripLengthInMiles) {
  var numMilesPerLitre = 9;
  var numLitresOfFuelNeeded = tripLengthInMiles / numMilesPerLitre;
  var costSavingPerLitreOfFuel = 2.2 - 2;
  var fuelSavings = numLitresOfFuelNeeded * costSavingPerLitreOfFuel;
  return fuelSavings;
};

var roadTripCostComfortableMain = function (tripLengthInKm) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var costSavings = calculateTotalFuelSavings(tripLengthInMiles);
  return `The total cost savings for travelling ${tripLengthInKm} kilometres in a train instead of Ferrari is $${costSavings}.`;
};

// ================================================================
// Ice Machine
// ================================================================

// Calculate total weight of ice cubes needed for number of guests entered.
var calculateTotalWeightOfIceCubes = function (numberOfGuests) {
  var drinksPerGuest = 2;
  var iceCubesPerDrink = 4;
  var gramsPerCube = 1.5;
  var poundPerGram = 1 / 454;
  var weightNeeded =
    numberOfGuests *
    drinksPerGuest *
    iceCubesPerDrink *
    gramsPerCube *
    poundPerGram;
  return weightNeeded;
};
// Calculate total time taken in minutes to produce ice needed.
var calculateTimeNeeded = function (weightOfIceNeeded) {
  var iceProducedPerHour = 5;
  var timeTakenOnePoundOfIce = 60 / iceProducedPerHour;
  var totalTimeNeeded = weightOfIceNeeded * timeTakenOnePoundOfIce;
  return totalTimeNeeded;
};

function iceMachineMain(numberOfGuests) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var weightOfIceNeeded = calculateTotalWeightOfIceCubes(numberOfGuests);
  var totalTimeInMinutes = calculateTimeNeeded(weightOfIceNeeded);
  return `The ice machine needs to be run for ${Math.ceil(
    totalTimeInMinutes
  )} minutes before ${numberOfGuests} guests arrive.`;
}

// ================================================================

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
