const w = 1000;
const h = w;

const border = 25;

let noOfCols = 10; //Math.floor((w - 2 * border) / squareW);
let noOfRows = 7; //Math.floor((h - 2 * border) / squareH);

const squareW = (w - 2 * border) / noOfCols;
const squareH = (h - 2 * border) / noOfRows;

let extraBorderW = 0.5 * (w - squareW * noOfCols);
let extraBorderH = 0.5 * (h - squareH * noOfRows);

let coords = [];
let elements = [];

function setup() {
  c = createCanvas(w, w, WEBGL);
  background(255);

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
  translate(-w / 2, -h / 2);
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
    this.y2 = y + squareH / 2;
    this.y3 = y + squareH;

    //rect(x, y, squareW, squareH);
    noStroke();
    fill(random(255));
    triangle(this.x1, this.y1, this.x2, this.y1, this.x1, this.y2);
    fill(random(255));
    triangle(this.x2, this.y1, this.x2, this.y2, this.x1, this.y2);
    fill(random(255));
    triangle(this.x2, this.y1, this.x3, this.y1, this.x3, this.y2);
    fill(random(255));
    triangle(this.x2, this.y1, this.x2, this.y2, this.x3, this.y2);

    fill(random(255));
    triangle(this.x1, this.y2, this.x2, this.y3, this.x1, this.y3);
    fill(random(255));
    triangle(this.x1, this.y2, this.x2, this.y2, this.x2, this.y3);
    fill(random(255));
    triangle(this.x2, this.y2, this.x3, this.y2, this.x2, this.y3);
    fill(random(255));
    triangle(this.x3, this.y2, this.x3, this.y3, this.x2, this.y3);
  }
}
