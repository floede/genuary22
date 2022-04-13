const w = 500;
const h = 1000;
const palette = ["#2E294E", "#541388 ", "#F1E9DA", "#FFD400", "#D90368"];
const len = 400;
const thickness = 6;
let currentColor = palette[4];
let white = 85;
let slider;

function setup(params) {
  c = createCanvas(w, h);
  background(240);
  strokeWeight(thickness);
  //slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw(params) {
  background(240);
  noStroke();
  rect(30, 20, w - 60, h - 60, 10);
  translate(0.5 * w, 0.5 * h);
  //white = slider.value();
  drawline(100);
  drawlineUp(100);
  filter(BLUR, 1.8);
  //saveCanvas(c, "DNA", "png");
  noLoop();
}

function drawline(probability) {
  push();
  stroke(currentColor);
  line(random(-5, 5) - 0.5 * len, 0, random(-5, 5) + 0.5 * len, 0);
  translate(0, thickness);
  let roll = random(100);
  if (roll > probability) {
    if (roll > white) {
      currentColor = palette[2];
    } else {
      currentColor = palette[Math.floor(random(palette.length))];
    }
    probability = probability - 1;
  }
  if (probability > 0) {
    drawline(probability - 1);
  }
  pop();
}
function drawlineUp(probability) {
  push();
  stroke(currentColor);
  line(random(-5, 5) - 0.5 * len, 0, random(-5, 5) + 0.5 * len, 0);
  translate(0, -thickness);
  let roll = random(100);
  if (roll > probability + 5) {
    if (roll > white) {
      currentColor = palette[2];
    } else {
      currentColor = palette[Math.floor(random(palette.length))];
    }
    probability = probability - 1;
  }
  if (probability > 0) {
    drawlineUp(probability - 1);
  }
  pop();
}
