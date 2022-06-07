let pixels, pixelSize;

let coords = [];

function setup() {
  let w = min(windowWidth, windowHeight);

  c = createCanvas(w, w);
  colorMode(HSB);
  background(37, 14, 100);

  pixels = 16;
  pixelSize = w / pixels;

  for (let y = 0; y <= pixels; y++) {
    let row = [];
    for (let x = 0; x <= pixels; x++) {
      row[x] = [y * pixelSize, x * pixelSize];
    }
    coords[y] = row;
  }
}

function draw() {
  noStroke();
  fill(50);
  beginShape();
  // Specifying all the vertices
  vertex(...coords[1][16]);
  vertex(...coords[1][10]);
  vertex(...coords[2][10]);
  vertex(...coords[2][7]);
  vertex(...coords[3][7]);
  vertex(...coords[3][5]);
  vertex(...coords[4][5]);
  vertex(...coords[4][4]);
  vertex(...coords[5][4]);
  vertex(...coords[5][3]);
  vertex(...coords[6][3]);
  vertex(...coords[6][2]);

  vertex(...coords[10][2]);
  vertex(...coords[10][3]);
  vertex(...coords[11][3]);
  vertex(...coords[11][4]);
  vertex(...coords[12][4]);
  vertex(...coords[12][5]);
  vertex(...coords[13][5]);
  vertex(...coords[13][7]);
  vertex(...coords[14][7]);
  vertex(...coords[14][10]);
  vertex(...coords[15][10]);
  vertex(...coords[15][16]);

  // Ending the shape using endShape()
  endShape();
  fill(100);

  beginShape();
  vertex(...coords[4][6]);
  vertex(...coords[7][6]);
  vertex(...coords[7][9]);
  vertex(...coords[4][9]);
  endShape();

  beginShape();
  vertex(...coords[9][6]);
  vertex(...coords[12][6]);
  vertex(...coords[12][9]);
  vertex(...coords[9][9]);
  endShape();

  fill(10);
  beginShape();
  vertex(...coords[5][7]);
  vertex(...coords[7][7]);
  vertex(...coords[7][9]);
  vertex(...coords[5][9]);
  endShape();

  beginShape();
  vertex(...coords[9][7]);
  vertex(...coords[11][7]);
  vertex(...coords[11][9]);
  vertex(...coords[9][9]);
  endShape();

  fill(100);
  beginShape();
  vertex(...coords[1][16]);
  vertex(...coords[1][15]);
  vertex(...coords[2][15]);
  vertex(...coords[2][13]);
  vertex(...coords[3][13]);
  vertex(...coords[3][12]);
  vertex(...coords[5][12]);
  vertex(...coords[5][11]);
  vertex(...coords[7][11]);
  vertex(...coords[7][10]);
  vertex(...coords[9][10]);
  vertex(...coords[9][11]);
  vertex(...coords[11][11]);
  vertex(...coords[11][12]);
  vertex(...coords[13][12]);
  vertex(...coords[13][13]);
  vertex(...coords[14][13]);
  vertex(...coords[14][15]);
  vertex(...coords[15][15]);

  vertex(...coords[15][16]);
  endShape();
  noLoop();
}
