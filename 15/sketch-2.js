const w = 500;
const h = 1000;

//--blue-ncs: hsla(200, 68%, 48%, 1);
//--blue-sapphire: hsla(198, 64%, 30%, 1);
//--light-steel-blue: hsla(212, 28%, 74%, 1);
//--beaver: hsla(31, 23%, 54%, 1);
//--raw-umber: hsla(23, 18%, 41%, 1);

const waves = 1;
const waveLines = new Array(waves);

function setup() {
  c = createCanvas(w, h);
  colorMode(HSB);

  for (let index = 0; index < waveLines.length; index++) {
    waveLines[index] = [];
    for (let j = 0; j < width; j++) {
      waveLines[index][j] = new WaveLine(j);
    }
  }
}

function draw() {
  background(31, 23, 54, 1);
  for (var i = 0; i < waveLines.length; i++) {
    for (let j = 0; j < waveLines[i].length; j++) {
      waveLines[i][j].roll();
      waveLines[i][j].show();
    }
  }
}

class WaveLine {
  constructor(pos) {
    this.seed = pos;
    this.x = pos;
    this.y = h + this.seed;
    this.shoreLine = 100;
    this.yspeed = 5;
    this.coming = true;

    this.roll = function () {
      this.yspeed = (this.coming ? 0.04 : -0.04) * (this.y - this.shoreLine);
      this.y = this.y - this.yspeed;
      if (this.y < this.shoreLine + 1) {
        this.coming = false;
      }
      if (this.y > h) {
        this.coming = true;
      }
    };
    this.show = function () {
      stroke(200, 68, 48, 0.5);
      line(this.x, this.y, this.x, h);
      circle(this.x, this.y, 10);
    };
  }
}
