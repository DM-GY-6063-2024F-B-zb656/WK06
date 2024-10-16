// TODO: add more properties using objects

let aCircle = {};
//similar to list, define object/dictionary with curly brackets
let aList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  aList = [0,3,4,6];

  aCircle = {
    x: width / 2, 
    y: height / 2,
    d: 60,
    a: 255
  };
}

function draw() {
  background(220, 20, 220);
  fill(255, aCircle.a);
  ellipse(aCircle.x, aCircle.y, aCircle.d);

  aCircle.a = (aCircle.a + 4) % 255;
}

//aCircle.x is the same thing as aCircle["x"]