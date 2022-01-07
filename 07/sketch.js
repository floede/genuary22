const width = 1000;
const height = 500;

const strokeWidth = 20;
const noOfLines = width / strokeWidth;

const rand = [];
let colArr = colors;

function setup() {
  c = createCanvas(width, height);
  background(245);
  rand[0] = random(283) + 50;
  rand[1] = random(200) + 30;
  rand[2] = random(283) + 383;
  rand[3] = random(200) + 280;
  rand[4] = random(283) + 716;
  rand[5] = random(200) + 30;
}

function draw() {
  for (let index = 0; index < noOfLines; index++) {
    stroke(colors[Math.round(random(9))].rgb);
    strokeWeight(strokeWidth);
    line(
      index * strokeWidth + strokeWidth / 2,
      0,
      index * strokeWidth + strokeWidth / 2,
      height
    );
  }
  noFill();
  for (let index = 0; index < colors.length; index++) {
    let str = colors.length * strokeWidth - index * strokeWidth;
    let col = colArr[Math.round(random(colArr))];
    strokeWeight(str);
    stroke(colors[index].rgb);
    colArr.splice(col, 1);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 250);
    curveVertex(rand[0], rand[1]);
    curveVertex(rand[2], rand[3]);
    curveVertex(rand[4], rand[5]);
    curveVertex(width, 250);
    curveVertex(width, 250);
    endShape();
  }

  noLoop();
  //saveCanvas(c, "Lewitt", "jpg");
}
