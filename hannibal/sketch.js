const w = 500;
const h = 1000;

let bg, sun;

function setup() {
  c = createCanvas(w, h);
  background(255);
  colorMode(HSB);
  bg = random(360);
  sun = random(310);
}

function draw() {
  for (let index = 0; index < 5; index++) {
    element = new Element(0, index * 200, index);
  }
  noLoop();
  saveCanvas(c, `Sunset ${bg} - ${sun}`, "png");
}
class Element {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.bh = 200;
    this.i = index;
    push();
    noStroke();
    fill(random(20) + bg, 40, 80 - index * 15);
    translate(this.x, this.y);
    rect(0, 0, this.w, this.bh);
    fill(sun + index * 15, 95, 75 + index * 5);
    circle(random(-10, 10) + 0.5 * w, index * 15 + 150 + random(10), 200, 200);
    pop();
  }
}
