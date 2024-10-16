// TODO: visualize data from JSON
let data = [];

function preload() {
  data = loadJSON("wine.json");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(220,20,20);

  data = Object.values(data); // how to turn a json file from object to list

  print(data);
  for (let idx = 0; idx < data.length; idx++) {
    let aWine = data[idx];
    let x = map(idx, 0, data.length, 0, width);
    let d = map(aWine.price, 0, 500, 0, height);

    ellipse(x, height/2, d);
  }
}

function draw() {}