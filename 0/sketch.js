// TODO: add more circles using lists

let numCircles;
let ypos = []; //square brackets says this variable is a list. you can put things inside the list like [0, 12, 22, etc]

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30);
  noStroke();

  numCircles = 10 // int(width / 15);

  for (let idx = 0; idx < numCircles; idx += 1) {
    ypos.push(random(height));
    //push here means its putting the number 0 (or the number in brackets) at the start of ypos
  }
}

function draw() {
  background(220, 20, 220);

  for (let idx = 0; idx < ypos.length; idx += 1) {
    let xpos = map(idx, 0, ypos.length-1, 0, width);
    ellipse(xpos+25, ypos[idx], 50);

    ypos[idx] += 8;
    if (ypos[idx] > height) {
      ypos[idx] = random(-70, -30);
    }
  }
}

function mousePressed() {
  ypos.push(random(height));
  print(ypos.length);
}

//to make it snow you could add a white rectangle at bottom slowly filling up the screen