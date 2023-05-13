const PI = Math.PI;

const circleArea = (radius) => {
    let area = PI * radius * radius; 
    area = parseFloat(area).toFixed(2);
    console.log(`The area of a circle with a radius of ${radius} is ${area}`);
}

const circleCircumference = (radius) => {
    let circumference = 2 * PI * radius;
    circumference = parseFloat(circumference).toFixed(2);
    console.log(`The circumference of a circle with a radius of ${radius} is ${circumference}`);
}   

module.exports = {
    circleArea,
    circleCircumference
}