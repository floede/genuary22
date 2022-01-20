let w = 1000;
let h = 1000;

let waves = [];

function setup(params) {
  c = createCanvas(w, h);
  colorMode(HSB);
  background(210, 77, 24);
  for (let index = 0; index < 10; index++) {
    waves[index] = new Wave(index * 100);
  }
}

function draw(params) {
  //console.log("WAVES: ", waves[0]);
  for (let i = 0; i < waves.length; i++) {
    let shuffled = shuffle(waves[i].coords);
    shuffled.forEach((element) => {
      stroke(210, 77, 20);
      fill(210, 77, 26 + i * 2);
      circle(element[0], element[1] + random(10), random(50) + 150);
    });
  }
  saveCanvas(c, "Sea of shapes", "png");
  noLoop();
}

class Wave {
  constructor(seed) {
    this.startX = 0;
    this.startY = seed + random(110) - 50;
    if (Math.floor(Math.random() * 2) == 0) {
      this.firstControlY = seed - 150;
      this.secondControlY = seed + 150;
    } else {
      this.firstControlY = seed + 150;
      this.secondControlY = seed - 150;
    }
    this.firstControlX = 200 + random(150);
    this.secondControlX = 700 + random(150);
    this.endX = w;
    this.endY = seed + random(110) - 50;
    this.x1 = this.startX;
    this.x2 = this.firstControlX;
    this.x3 = this.secondControlX;
    this.x4 = this.endX;
    this.y1 = this.startY;
    this.y2 = this.firstControlY;
    this.y3 = this.secondControlY;
    this.y4 = this.endY;
    stroke(20);
    fill(255);
    this.curveSteps = 50;

    this.coords = [];
    for (let i = 0; i <= this.curveSteps; i++) {
      let t = i / this.curveSteps;
      let x = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
      let y = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
      //circle(x, y, 40);
      this.coords[i] = [x, y];
    }
    //console.log("COORDS: ", coords);
  }
}
