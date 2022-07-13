const w = 1000;
const h = 1000;

const HexSize = 100;
const HexSide = HexSize / Math.sqrt(3);
const r = (HexSide * Math.sqrt(3)) / 2;
const HexHeight = 1.5 * HexSide;

const shuffleColors = false;

const colors = [
  [164, 87],
  [195, 80],
  [346, 60],
];
const shades = [60, 70, 80];

const dimensions = [
  ["HexSize:", HexSize],
  ["HexSide:", HexSide],
  ["r:", r],
  ["1.5 * Side", 1.5 * HexSide],
  ["r * square root of 3", r * Math.sqrt(3)],
];

console.table(dimensions);

function setup() {
  c = createCanvas(w, h, WEBGL);
  colorMode(HSB);
  background(
    ...colors[Math.floor(random(0, 3))],
    shades[Math.floor(random(0, 3))]
  );
}

function draw() {
  translate(-width / 2, -height / 2);
  for (let row = 0; row < h / (r * Math.sqrt(3)) - 2; row++) {
    for (let col = 0; col < w / (HexSize + (row % 2)) - 1; col++) {
      push();
      let currX = col * HexSize + 2.5 * r - (row % 2) * r;
      let currY = row * (r * Math.sqrt(3)) + 1.95 * HexSide;
      translate(currX, currY);
      rotate(HALF_PI);
      drawHex(0, 0, HexSide, currX, currY);
      pop();
    }
  }
  noLoop();
  //saveCanvas(c, "Boxes", "png");
}

function drawHex(x, y, len, currX, currY) {
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

  let baseCol = shuffleColors ? colors.sort(() => Math.random() - 0.5) : colors;
  let randShade = shades.sort(() => Math.random() - 0.5);
  let mapShade = map(currY, 0, height, 100, 30);
  let shade = (pick) => {
    return false ? randShade[pick] : mapShade;
  };

  noStroke();
  fill(...baseCol[0], shade(0));
  beginShape();
  vertex(...tlc);
  vertex(...trc);
  vertex(...rmc);
  vertex(x, y);
  endShape(CLOSE);

  fill(...baseCol[1], shade(1));
  beginShape();
  vertex(x, y);
  vertex(...rmc);
  vertex(...brc);
  vertex(...blc);
  endShape(CLOSE);

  fill(...baseCol[2], shade(2));
  beginShape();
  vertex(x, y);
  vertex(...blc);
  vertex(...lmc);
  vertex(...tlc);
  endShape(CLOSE);
}

function keyPressed() {
  if (key === "s") {
    saveCanvas(c, `Boxes - ${Date.now()}`, "png");
  }
}
