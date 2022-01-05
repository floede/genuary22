let size = 1000;
let c = {};

function setup() {
  c = createCanvas(size, size);
  background(3, 5, 4);
}

function draw() {
  for (let i = 0; i < 200; i++) {
    stroke(colors[Math.round(random(9))].rgb);
    line(500, 500, random(1000), random(1000));
  }
  noStroke();
  fill(3, 5, 4);
  circle(500, 500, 10);
  filter(BLUR, 2);
  noLoop();
  saveCanvas(c, "space", "jpg");
}
