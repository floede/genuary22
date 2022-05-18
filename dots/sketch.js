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
      let distances = { max: 0, d: 0 };

      let scaledX = padding + 0.5 * gridSpacingX + x * gridSpacingX;
      let scaledY = padding + 0.5 * gridSpacingY + y * gridSpacingY;

      findDistances(distances, scaledX, scaledY, "center");

      push();
      translate(scaledX, scaledY);
      let rollBig = 100 * random();
      let rollSmall = 100 * random();
      let rollDiamond = 100 * random();

      let showBig = centered
        ? rollBig > 30 + (distances.d / distances.max) * 100
        : rollBig < -10 + (distances.d / distances.max) * 100;
      let showSmall = centered
        ? rollSmall > 40 + (distances.d / distances.max) * 100
        : rollSmall < -20 + (distances.d / distances.max) * 100;

      let BigType;
      if (true) {
        showBig = true;
        BigType = floor(map(distances.d, 0, distances.max, 4, 1));
        console.log("BigType: ", BigType);
      }

      let showDiamond = false; //rollDiamond > 50 + (d / maxDist) * 100;

      if (random(100) > 50 + (distances.d / distances.max) * 100) {
        // doubleCircle(gridSpacingX);
      }

      if (showBig) {
        rotate(90 * floor(4 * random()));
        let bigCircle = new BigCircle(BigType);
      }
      if (showDiamond) {
        let diamond = new Diamond(gridSpacingX);
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
  //saveCanvas(c, `Dance Dots - ${centered ? " - centered" : ""}`, "png");
}

class BigCircle {
  constructor(type = 0) {
    this.sizeX = ceil(gridSpacingX);
    this.sizeY = ceil(gridSpacingY);
    this.type = type;
    let shapeRoll = random();
    if (type === 3 || (type === 0 && shapeRoll > 0.5)) {
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
    } else if (0.5 > shapeRoll && shapeRoll > 0) {
      if (type === 2 || (type === 0 && random() > 0.5)) {
        //noStroke();
        let col = palette[random([1, 2, 3, 4])].hsb;
        fill(col);
        stroke(col);
      } else if (type === 1 || type === 0) {
        noFill();
        stroke(palette[random([1, 2, 3, 4])].hsb);
      }
      strokeWeight(0.05 * this.sizeX);
      circle(0, 0, this.sizeX - 0.05 * this.sizeX);
    } else {
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

class Diamond {
  constructor(size) {
    this.size = size / 2;
    noStroke();
    fill(palette[random([1, 2, 3, 4])].hsb);
    beginShape();
    vertex(0, this.size);
    vertex(this.size, 0);
    vertex(0, -this.size);
    vertex(-this.size, 0);
    endShape();
  }
}

function doubleCircle(size) {
  fill(palette[random([1, 2, 3, 4])].hsb);
  circle(0, 0, 2 * size);
}

function quarterCircle(params) {
  noStroke();
  fill(palette[random([1, 2, 3, 4])].hsb);
  arc(0 - this.sizeX, 0 - this.sizeY, 2 * this.sizeX, 2 * this.sizeY, 0, 90);
}

function findDistances(distances, x, y, type) {
  switch (type) {
    case "center":
      distances.max = dist(0, 0, width / 2, height / 2);
      distances.d = dist(x, y, width / 2, height / 2);
      break;

    case "vertical":
      distances.max = dist(0, 0, width / 2, 0);
      distances.d = dist(x, y, width / 2, y);
      break;

    case "horizontal":
      distances.max = dist(0, 0, 0, height / 2);
      distances.d = dist(x, y, x, height / 2);
      break;

    case "tl2br":
      distances.max = dist(0, 0, 0, width);
      distances.d = dist(x, y, x, x);
      break;

    case "tr2bl":
      distances.max = dist(0, 0, 0, width);
      distances.d = dist(x, y, x, width - x);
      break;

    default:
      break;
  }

  return distances;
}
