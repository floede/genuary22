const width = 1000;
const height = 1000;

const strokeWidth = 100;

function setup() {
  c = createCanvas(width, height);
  background(40);
}

function draw() {
  noFill();
  strokeCap(SQUARE);
  strokeWeight(strokeWidth);
  for (let index = 0; index < 360; index++) {
    stroke(colors[Math.round(random(9))].rgb);
    rotate(index);
    arc(random(width), random(height), 200, 200, 0, PI); // x y width height
  }
  noLoop();
  saveCanvas(c, "Curve", "jpg");
}
