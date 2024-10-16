// TODO: add more circles using lists

let numCircles;
let xpos = [];
let ypos = []; //square brackets says this variable is a list. you can put things inside the list like [0, 12, 22, etc]
let diam = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30);
  //noStroke();

  numCircles = 5000 // int(width / 15);

  for (let idx = 0; idx < numCircles; idx += 1) {
    xpos.push(random(width));
    ypos.push(random(height));
    diam.push(random(30,100));
    //push here means its putting the number 0 (or the number in brackets) at the start of ypos
  }
  print(xpos, ypos);

  //since the x and y of the circles is being established in setup and then the movement is happening in draw (and you have global variables)
  //it means that the random oroiginal position will stay the same (relative) for each circle. like every time the draw function runs its just moving down, not changing into a random place onscreen.
}

function draw() {
  background(220, 20, 220);

  for (let idx = 0; idx < ypos.length; idx += 1) {
    ellipse(xpos[idx], ypos[idx], diam[idx]);
    }
  }

function mousePressed() {
  xpos.push(random(width));
  ypos.push(random(height));
  diam.push(random(30,100));
  print(ypos.length);
}

//to make it snow you could add a white rectangle at bottom slowly filling up the screen