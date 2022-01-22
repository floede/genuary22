const w = 1000;
const h = 1000;

const grid = [];
const HexSize = 100;
const HexSide = 56;

const greys = [20, 60, 100, 140, 180, 220, 240];
function setup(params) {
  c = createCanvas(w, h);
  background(220);
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
      rightSide(HexSide, randdomGrey());
      leftSide(HexSide, randdomGrey());
      rotate(90 * (PI / 180));
      rightSide(HexSide * 0.75, randdomGrey());
      leftSide(HexSide * 0.75, randdomGrey());
      rotate(90 * (PI / 180));
      rightSide(HexSide * 0.5, randdomGrey());
      leftSide(HexSide * 0.5, randdomGrey());
      pop();
    }
  }
  noLoop();
  saveCanvas(c, "Combine", "png");
}

function rightSide(len, col) {
  let count = 0;
  while (count < 3) {
    rotate((count == 0 ? -30 : 60) * (PI / 180));
    new Triangle(len, 0, 0, col);
    count++;
  }
}

function randdomGrey() {
  return greys[Math.floor(random(greys.length))];
}

function leftSide(len, col) {
  let count = 0;
  while (count < 3) {
    rotate(60 * (PI / 180));
    new Triangle(len, 0, 0, col);
    count++;
  }
}

class Triangle {
  constructor(len, x, y, col) {
    noStroke();
    fill(col);
    triangle(x, y, x + 0.5 * len, y - len * Math.sin(Math.PI / 3), x + len, y);
  }
}
