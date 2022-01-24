const w = 1000;
const h = 1000;

function setup(params) {
  c = createCanvas(w, h);
  function pseudoRandom(seed, num_of_digits) {
    n = (seed * seed).toString();
    while (n.length < num_of_digits * 2) {
      n = "0" + n;
    }
    start = Math.floor(num_of_digits / 2);
    end = start + num_of_digits;
    seed = parseInt(n.substring(start, end));
    return seed;
  }
  num_of_digits = 6;
  seed = 1452;
  for (i = 0; i < 5; i++) {
    random_number = pseudoRandom(seed, num_of_digits);
    console.log(random_number);
    seed = random_number;
  }
}

function draw(params) {}

class Square {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;

    this.show = function () {
      fill(this.col);
      stroke(bg);
      square(0, 0, size);
    };
  }
}
