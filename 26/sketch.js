const w = 1000;
const h = 1000;
const gridLen = 10;
const rWidth = w / gridLen;
const rSide = rWidth * Math.sin((45 * Math.PI) / 180);
let grid = [];
let hue;

function setup(params) {
  c = createCanvas(w, h);
  colorMode(HSB, 100);
  hue = random(100);

  background(hue, 50, 20);
  for (let i = 0; i < gridLen; i++) {
    let row = [];
    for (let j = 0; j < gridLen + 1; j++) {
      if (i % 2 === 0) {
        row[j] = [i + 0.5 * rWidth + rWidth * i, j + 0.5 * rWidth + j * rWidth];
      } else {
        row[j] = [i + 0.5 * rWidth + rWidth * i, j + j * rWidth];
      }
    }
    grid[i] = row;
  }
}

function draw(params) {
  //translate(0.5 * w, 0.5 * h);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (random(2) > 1) {
        let shape = new Diamond(grid[i][j][0], grid[i][j][1]);
        shape.show();
      } else {
        let shape = new Rhombe(grid[i][j][0], grid[i][j][1]);
        shape.show();
      }
    }
  }
  noLoop();
  saveCanvas(c, "Carpet" + hue, "png");
}

class Rhombe {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //this.col = col;
    this.side = rWidth;

    this.show = function () {
      push();
      translate(this.x, this.y);
      noStroke();
      fill(hue, random(30, 70), 60);
      //Top
      beginShape();
      vertex(0, 0.5 * this.side);
      vertex(0.5 * this.side, 0);
      vertex(0, -0.5 * this.side);
      vertex(-0.5 * this.side, 0);
      endShape();
      pop();
    };
  }
}

class Diamond {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //this.col = col;
    this.side = rWidth;

    this.show = function () {
      push();
      translate(this.x, this.y);
      noStroke();

      //Right
      fill(hue, random(30, 70), 50);
      beginShape();
      vertex(0, 0.5 * this.side);
      vertex(0.5 * this.side, 0);
      vertex(0, -0.5 * this.side);
      //vertex(-0.5 * this.side, 0);
      endShape();

      //Left
      fill(hue, random(30, 70), 70);
      beginShape();
      vertex(0, 0.5 * this.side);
      //vertex(0.5 * this.side, 0);
      vertex(0, -0.5 * this.side);
      vertex(-0.5 * this.side, 0);
      endShape();
      pop();
    };
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
