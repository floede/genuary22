const w = 1000;
const h = w;

const squareW = 50;
const squareH = 75;
const border = 25;

let noOfCols = Math.round((w - 2 * border) / squareW);
let noOfRows = Math.round((h - 2 * border) / squareH);

let extraBorderW = 0.5 * (w - squareW * noOfCols);
let extraBorderH = 0.5 * (h - squareH * noOfRows);

let coords = [];
let elements = [];

function setup() {
  c = createCanvas(w, w);

  for (var j = 0; j < noOfRows; j++) {
    let row = [];
    for (var i = 0; i < noOfCols; i++) {
      row.push({
        x: border + extraBorderW + i * squareW,
        y: border + extraBorderH + j * squareH,
      });
    }
    coords.push(row);
  }
}

function draw() {
  stroke(120);
  for (let j = 0; j < coords.length; j++) {
    for (let i = 0; i < coords[j].length; i++) {
      elements.push(new BaseElement(coords[j][i].x, coords[j][i].y));
    }
  }
  noLoop();
}

class BaseElement {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.x1 = x;
    this.x2 = x + squareW / 2;
    this.x3 = x + squareW;
    this.y1 = y;
    this.y2 = x;
    this.y3 = x;
    rect(x, y, squareW, squareH);
    triangle(this.x1, this.y1, this.x2, this.y1, this.x1, this.y2);
  }
}
