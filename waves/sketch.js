const w = 1000;
const h = 1000;

let angle = degToRad(90);
let r = 600;

function setup() {
  c = createCanvas(w, h);
  colorMode(HSB);
  background(37, 14, 100);
}

function draw() {
  for (let index = 0; index < 20; index++) {
    let col = [212, 66, random(-20, 30) + 40];
    wave(random(-300, 100) + 0.8 * w, h - r + 60, col);
  }

  noLoop();
  //saveCanvas(c, "Hokusai Wave 20042022", "png");
}

function wave(x0, y0, col) {
  push();
  translate(x0, y0);
  noStroke();
  fill(col);

  let wa = angle;
  let wr = random(-50, 30) + r;

  //console.log("WAVE");

  while (wa < 5.5) {
    let x = random(-3, 3) + wr * cos(wa);
    let y = random(-3, 3) + wr * sin(wa);
    let circleSize = random(-3, 3) + map(wa, 0, 5, 300, 20);
    circle(x, y, circleSize);

    wa += random(-0.02, 0.02) + 0.04;
    wr -= random(-5, 5) + 2.9;
  }
  pop();
}
