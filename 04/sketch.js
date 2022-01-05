const width = 1000;
const height = 1000;

let left_x = 0;
let top_y = 0;

let resolution = 0;

let grid = [];

const step_length = 10;

function setup() {
  left_x = int(width * -0.5);
  const right_x = int(width * 1.5);
  top_y = int(height * -0.5);
  const bottom_y = int(height * 1.5);

  resolution = int(width * 0.01);

  const num_columns = (right_x - left_x) / resolution;
  const num_rows = (bottom_y - top_y) / resolution;

  grid = Array(num_columns).fill(Array(num_rows)); //[num_columns][num_rows];

  const default_angle = PI * 0.25;

  for (let col = 0; col < num_columns; col++) {
    for (let row = 0; row < num_rows; row++) {
      let angle = (row / float(num_rows)) * PI;
      grid[col][row] = angle;
    }
  }
}

function draw() {
  strokeWeight(1);
  let num_steps = 10;
  let x = 500;
  let y = 500;

  beginShape();
  //for (n in [(0).num_steps]) {
  for (let i = 0; i < num_steps; i++) {
    curveVertex(500, 500);

    let x_offset = x - left_x;
    let y_offset = y - top_y;

    let column_index = Math.abs(int(x_offset / resolution));
    let row_index = int(y_offset / resolution);

    // NOTE: normally you want to check the bounds here
    let grid_angle = grid[column_index][row_index];

    let x_step = step_length * cos(grid_angle);
    let y_step = step_length * sin(grid_angle);

    x = x + x_step;
    y = y + y_step;
  }
  endShape();
  noLoop();
}
