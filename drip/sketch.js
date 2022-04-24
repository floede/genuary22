const w = 1024;
const h = 1500;

const noOfDrops = 20;

function setup() {
  c = createCanvas(w, h);
  colorMode(HSB);
  background(90);
}

function draw() {
  for (let index = 0; index < noOfDrops; index++) {
    let drop = new Drop(random(20, 1200), 250, randCol());
  }
  noLoop();
  //saveCanvas(c, "Drip 23042022 Palette", "png");
}

class Drop {
  constructor(strength, size, col) {
    this.x = 20 * Math.floor(random(1, 0.05 * w - 1));
    this.y = 0;
    this.yspeed = 4;
    this.attrition = 0.987;

    this.hue = 0;
    this.saturation = 0;

    while (strength > 15) {
      noStroke();
      this.hue = map(this.x, 0, w, 0, 255);
      this.saturation = map(this.y, 0, h - 50, 255, 0);
      fill(this.hue, this.saturation, 200);
      circle(this.x, this.y, size);
      this.y = this.y + this.yspeed;
      if (size > 20) {
        size = this.attrition * size;
      }
      strength = this.attrition * strength;
    }
  }
}
