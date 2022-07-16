const w = 1000;
const h = w;

const border = w / 20;

let noOfCols = 6; //Math.floor((w - 2 * border) / squareW);
let noOfRows = 4; //Math.floor((h - 2 * border) / squareH);

const squareW = (w - 2 * border) / noOfCols;
const squareH = (h - 2 * border) / noOfRows;
const squareDia = Math.sqrt(
  Math.pow(squareW / 2, 2) + Math.pow(squareH / 2, 2)
);

console.table({ Width: squareW, Height: squareH, Diagonal: squareDia });

const unit = w / 1000;

let coords = [];
let elements = [];
let shadows = [];
let borderElms = [];

const bgCol = [95, 60, 70];

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
  c = createCanvas(w, w);
  colorMode(HSB);
  angleMode(DEGREES);
  background(bgCol);

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

  for (let k = 0; k < 2; k++) {
    let row = [];
    for (let l = 0; l < noOfCols + 2; l++) {
      borderElms.push({
        x: l * squareW + border - squareW,
        y: k * (height - border),
      });
    }
    for (let m = 0; m < noOfRows; m++) {
      borderElms.push({
        x: k * (width - border),
        y: m * squareH + border,
      });
    }
    //borderElms.push(row);
  }
  // pg = createGraphics(squareDia, squareDia);
  // _renderer.GL.disable(_renderer.GL.DEPTH_TEST);
}

function draw() {
  //translate(-w / 2, -h / 2);

  for (let i = 0; i < borderElms.length; i++) {
    fill(bgCol);
    noStroke();
    if (borderElms[i].y === 0 || borderElms[i].y === height - border) {
      push();
      rect(borderElms[i].x, borderElms[i].y, squareW, border);

      drawingContext.clip();

      let texture = new Texture(borderElms[i].x + 140, borderElms[i].y, false);
      pop();
    } else if (borderElms[i].x === 0 || borderElms[i].x === width - border) {
      push();
      rect(borderElms[i].x, borderElms[i].y, border, squareH);
      drawingContext.clip();

      let texture = new Texture(borderElms[i].x + 140, borderElms[i].y, false);
      pop();
    }
  }

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
    this.triangles.push([this.x2, this.y2, this.x1, this.y2, this.x2, this.y1]);
    this.triangles.push([this.x2, this.y2, this.x3, this.y2, this.x2, this.y1]);
    this.triangles.push([this.x2, this.y1, this.x3, this.y1, this.x3, this.y2]);
    this.triangles.push([this.x1, this.y3, this.x2, this.y3, this.x1, this.y2]);
    this.triangles.push([this.x1, this.y2, this.x2, this.y2, this.x2, this.y3]);
    this.triangles.push([this.x2, this.y2, this.x3, this.y2, this.x2, this.y3]);
    this.triangles.push([this.x2, this.y3, this.x3, this.y2, this.x3, this.y3]);
  }
  build(pattern) {
    for (let i = 0; i < this.triangles.length; i++) {
      this.show(this.triangles[i], pattern[0][i]);
    }
  }
  show(coords, color) {
    push();
    noStroke();
    fill(color);
    triangle(...coords);

    drawingContext.clip();

    let texture = new Texture(
      (coords[2] + coords[0]) / 2,
      (coords[3] + coords[5]) / 2
    );

    shadows.push(new ShadowLine([this.x2, this.y1, this.x3, this.y2], "cross"));
    shadows.push(new ShadowLine([this.x2, this.y1, this.x1, this.y2], "cross"));
    shadows.push(new ShadowLine([this.x1, this.y2, this.x2, this.y3], "cross"));
    shadows.push(new ShadowLine([this.x3, this.y2, this.x2, this.y3], "cross"));
    pop();
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

class Texture {
  constructor(x, y, rotation = true) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.dist = 200; //squareDia / 2;
    this.noOfLines = Math.floor(this.dist / unit);

    push();
    translate(this.x, this.y);
    //fill(20);
    //rect(0, 0, 20, 20);
    if (this.rotation) {
      rotate(Math.random() * 360);
    }
    for (let index = 0; index < this.noOfLines; index++) {
      stroke(getRandInRange(20, 80), getRandInRange(0.05, 0.09));
      line(
        -this.dist,
        -this.dist + 2 * index,
        this.dist,
        -this.dist + 2 * index
      );
    }

    for (let index = 0; index < this.noOfLines; index++) {
      stroke(getRandInRange(20, 80), getRandInRange(0.05, 0.09));
      line(
        -this.dist + 2 * index,
        -this.dist,
        -this.dist + 2 * index,
        this.dist
      );
    }

    pop();
  }
}
