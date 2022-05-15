const centered = true;
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
  gridSpacingX = (w - padding * 2) / gridDivsX;
  gridSpacingY = (w - padding * 2) / gridDivsY;

  // here we populate the 2d boolean array

  for (let x = 0; x < gridDivsX; x++) {
    var column = [];
    for (let y = 0; y < gridDivsY; y++) {
      column.push(1);
    }
    bools.push(column);
  }
  pg = createGraphics(w, w);
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
      let rollSmall = 100 * random();

      let showBig = centered
        ? rollBig > 30 + (d / maxDist) * 100
        : rollBig < -10 + (d / maxDist) * 100;
      let showSmall = centered
        ? rollSmall > 40 + (d / maxDist) * 100
        : rollSmall < -20 + (d / maxDist) * 100;

      if (showBig) {
        rotate(90 * floor(4 * random()));
        let bigCircle = new BigCircle();
      }

      if (showSmall) {
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

  pg.background(100);
  noiseField("random", pg);
  image(pg, 0, 0);

  /*   stroke(100);
  line(padding, 0, padding, height);
  line(width - padding, 0, width - padding, height);
  line(0, padding, height, padding);
  line(0, height - padding, width, height - padding);*/
  noLoop();
  //saveCanvas(c, `Dance Dots${centered ? " - centered" : ""}`, "png");
}

class BigCircle {
  constructor() {
    this.sizeX = ceil(gridSpacingX);
    this.sizeY = ceil(gridSpacingY);
    let shapeRoll = random();
    if (shapeRoll > 1) {
      fill(palette[random([1, 2, 3, 4])].hsb);
      circle(0, 0, 2 * this.sizeX);
    } else if (shapeRoll > 0.5) {
      fill(palette[random([1, 2, 3, 4])].hsb);
      rectMode(CENTER);
      rect(
        0,
        0,
        this.sizeX,
        this.sizeY,
        0.5 * this.sizeX,
        0.5 * this.sizeX,
        0.5 * this.sizeX,
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
      strokeWeight(0.05 * this.sizeX);
      circle(0, 0, this.sizeX - 0.05 * this.sizeX);
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
