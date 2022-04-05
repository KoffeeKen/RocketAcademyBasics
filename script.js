var kilometersToMiles = function (distanceInKilometers) {
  console.log("running km to miles function");
  var distanceInMiles = distanceInKilometers * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = kilometersToMiles(input);
  console.log("myOutputValue");
  console.log(myOutputValue);

  //var distanceInKm = input;
  //var distanceInMiles = distanceInKm * 0.625;

  //var myOutputValue = `Hi! ${input} kilometres is equal to ${distanceInMiles} miles.`;

  return myOutputValue;
};
