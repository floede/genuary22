function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);

  // size of the padding between grid and sketch borders
  padding = w / 12;

  // number of rows and columns of the grid
  gridDivsX = 15;
  gridDivsY = 15;

  // actual spacing between grid points
  gridSpacingX = (w - padding * 2) / gridDivsX;
  gridSpacingY = (w - padding * 2) / gridDivsY;

  // here we populate the 2d boolean array
  let bools = [];

  for (let x = 0; x < gridDivsX; x++) {
    var column = [];
    for (let y = 0; y < gridDivsY; y++) {
      column.push(1);
    }
    bools.push(column);
  }
}
