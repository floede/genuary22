const w = 1000;
const h = 1000;

let t = 0.05;

function setup(params) {
  c = createCanvas(w, h);
  background(10);
}

function draw(params) {
  noFill();
  let startX = 0;
  let startY = 600;
  let firstControlX = 200;
  let firstControlY = 350;
  let secondControlX = 800;
  let secondControlY = 500;
  let endX = w;
  let endY = 300;
  let x1 = startX,
    x2 = firstControlX,
    x3 = secondControlX,
    x4 = endX;
  let y1 = startY,
    y2 = firstControlY,
    y3 = secondControlY,
    y4 = endY;
  //bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  stroke(240);
  let steps = 80;
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    //circle(x, y, 5);
    line(x, y, x, h);
  }
  noLoop();
  saveCanvas(c, "VHS", "png");
}
