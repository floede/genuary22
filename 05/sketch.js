const width = 500;
const height = 500;
const squareSize = 50;

let positions = [
  [-25, -25],
  [-25, -75],
  [25, -75],
  [25, -25],
  [25, 25],
  [-25, 25],
  [-75, 25],
  [-75, -25],
  [-75, -75],
  [-75, -125],
  [-25, -125],
  [25, -125],
  [75, -125],
  [75, -75],
  [75, -25],
  [75, 25],
  [75, 75],
  [25, 75],
  [-25, 75],
  [-75, 75],
  [-125, 75],
  [-125, 25],
  [-125, -25],
  [-125, -75],
  [-125, -125],
  [-125, -175],
  [-75, -175],
  [-25, -175],
  [25, -175],
  [75, -175],
  [125, -175],
  [125, -125],
  [125, -75],
  [125, -25],
  [125, 25],
  [125, 75],
  [125, 125],
  [75, 125],
  [25, 125],
  [-25, 125],
  [-75, 125],
  [-125, 125],
  [-175, 125],
  [-175, 75],
  [-175, 25],
  [-175, -25],
  [-175, -75],
  [-175, -125],
  [-175, -175],
];

function setup() {
  c = createCanvas(width, height);
  background(3, 5, 4);
  //positions[0] = [width / 2, height / 2];
}

function draw() {
  for (let index = 0; index < positions.length; index++) {
    //const element = ;
    translate(width / 2, height / 2);
    rotate(1 / (100 - index));
    //square(0, 0, squareSize);
    rect(positions[index][0], positions[index][1], 50, 50);
    translate(-width / 2, -height / 2);
    noStroke();
  }
  noLoop();
  saveCanvas(c, "Destroy", "jpg");
}
