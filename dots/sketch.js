let bools = [];
let palette;

function setup() {
  let w = min(windowWidth, windowHeight);

  c = createCanvas(w, w);
  angleMode(DEGREES);
  colorMode(HSB);

  palette = random(colors);

  background(palette[0].hsb);

  // size of the padding between grid and sketch borders
  padding = Math.ceil(w / 12);

  // number of rows and columns of the grid
  gridDivsX = 10;
  gridDivsY = 10;

  // actual spacing between grid points
  gridSpacingX = ceil((w - padding * 2) / gridDivsX);
  gridSpacingY = ceil((w - padding * 2) / gridDivsY);

  // here we populate the 2d boolean array

  for (let x = 0; x < gridDivsX; x++) {
    var column = [];
    for (let y = 0; y < gridDivsY; y++) {
      column.push(1);
    }
    bools.push(column);
  }
}

function draw() {
  noStroke();
  for (let x = 0; x < gridDivsX; x++) {
    for (let y = 0; y < gridDivsY; y++) {
      let maxDist = dist(0, 0, width / 2, height / 2);
      let d = dist(
        padding + 0.5 * gridSpacingX + x * gridSpacingX,
        padding + 0.5 * gridSpacingY + y * gridSpacingY,
        width / 2,
        height / 2
      );

      push();
      translate(
        padding + 0.5 * gridSpacingX + x * gridSpacingX,
        padding + 0.5 * gridSpacingY + y * gridSpacingY
      );
      let rollBig = 100 * random();

      if (rollBig > 30 + (d / maxDist) * 100) {
        //rotate(90 * floor(4 * random()));
        let bigCircle = new BigCircle();
      }

      let rollSmall = 100 * random();

      if (rollSmall > 40 + (d / maxDist) * 100) {
        let smallCircle = new SmallCircle();
      }

      /*       console.table({
        "Max dist": maxDist,
        dist: d,
        "Dist %": (d / maxDist) * 100,
        "Big roll": rollBig,
        "Small roll": rollSmall,
      }); */

      pop();
    }
  }
  stroke(100);
  //line(width - padding, 0, width - padding, height);
  noLoop();
  //saveCanvas(c, "Dance Dots", "png");
}

class BigCircle {
  constructor() {
    let shapeRoll = random();
    if (shapeRoll > 1) {
      fill(palette[random([1, 2, 3, 4])].hsb);
      circle(0, 0, 2 * gridSpacingX);
    } else if (shapeRoll > 0.5) {
      fill(palette[random([1, 2, 3, 4])].hsb);
      rectMode(CENTER);
      rect(
        0,
        0,
        gridSpacingX,
        gridSpacingY,
        0.5 * gridSpacingX,
        0.5 * gridSpacingX,
        0.5 * gridSpacingX,
        0
      );
    } else {
      if (random() > 0.5) {
        //noStroke();
        let col = palette[random([1, 2, 3, 4])].hsb;
        fill(col);
        stroke(col);
      } else {
        noFill();
        stroke(palette[random([1, 2, 3, 4])].hsb);
      }
      strokeWeight(0.05 * gridSpacingX);
      circle(0, 0, gridSpacingX - 0.05 * gridSpacingX);
    }
  }
}

class SmallCircle {
  constructor() {
    if (random() > 0.5) {
      noStroke();
      fill(palette[random([1, 2, 3, 4])].hsb);
    } else {
      noFill();
      stroke(palette[random([1, 2, 3, 4])].hsb);
    }
    strokeWeight(0.05 * gridSpacingX);
    circle(0, 0, gridSpacingX / 2);
  }
}
