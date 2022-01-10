// https://happycoding.io/examples/processing/creating-functions/turtle-graphics

const w = 1000;
const h = 1000;

let turtleX;
let turtleY;
let turtleHeading = 0;

function setup() {
  c = createCanvas(w, h);
  turtleX = width / 2;
  turtleY = height / 2;
  background(64);
  //frameRate(5);
}

function draw() {
  stroke(240, 22);
  blendMode(SCREEN);

  rotateTurtle(random(360));
  let length = random(0, 500);

  forward(length);
}

function forward(amount) {
  let newX = Math.min(
    w,
    Math.max(0, turtleX + cos(radians(turtleHeading)) * amount)
  );
  let newY = Math.min(
    h,
    Math.max(0, turtleY + sin(radians(turtleHeading)) * amount)
  );

  line(turtleX, turtleY, newX, newY);
  fill(0);

  turtleX = newX;
  turtleY = newY;
}

function rotateTurtle(degrees) {
  turtleHeading += degrees;
}
