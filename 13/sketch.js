let height = 80;
let width = 800;

function setup() {
  c = createCanvas(width, height);
  background(255);
  rectMode(CENTER);
  noFill();
  strokeWeight(2);
}

function draw() {
  translate(-40, height / 2);
  for (let index = 0; index < 10; index++) {
    squares(50, 80, 0);
  }
  noLoop();
  saveCanvas(c, "#800x80", "svg");
}

function squares(size, x, y) {
  translate(x, y);
  if (size > 10) {
    push();
    rotate(PI / random(8));
    square(0, 0, size);
    squares(size * 0.67, 0, 0);
    pop();
  }
}
