const {circleArea, circleCircumference} = require("./circle")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("What's the radius?\n", radius => {
    if(!parseInt(radius)) console.log('A default value has been given due to an invalid input.');
    radius = parseInt(radius) || 7; // Set the default value of "radius" to 7.
    circleArea(radius)
    circleCircumference(radius)
    readline.close();
  });