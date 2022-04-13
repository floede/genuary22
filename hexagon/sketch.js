const w = 1000;
const h = 1000;

const grid = [];
const HexSize = 100;
const HexSide = HexSize / Math.sqrt(3);
const r = (HexSide * Math.sqrt(3)) / 2;
const HexHeight = 1.499 * HexSide;

const greys = [20, 60, 100, 140, 180, 220, 240];

function setup(params) {
  c = createCanvas(w, h);
  background(255);
  for (let j = 0; j < 2 + h / HexSize; j++) {
    let row = [];
    for (let index = 0; index < 1 + w / HexSize; index++) {
      if (j % 2 === 0) {
        row[index] = [index * 100, j * HexHeight];
      } else {
        row[index] = [index * 100 + 50, j * HexHeight];
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
      rotate(Math.floor(random(3)) * 60 * (PI / 180) - 30 * (PI / 180));
      drawHex(0, 0, HexSide, 100);
      pop();
    }
  }
  //translate(0.25 * w, 0.25 * h);
  //drawHex(0, 0, HexSide, 220);
  noLoop();
  //saveCanvas(c, "Truchet Round", "png");
}

function randdomGrey() {
  return greys[Math.floor(random(greys.length))];
}

function drawHex(x, y, len, col) {
  let gs = 0.5 * len;
  let tlc = [x - gs, y - r]; // left top corner
  let tcen = [x, y - r];
  let trc = [x + gs, y - r]; // top right corner
  let two = [0.75 * len, -0.5 * r];
  let rmc = [x + len, y]; // right most corner
  let four = [0.75 * len, 0.5 * r];
  let brc = [x + gs, y + r]; // bottom right corner
  let bcen = [x, y + r];
  let blc = [x - gs, y + r]; // bottom left corner
  let eight = [-0.75 * len, 0.5 * r];
  let lmc = [x - len, y]; // left most corner
  let ten = [-0.75 * len, -0.5 * r];
  fill(col);
  noStroke();
  beginShape();
  vertex(...tlc);
  vertex(...trc);
  vertex(...rmc);
  vertex(...brc);
  vertex(...blc);
  vertex(...lmc);
  endShape(CLOSE);
  stroke(20);
  strokeWeight(5);
  strokeCap(ROUND);

  let roll = Math.round(random(1, 3));

  switch (roll) {
    case 1:
      pattern1(x, y, len, gs, tcen, bcen);
      break;
    case 2:
      pattern2(tcen, two, four, bcen, eight, ten);
      break;
    case 3:
      pattern3(tcen, two, four, bcen, eight, ten, x, y, len, gs);
      break;
  }

  //stroke(120, 0, 120);
  //circle(...tcen, 5);
  //stroke(255, 0, 0);
  //circle(...two, 5); // 2
  //stroke(0, 255, 0);
  //circle(...four, 5); // 4
  //stroke(0, 0, 255);
  //circle(...bcen, 5);
  //stroke(0, 120, 120);
  //circle(...eight, 5); // 8

  //circle(...ten, 5); // 10
}

function pattern1(x, y, len, gs, tcen, bcen) {
  noFill();
  strokeCap(SQUARE);
  stroke(20);
  strokeWeight(35);
  line(...tcen, ...bcen);
  arc(x + 2 * gs, y, len, len, PI - (60 * PI) / 180, PI + (60 * PI) / 180);
  arc(x - 2 * gs, y, len, len, 0 - (60 * PI) / 180, 0 + (60 * PI) / 180);

  strokeCap(ROUND);
  stroke(255);
  strokeWeight(25);
  line(...tcen, ...bcen);
  arc(x + 2 * gs, y, len, len, PI - (60 * PI) / 180, PI + (60 * PI) / 180);
  arc(x - 2 * gs, y, len, len, 0 - (60 * PI) / 180, 0 + (60 * PI) / 180);
}

function pattern2(tcen, two, four, bcen, eight, ten) {
  strokeCap(SQUARE);
  stroke(20);
  strokeWeight(35);
  line(...tcen, ...bcen);
  strokeCap(ROUND);
  stroke(255);
  strokeWeight(25);
  line(...tcen, ...bcen);

  strokeCap(SQUARE);
  stroke(20);
  strokeWeight(35);
  line(...two, ...eight);
  strokeCap(ROUND);
  stroke(255);
  strokeWeight(25);
  line(...two, ...eight);

  strokeCap(SQUARE);
  stroke(20);
  strokeWeight(35);
  line(...four, ...ten);
  strokeCap(ROUND);
  stroke(255);
  strokeWeight(25);
  line(...four, ...ten);
}

function pattern3(tcen, two, four, bcen, eight, ten, x, y, len, gs) {
  strokeCap(SQUARE);
  stroke(20);
  strokeWeight(35);
  line(...ten, ...four);
  strokeCap(ROUND);
  stroke(255);
  strokeWeight(25);
  line(...ten, ...four);

  strokeCap(SQUARE);
  stroke(20);
  strokeWeight(35);
  noFill();
  arc(x + 3 * gs, y + 50, 3 * len, 3 * len, PI, PI + (60 * PI) / 180);
  strokeCap(ROUND);
  stroke(255);
  strokeWeight(25);
  arc(x + 3 * gs, y + 50, 3 * len, 3 * len, PI, PI + (60 * PI) / 180);

  strokeCap(SQUARE);
  stroke(20);
  strokeWeight(35);
  arc(x - 3 * gs, y - 50, 3 * len, 3 * len, 0, (1 / 3) * PI);
  strokeCap(ROUND);
  stroke(255);
  strokeWeight(25);
  arc(x - 3 * gs, y - 50, 3 * len, 3 * len, 0, (1 / 3) * PI);
}
