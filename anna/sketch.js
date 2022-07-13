const w = 1000;
const h = w;

const border = w / 20;

let noOfCols = 6; //Math.floor((w - 2 * border) / squareW);
let noOfRows = 4; //Math.floor((h - 2 * border) / squareH);

const squareW = (w - 2 * border) / noOfCols;
const squareH = (h - 2 * border) / noOfRows;
const squareDia = Math.sqrt(Math.pow(squareW, 2) + Math.pow(squareH, 2));

const unit = w / 1000;

let coords = [];
let elements = [];
let shadows = [];

const pattern = [
  [
    [95, 60, 70],
    [0, 0, 10],
    [20, 20, 80],
    [100, 0, 90],
    [0, 0, 90],
    [20, 20, 80],
    [0, 0, 10],
    [95, 60, 70],
  ],
  [20, 80, 20, 80, 20, 80, 20, 80],
];

function setup() {
  c = createCanvas(w, w, WEBGL);
  colorMode(HSB);
  background(95, 60, 70);

  for (var j = 0; j < noOfRows; j++) {
    let row = [];
    for (var i = 0; i < noOfCols; i++) {
      row.push({
        x: border + i * squareW,
        y: border + j * squareH,
      });
    }
    coords.push(row);
  }
  pg = createGraphics(w, w);
  _renderer.GL.disable(_renderer.GL.DEPTH_TEST);
}

function draw() {
  translate(-w / 2, -h / 2);
  for (let j = 0; j < coords.length; j++) {
    for (let i = 0; i < coords[j].length; i++) {
      elements.push(new BaseElement(coords[j][i].x, coords[j][i].y, j, i));
      if (j === 0) {
        shadows.push(new ShadowLine([coords[j][i].x], "vertical"));
        shadows.push(
          new ShadowLine([coords[j][i].x + squareW / 2], "vertical")
        );
      }
      if (i === 0) {
        shadows.push(new ShadowLine([coords[j][i].y], "horizontal"));
        shadows.push(
          new ShadowLine([coords[j][i].y + squareH / 2], "horizontal")
        );
      }
    }
  }
  elements.forEach((element) => {
    element.build(pattern);
  });

  shadows.push(new ShadowLine([height - border], "horizontal"));
  shadows.push(new ShadowLine([width - border], "vertical"));

  shadows.forEach((element) => {
    element.build();
  });

  //pg.background(100);
  //noiseField("perlin", pg);
  //image(pg, 0, 0);

  noLoop();
}

class BaseElement {
  constructor(x, y, row, col) {
    this.x = x;
    this.y = y;

    this.x1 = x;
    this.x2 = x + squareW / 2;
    this.x3 = x + squareW;

    this.y1 = y;
    this.y2 = y + squareH / 2;
    this.y3 = y + squareH;

    this.row = row;
    this.col = col;

    this.triangles = [];

    this.triangles.push([this.x1, this.y1, this.x2, this.y1, this.x1, this.y2]);
    this.triangles.push([this.x2, this.y1, this.x2, this.y2, this.x1, this.y2]);
    this.triangles.push([this.x2, this.y1, this.x2, this.y2, this.x3, this.y2]);
    this.triangles.push([this.x2, this.y1, this.x3, this.y1, this.x3, this.y2]);
    this.triangles.push([this.x1, this.y2, this.x2, this.y3, this.x1, this.y3]);
    this.triangles.push([this.x1, this.y2, this.x2, this.y2, this.x2, this.y3]);
    this.triangles.push([this.x2, this.y2, this.x3, this.y2, this.x2, this.y3]);
    this.triangles.push([this.x3, this.y2, this.x3, this.y3, this.x2, this.y3]);
  }
  build(pattern) {
    for (let i = 0; i < this.triangles.length; i++) {
      this.show(this.triangles[i], pattern[0][i]);
    }
  }
  show(coords, color) {
    noStroke();
    fill(color);
    triangle(...coords);
    // texture = createGraphics(100, 100);
    // noiseField("perlin", texture);
    //fill(30, 0.7);
    rectMode(CENTER);
    square((coords[2] + coords[0]) / 2, (coords[3] + coords[5]) / 2, 50);
    shadows.push(new ShadowLine([this.x2, this.y1, this.x3, this.y2], "cross"));
    shadows.push(new ShadowLine([this.x2, this.y1, this.x1, this.y2], "cross"));
    shadows.push(new ShadowLine([this.x1, this.y2, this.x2, this.y3], "cross"));
    shadows.push(new ShadowLine([this.x3, this.y2, this.x2, this.y3], "cross"));
  }
}

class ShadowLine {
  constructor(pos, direction) {
    this.pos1 = pos[0];
    this.direction = direction;

    this.lightShade = [0, 0.03];
    this.darkShade = [0, 0.06];

    this.lines = [];

    strokeWeight(unit);

    if (this.direction === "horizontal") {
      this.lines.push({
        coords: [0, this.pos1 - unit, width, this.pos1 - unit],
        color: this.lightShade,
      });

      this.lines.push({
        coords: [0, this.pos1, width, this.pos1],
        color: this.darkShade,
      });

      this.lines.push({
        coords: [0, this.pos1 + unit, width, this.pos1 + unit],
        color: this.lightShade,
      });
    } else if (this.direction === "vertical") {
      this.lines.push({
        coords: [this.pos1 - unit, 0, this.pos1 - unit, height],
        color: this.lightShade,
      });
      this.lines.push({
        coords: [this.pos1, 0, this.pos1, height],
        color: this.darkShade,
      });
      this.lines.push({
        coords: [this.pos1 + unit, 0, this.pos1 + unit, height],
        color: this.lightShade,
      });
    } else {
      this.lines.push({
        coords: [pos[0] - unit, pos[1], pos[2] - unit, pos[3]],
        color: this.lightShade,
      });
      this.lines.push({
        coords: pos,
        color: this.darkShade,
      });
      this.lines.push({
        coords: [pos[0] + unit, pos[1], pos[2] + unit, pos[3]],
        color: this.lightShade,
      });
    }
  }
  build() {
    for (let i = 0; i < this.lines.length; i++) {
      this.show(this.lines[i]);
    }
  }
  show(elm) {
    push();
    stroke(...elm.color);
    line(...elm.coords);
    pop();
  }
}
