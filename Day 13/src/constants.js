const PI = 3.14;
const E = 2.71;

function circleArea(radius) {
    return PI * radius * radius;
}

function squareArea(side) {
    return side * side;
}

module.exports = { PI, E, circleArea, squareArea };
