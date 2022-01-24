const w = 1000;
const h = 1000;

function setup(params) {
  c = createCanvas(w, h);
  background(0);
  stroke(255);
  stroke("rgba(255, 255, 255, 0.25)");
  strokeWeight(2);

  angleMode(DEGREES);
  let totalSweep = 360;

  //move 0,0 to the center of the screen
  translate(width / 2, height / 2);

  let r = width / 3;

  let count = 0;

  let j = 10;

  let petals = 8;
  let layers = 5;

  for (let index = 0; index < layers; index++) {
    for (
      let a = 0 + index * 10;
      a < totalSweep;
      a += 360 / (petals - index) + index * 10
    ) {
      let x = (r - index * 50) * sin(a) + random(-j, j);
      let y = (r - index * 50) * cos(a) + random(-j, j);

      fill(20, 180, 50);
      circle(x, y, 250 - index * 10);
      //point(x, y);

      j *= 1.001;
      count++;
    }
  }
  //filter(BLUR, 5);
  // save(points, 'points.png');
}

function draw(params) {}
