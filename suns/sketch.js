const w = 1000;
const h = 1000;

const cx = w * 0.5;
const cy = h * 0.5;
const pokeW = w * 0.01;
const pokeH = h * 0.105;

const radius = w * 0.3;

let x, y;

function setup() {
  c = createCanvas(w, h);
  colorMode(HSB);
  background(100);
}

function draw() {
  const num = 120;

  const rings = 5;
  const ringWidth = 100 / rings;
  const variation = 40;

  for (let reps = 0; reps < rings; reps++) {
    let col = colors[2][reps].hsb;
    rectMode(CENTER);
    if (reps === rings - 1) {
      rectMode(CORNER);
    }
    for (let index = 0; index < num; index++) {
      const slice = degToRad(360 / num);
      const angle = slice * index;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      push();
      translate(x, y);
      rotate(-angle);
      noStroke();
      fill(col);

      if (random() > 0.15) {
        rect(
          -pokeW * 0.5,
          -pokeH * 0.1 +
            (reps === rings - 1
              ? -pokeH * 2.2
              : -2.2 * pokeH - (rings - reps) * 1.1 * pokeH),
          pokeW,
          random(-variation, variation) + pokeH
        );
      }

      pop();
    }
  }

  noLoop();
  saveCanvas(c, "Sun", "png");
}
