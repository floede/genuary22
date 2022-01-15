const w = 600;
const h = 600;

let col = [];
col[1] = "#ede0d4";
col[2] = "#e6ccb2";
col[3] = "#ddb892";
col[4] = "#b08968";
col[5] = "#7f5539";
col[6] = "#9c6644";

const layers = new Array(5);

function setup() {
  c = createCanvas(w, h);

  for (let index = 0; index < layers.length; index++) {
    layers[index] = new Sand(index * 140, col[index + 1]);
  }
}

console.log("LAYERS: ", layers);

function draw() {
  background(200);
  for (let index = 0; index < layers.length; index++) {
    layers[index].show();
  }
  noLoop();
  saveCanvas(c, "Sand", "svg");
}

class Sand {
  constructor(pos, col) {
    this.show = function () {
      noStroke();
      fill(col);
      beginShape();
      vertex(0, pos);
      bezierVertex(
        0.167 * w + random(10) - 5,
        pos + random(100) + 20,
        0.33 * w + random(10) - 5,
        pos - random(100) - 20,
        0.5 * w + random(10) - 5,
        pos
      );
      bezierVertex(
        0.67 * w + random(10) - 5,
        pos + random(100) + 20,
        0.83 * w + random(10) - 5,
        pos - random(100) - 20,
        w,
        pos
      );
      vertex(w, h);
      vertex(0, h);
      vertex(0, pos);
      endShape();
    };
  }
}
