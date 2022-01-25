const w = 1000;
const h = 1000;
const gridLen = 9;
let grid = [];
let hue;

function setup(params) {
  c = createCanvas(w, h);
  colorMode(HSB, 100);
  hue = random(100);
  background(hue, 100, 20);
  for (let i = 0; i < gridLen; i++) {
    let row = [];
    for (let j = 0; j < gridLen; j++) {
      row[j] = [
        i * 4 - j * 4,
        i * 2 + j * 2 - random(70, 130) / (random(3, 5) + i + j),
      ];
    }
    grid[i] = row;
  }
}

function draw(params) {
  translate(0.5 * w, 0.5 * h);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let tower = new Tower(grid[i][j][0], grid[i][j][1]);
      tower.show();
    }
  }
  noLoop();
  saveCanvas(c, "Perspective" + hue, "png");
}

class Tower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //this.col = col;
    this.side = 50;

    this.show = function () {
      push();
      translate(this.x * 10, this.y * 10);
      noStroke();
      fill(hue, 100, 80);
      //Top
      beginShape();
      vertex(0, 20);
      vertex(40, 0);
      vertex(0, -20);
      vertex(-40, 0);
      endShape();
      //Left
      fill(hue, 100, 60);
      beginShape();
      vertex(-40, 0);
      vertex(0, 20);
      vertex(0, h);
      vertex(-40, h);
      endShape();
      //Right
      fill(hue, 100, 40);
      beginShape();
      vertex(0, 20);
      vertex(40, 0);
      vertex(40, h);
      vertex(0, h);
      endShape();
      pop();
    };
  }
}
