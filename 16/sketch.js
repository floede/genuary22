const height = 1000;
const width = 1000;
const bg = "#ffffff";

const len = 50;

let elms = [];

function setup(params) {
  c = createCanvas(width, height);
  background(bg);
  strokeWeight(16);
  elms[0] = new Flower(0, 0, "#000000");
}

function draw(params) {
  translate(width / 2, height / 2);
  elms[0].show();
}

class Cross {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;

    this.show = function () {
      // vertical line
      line(-0.5 * len, this.y, 0.5 * len, this.y);
      // horizontal line
      line(this.x, -0.5 * len, this.x, 0.5 * len);
      fill(bg);
      noStroke();
      circle(this.x, this.y, 14);
    };
  }
}

class Square {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;

    this.show = function () {
      fill(this.col);
      noStroke();
      beginShape();
      vertex(this.x, len);
      vertex(len, this.y);
      vertex(this.x, -len);
      vertex(-len, this.y);
      endShape();

      stroke(bg);
      // vertical line
      line(-0.5 * len, this.y, 0.5 * len, this.y);
      // horizontal line
      line(this.x, -0.5 * len, this.x, 0.5 * len);

      fill(this.col);
      noStroke();
      circle(this.x, this.y, 14);
    };
  }
}

class Flower {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.petal = 0.75 * len;

    this.show = function () {
      fill(this.col);
      noStroke();
      circle(this.x, this.y, 2 * len);

      fill(bg);
      circle(this.x - 0.5 * len, this.y, this.petal);
      circle(this.x + 0.5 * len, this.y, this.petal);
      circle(this.x, this.y - 0.5 * len, this.petal);
      circle(this.x, this.y + 0.5 * len, this.petal);

      fill(this.col);
      stroke(bg);
      strokeWeight(2);
      circle(this.x, this.y, 22);
    };
  }
}
