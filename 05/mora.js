let angle, x, y, distance, alpha, r, b, g;
angle = x = y = distance = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(degrees);
}

function draw() {
  translate(width / 2, height / 2);
  fill(150, 0, 150);
  noStroke();
  circle(x, y, 4);
  angle += 0.1;
  distance += 1;
  x = cos(angle) * distance;
  y = sin(angle) * distance;
}
