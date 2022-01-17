const w = 1000;
const h = 1000;

const palette = ["#f2c95f", "#5477ad", "#8b1b10"];

const elmlength = 150;
const mod = 50;

function setup(params) {
  c = createCanvas(w, h);
  background(240);
}

function draw(params) {
  for (let index = 0; index < 33; index++) {
    fill(palette[Math.floor(random(palette.length))]);
    noStroke();
    let roll = Math.ceil(random(3));
    if (roll === 1) {
      square(
        50 + random(w - 250),
        50 + random(h - 250),
        elmlength + random(mod)
      );
    } else if (roll === 2) {
      circle(
        100 + random(w - 200),
        100 + random(h - 200),
        elmlength + random(mod)
      );
    } else {
      let len = elmlength + random(mod);
      let x = 100 + random(w - 250);
      let y = 150 + random(h - 300);
      triangle(
        x,
        y,
        x + 0.5 * len,
        y - len * Math.sin(Math.PI / 3),
        x + len,
        y
      );
    }
  }
  noLoop();
  saveCanvas(c, "3 colors", "png");
}
