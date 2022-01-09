const w = 500;
const h = 1000;

const strokeWidth = 10;

buildingLeftX = 10;
buildingHeight = 500;
buildingWidth = 100;

function setup() {
  c = createCanvas(w, h);
  background(240);
}

function building1(left, height, width, col) {
  noStroke();
  //strokeWeight(strokeWidth);
  //stroke(colors[Math.round(random(9))].rgb);
  fill(col);
  rect(left, h - height, width, height); //  x y width height
  triangle(
    left,
    h - height,
    left + width / 2,
    height - width / 2,
    width + left,
    height
  );
}

function building2(left, height, width, col) {
  noStroke();
  //strokeWeight(strokeWidth);
  //stroke(colors[Math.round(random(9))].rgb);
  fill(col);
  rect(left, h - height, width, height); //  x y width height
  arc(left + width / 2, height, width, width, PI, TWO_PI); // x y width height
}

function draw() {
  strokeCap(SQUARE);
  building2(buildingLeftX - 2, buildingHeight, buildingWidth + 4, 0);
  building2(buildingLeftX, buildingHeight, buildingWidth, 255);
  noLoop();
  //saveCanvas(c, "Architecture test", "jpg");
}
