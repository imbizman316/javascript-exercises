const convertToCelsius = function(temp) {

  let celsius = ((temp - 32) * (5/9));

  if (celsius - celsius.toFixed() !== 0){
    return parseFloat(celsius.toFixed(1));
  } else {
    return celsius;
  }

};

const convertToFahrenheit = function(temp) {

  let fahren = (temp * (9/5) + 32);

  if (fahren - fahren.toFixed() !== 0){
    return parseFloat(fahren.toFixed(1));
  } else {
    return fahren;
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
