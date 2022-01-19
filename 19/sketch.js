const w = 500;
const h = 1000;

const words = ["MORA", "JAHA", "MFEH", "BBEN", "MCHA", "JALS"];
const steps = 100;

let word;

function setup(params) {
  c = createCanvas(w, h);
  word = new Text(20, 250, words[Math.floor(random(words.length))]);
  colorMode(HSB, 100);
  background(20);
}

function draw(params) {
  word.show();
  for (let index = 0; index < steps; index++) {
    word.move(index);
  }
  let startX = 0;
  let startY = 600;
  let firstControlX = 200;
  let firstControlY = 350;
  let secondControlX = 800;
  let secondControlY = 500;
  let endX = w;
  let endY = 300;
  let x1 = startX,
    x2 = firstControlX,
    x3 = secondControlX,
    x4 = endX;
  let y1 = startY,
    y2 = firstControlY,
    y3 = secondControlY,
    y4 = endY;
  //bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  stroke(240);
  let curveSteps = 80;
  for (let i = 0; i <= curveSteps; i++) {
    let t = i / curveSteps;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    //circle(x, y, 5);
    line(x, y, x, h);
  }
  noLoop();
}

class Text {
  constructor(x, y, txt) {
    this.ix = x;
    this.iy = y;
    this.x = x;
    this.y = y;
    this.col;
    this.txt = txt;

    this.show = function () {
      fill(255);
      //textFont("Libre Baskerville");
      textSize(120);
      text(this.txt, this.x, this.y);
    };
    this.move = function (index) {
      console.log("INDEX: ", index);
      textSize(120);
      text(this.txt, this.x + index, this.y - index);
      if (index < steps - 2) {
        fill((100 / steps) * index, 80, 100);
      } else {
        fill(0, 0, 100);
      }
    };
  }
}
