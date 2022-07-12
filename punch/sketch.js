const w = 1000;
const h = w;

function setup(params) {
  c = createCanvas(w, w, WEBGL);
  colorMode(HSB);
  background(100, 100, 100);
}

function draw(params) {
  noStroke();

  myrect = new SquareElm(-100, -300, [200, 90, 90]);
  mycircle = new CircleElm(0, -200, [10, 0.5]);
  myrect.show();

  mycircle.show();

  noLoop();
}

class CircleElm {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
  }

  show() {
    noStroke();
    fill(...this.col);
    circle(this.x, this.y, 300);
  }
}

class SquareElm {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
  }

  show() {
    noStroke();
    fill(...this.col);
    rect(this.x, this.y, 300, 300);
  }
}
