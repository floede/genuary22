let size = 1000;
let c = {};

function setup() {
  c = createCanvas(size, size);
  background(3, 5, 4);
}

function drawVerticaltalBar(x, y) {
  stroke(colors[Math.round(random(9))].rgb);
  line(x, y + 5, x + 10, y + 5);
}

function drawHorizontalBar(x, y) {
  stroke(colors[Math.round(random(9))].rgb);
  line(x + 5, y, x + 5, y + 10);
}

function drawCross(x, y) {
  let coin = Math.round(random(1));
  if (coin === 1) {
    drawVerticaltalBar(x, y);
    drawHorizontalBar(x, y);
  } else {
    drawHorizontalBar(x, y);
    drawVerticaltalBar(x, y);
  }
}

function draw() {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      drawCross(i * 10, j * 10);
    }
  }
  noLoop();
  saveCanvas(c, "10000", "jpg");
}
