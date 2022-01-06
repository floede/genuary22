const width = 500;
const height = 500;
const squareSize = 50;

let lines = "";

function setup() {
  c = createCanvas(width, height);
  background(245);
  for (let index = 0; index < 1350; index++) {
    let slash = "";
    let rand = round(random(3));
    if (rand === 0) {
      slash = "/ ";
    } else if (rand === 1) {
      slash = "\\ ";
    } else {
      slash = "  ";
    }
    lines = lines.concat(slash);
  }
  console.log("LINES: ", lines);
}

function draw() {
  textSize(16);
  textWrap(CHAR);
  text(lines, 10, 10, 490, 490);
  noLoop();
  saveCanvas(c, "MORA", "jpg");
}
