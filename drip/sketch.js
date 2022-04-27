const w = 1024;
const h = 1500;

let palette = null;

const noOfDrops = 25;

function setup() {
  c = createCanvas(w, h);
  colorMode(HSB);
  background(20);
  palette = Math.round(random(0, colors.length - 1));
}

function draw() {
  for (let index = 0; index < noOfDrops; index++) {
    //let drop = new Drop(random(20, 1200), 250, randCol());
    let seed = weightedRandom(1, 10);
    let str = map(seed, 1, 10, 20, 1200);
    let drop = new Drop(str, 200, palette);
  }
  noLoop();
  //saveCanvas(c, "Drip 27042022 Palette", "png");
}

class Drop {
  constructor(strength, size, palette) {
    this.x = 20 * Math.floor(random(1, 0.05 * w - 1));
    this.y = 0;
    this.yspeed = 4;
    this.attrition = 0.987;

    this.hue = 0;
    this.saturation = 0;
    //col = random() < 0.5 ? 10 : 360;
    this.col =
      colors[palette][Math.round(random(colors[palette].length - 1))].hsb;

    while (strength > 15) {
      noStroke();
      //this.hue = map(this.x, 0, w, 0, 360);
      this.hue = map(this.x, 0, w, 0, 360);

      while (this.hue > 360) {
        this.hue = this.hue - 360;
      }

      this.saturation = map(this.y, 0, h - 50, 100, 20);
      fill(this.hue, this.saturation, 100); // Rainbow
      //fill(234, this.saturation, 100); // One color
      //fill(...this.col);

      circle(this.x, this.y, size);
      this.y = this.y + this.yspeed;
      if (size > 20) {
        size = this.attrition * size;
      }
      strength = this.attrition * strength;
    }
    noFill();
    stroke(0, 0, 100, 0.15);
    strokeWeight(0.25 * size);
    if (size < 50) {
      arc(this.x, this.y - 5, 0.5 * size, 0.5 * size, HALF_PI, PI);
    }
  }
}
