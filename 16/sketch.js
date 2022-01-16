const height = 1000;
const width = 1000;
const bg = "#cccccc";

const rowHeight = 100;
const gap = 40;
const rows = height / rowHeight;

const cols = [
  "141, 25, 43",
  "235, 35, 45",
  "30, 38, 57",
  "46, 70, 45",
  "332, 38, 63",
  "352, 80, 35",
  "204, 52, 64",
];

const len = 50;

let elms = [];

function setup(params) {
  c = createCanvas(width, height);
  //colorMode(HSB);
  background(bg);
  strokeWeight(16);
  //elms[0] = new Flower(width / 2, height / 2, "#000000");
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      let x = 100 * i + gap;
      let y = 60;
      let color = "#000";
      elms[i] = i % 2 == 0 ? new Square(x, y, color) : new Logo(x, y, color);
    }
  }
}

function draw(params) {
  //translate(width / 2, height / 2);
  for (let i = 0; i < elms.length; i++) {
    elms[i].show();
  }
}

class Cross {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;

    this.show = function () {
      // vertical line
      line(this.x - 0.5 * len, this.y, this.x + 0.5 * len, this.y);
      // horizontal line
      line(this.x, this.y - 0.5 * len, this.x, this.y + 0.5 * len);
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
      vertex(this.x, this.y + len);
      vertex(this.x + len, this.y);
      vertex(this.x, this.y - len);
      vertex(this.x - len, this.y);
      endShape();

      stroke(bg);
      // vertical line
      line(this.x - 0.5 * len, this.y, this.x + 0.5 * len, this.y);
      // horizontal line
      line(this.x, this.y - 0.5 * len, this.x, this.y + 0.5 * len);

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

class Logo {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;

    this.show = function () {
      fill(this.col);
      textFont("Libre Baskerville");
      textSize(50);
      text("J", this.x - 35, this.y + 20);
      text("M", this.x - 10, this.y + 20);
    };
  }
}
