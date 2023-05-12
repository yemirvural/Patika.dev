const PI = Math.PI;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What's the radius?\n", radius => {
    calculateCircleArea(radius);
    readline.close();
});

function calculateCircleArea(radius) {
    let area = PI * radius * radius; // or we can use >> ...Math.pow(radius, 2)
    area = parseFloat(area).toFixed(2);
    console.log(`The area of a circle with a radius of ${radius} is ${area}`);
}