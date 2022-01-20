let w = 1000;
let h = 1000;

let waves = [];

function setup(params) {
  c = createCanvas(w, h);
  background(20);
  for (let index = 0; index < 20; index++) {
    waves[index] = new Wave(index * 50);
  }
}

function draw(params) {
  //console.log("WAVES: ", waves[0]);
  for (let i = 0; i < waves.length; i++) {
    let shuffled = shuffle(waves[i].coords);
    shuffled.forEach((element) => {
      colorMode(HSB);
      stroke(10);
      fill(215, 67, 24 + i * 5);
      circle(element[0], element[1] + random(50), random(30) + 70);
    });
  }
  saveCanvas(c, "Sea of shapes", "png");
  noLoop();
}

class Wave {
  constructor(seed) {
    this.startX = 0;
    this.startY = seed + random(100) - 50;
    this.firstControlX = 200 + random(100);
    this.firstControlY = seed - 150;
    this.secondControlX = 700 + random(100);
    this.secondControlY = seed + 150;
    this.endX = w;
    this.endY = seed + random(100) - 50;
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
    this.curveSteps = 40;

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
