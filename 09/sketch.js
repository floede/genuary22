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
  fill(col);
  rect(left, h - height, width, height); //  x y width height
  triangle(
    left,
    h - height,
    left + width / 2,
    h - height - width / 2,
    width + left,
    h - height
  );
}

function building2(left, height, width, col) {
  noStroke();
  fill(col);
  rect(left, h - height, width, height); //  x y width height
  arc(left + width / 2, h - height, width, width, PI, TWO_PI); // x y width height
}

function building3(left, height, width, col) {
  noStroke();
  fill(col);
  rect(left, h - height, width, height); //  x y width height
}

function building4(left, height, width, col) {
  noStroke();
  fill(col);
  rect(left, h - height, width, height);
  rect(left + 20, h - height - 20, width - 40, 20); //  x y width height
}

function building5(left, height, width, col) {
  noStroke();
  fill(col);
  rect(left, h - height, width, height);
  triangle(
    left,
    h - height,
    left + width,
    h - height - width / 2,
    width + left,
    h - height
  );
}

function draw() {
  strokeCap(SQUARE);
  //building4(buildingLeftX - 2, buildingHeight, buildingWidth + 4, 0);
  //building5(buildingLeftX, buildingHeight, buildingWidth, 255);
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 5; col++) {
      let rand = Math.round(random(5));
      let left = buildingLeftX + col * 100 + random(50) - 25;
      let height = buildingHeight - row * 60 - random(20) - 10;
      let width = buildingWidth + random(40) - 20;
      let color = 200 - 20 * row;
      if (rand === 1) {
        building1(left, height, width, color);
      }
      if (rand === 2) {
        building2(left, height, width, color);
      }
      if (rand === 3) {
        building3(left, height, width, color);
      }
      if (rand === 4) {
        building4(left, height, width, color);
      }
      if (rand === 5) {
        building5(left, height, width, color);
      }
    }
  }
  noLoop();
  saveCanvas(c, "Architecture", "jpg");
}
