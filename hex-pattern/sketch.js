const w = 1000;
const h = 1000;

const grid = [];
const HexSize = 100;
const HexSide = HexSize / Math.sqrt(3);

let pattern;
let hexMask;
let hexes = [];

const colArr = [
  [255, 255, 255],
  [48, 87, 225],
];
function setup(params) {
  c = createCanvas(w, h);
  background(48, 87, 225);

  noStroke();
  for (let j = 0; j < 1 + h / HexSize; j++) {
    let row = [];
    for (let index = 0; index < 1 + w / HexSize; index++) {
      if (j % 2 === 0) {
        row[index] = [index * 100, j * 100];
      } else {
        row[index] = [index * 100 + 50, j * 100];
      }
    }
    grid[j] = row;
  }
}

function draw(params) {
  for (let j = 0; j < grid.length; j++) {
    for (let index = 0; index < grid[j].length; index++) {
      let x = grid[j][index][0];
      let y = grid[j][index][1];
      push();
      translate(x, y);
      rotate(30 * (PI / 180));
      rotate(60 * Math.round(random(1, 3)) * (PI / 180));
      hexes.push(new Hex(HexSide, 0, 0, randdomGrey(), Math.round(random(3))));

      rotate(60 * Math.round(random(1, 3)) * (PI / 180));
      //drawHalfHex(0, 0, HexSide, randdomGrey());
      hexes.push(
        new Hex(HexSide * 0.5, 0, 0, randdomGrey(), Math.round(random(3)))
      );
      /*rotate(PI);
      drawHalfHex(0, 0, HexSide * 0.75, randdomGrey());
      rotate(PI);
      drawHalfHex(0, 0, HexSide * 0.75, randdomGrey());
      rotate(PI);
      drawHalfHex(0, 0, HexSide * 0.5, randdomGrey());
      rotate(PI);
      drawHalfHex(0, 0, HexSide * 0.5, randdomGrey()); */
      pop();
    }
  }
  /*   push();
  translate(0.5 * w, 0.5 * h);
  rotate(30 * (PI / 180));
  pop(); */

  noLoop();
  //saveCanvas(c, "Hex Plot 01052022", "png");
}

function randdomGrey() {
  return colArr[Math.floor(random(colArr.length))];
}
class Hex {
  constructor(len, x, y, col, variation) {
    this.gs = 0.5 * len;
    this.len = len;
    this.variation = variation;
    this.lineWidth = 5;

    if (this.variation === 1) {
      fill(col);
    }

    if (this.variation === 2) {
      fill(colArr[1]);
    }

    if (this.variation === 3) {
      noFill();
      strokeWeight(this.lineWidth);
      stroke(255);
      this.len = this.len - 0.5 * this.lineWidth;
    }

    beginShape();
    for (let a = 0; a < TAU; a += TAU / 6) {
      vertex(x + this.len * cos(a), y + this.len * sin(a));
    }
    endShape(CLOSE);

    if (this.variation === 2) {
      drawingContext.clip();
      pattern = new StripePattern(x, y, len);
    }
  }
}

class StripePattern {
  constructor(x, y, len) {
    this.x = x;
    this.y = y;
    this.len = len;
    this.lineWidth = 5;
    this.noOflines = len / this.lineWidth;
    this.patternOffset = this.len - this.lineWidth;
    for (let index = 0; index < this.noOflines; index++) {
      stroke(255);
      strokeWeight(this.lineWidth);
      line(
        this.x - len,
        -this.patternOffset + this.y + index * 2 * this.lineWidth,
        this.x + len,
        -this.patternOffset + this.y + index * 2 * this.lineWidth
      );
    }
  }
}

function drawHalfHex(x, y, len, col) {
  let gs = 0.5 * len;
  fill(col);
  beginShape();
  vertex(x - gs, y - sqrt(3) * gs);
  vertex(x + gs, y - sqrt(3) * gs);
  vertex(x + 2 * gs, y);
  vertex(x + gs, y + sqrt(3) * gs);
  endShape(CLOSE);
}

class HalfHex {
  constructor(len, x, y, col) {
    let gs = 0.5 * len;
    fill(col);
    beginShape();
    vertex(x - gs, y - sqrt(3) * gs);
    vertex(x + gs, y - sqrt(3) * gs);
    vertex(x + 2 * gs, y);
    vertex(x + gs, y + sqrt(3) * gs);
    endShape(CLOSE);
  }
}
