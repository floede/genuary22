// With thanks to - https://editor.p5js.org/triplezero/sketches/CUthPguUc

var p, p2;
var buf;
var circleElm;

function setup() {
  createCanvas(800, 800);

  // Design a pattern, this one just puts random dots
  p = createGraphics(width, height);
  p.background(150, 0, 255);
  p.fill(255, 0, 255);
  p.noStroke();
  for (let i = 0; i < 500; i++) {
    let x = random(0, width);
    let y = random(0, height);
    p.ellipse(x, y, 20);
  }

  p2 = createGraphics(width, height);
  p2.background(240);
  p2.stroke(60);
  for (let index = 0; index < width / 8; index++) {
    let x = random(-5, 5) + index * 10;
    p2.line(x, 0, x, height);
  }
  p2.filter(BLUR, 3);

  buf = createGraphics(width, height);

  circleElm = createGraphics(width, height);
}

function draw() {
  background(220, 200, 220);

  setFill(createPattern(p), buf);

  buf.noStroke();
  buf.beginShape();
  buf.vertex(50, 150);
  buf.vertex(400, 150);
  buf.vertex(500, 300);
  buf.vertex(600, 600);
  buf.vertex(300, 500);
  buf.vertex(150, 600);
  buf.vertex(300, 30);
  buf.endShape(CLOSE);

  image(buf, 0, 0);

  push();
  translate(0.5 * width, 0.5 * height);
  //rotate(PI / 3.0);
  setFill(createPattern(p2), circleElm);
  circleElm.noStroke();
  circleElm.square(0, 0, 200);

  image(circleElm, 0, 0);
  pop();
  noLoop();
}

function createPattern(p, buf = this) {
  return buf.drawingContext.createPattern(p.canvas, "repeat");
}

function setFill(arg, buf = this) {
  buf.fill(0);
  buf._renderer._setFill(arg);
}
