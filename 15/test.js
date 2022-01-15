const cw = 500;
const ch = 500;

let box;

function setup() {
  createCanvas(cw, ch);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(240);
  stroke(0);
  beginShape();
  for (var w = 0; w < cw; w += 1) {
    var h = ch / 2;
    h +=
      0.1 * w + 200 * sin(w * 0.1 + TWO_PI / 3) * pow(abs(sin(w * 0.0015)), 3);
    console.log("H: ", h);
    curveVertex(w, h);
  }
  endShape();
  noLoop();
}
