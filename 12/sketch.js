var squares = [];
var numsquares = 200;

function setup() {
  createCanvas(1000, 1000);

  for (i = 0; i < numsquares; i++) {
    c = new squareObj(random(10, 70), i); // generate a random sized squareObj and store it's ID for later
    squares.push(c); //add it to the array.
  }
}

function draw() {
  background(255);

  for (j = 0; j < numsquares; j++) {
    squares[j].place(squares); //try to place a squareObj on the screen
  }

  for (k = 0; k < numsquares; k++) {
    // display the objects
    squares[k].disp();
  }
}

function squareObj(d, id) {
  this.x = random(width);
  this.y = random(height);
  this.d = d;
  this.id = id;
  this.color = color(random(255), random(255), random(255));
  this.hit = true;

  this.place = function (objArray) {
    for (i = 0; i < objArray.length; i++) {
      if (this.id != i) {
        //dont do the check if it is looking at itself
        this.hit = collideRectRect(
          this.x,
          this.y,
          this.d,
          this.d,
          objArray[i].x,
          objArray[i].y,
          objArray[i].d,
          objArray[i].d
        ); //colliding with anything?

        if (this.hit == true) {
          // if we ever get a true we have to try again, this works since we iterate down through the objects one by one.
          //try again:
          this.x = random(width);
          this.y = random(height);
        }
      }
    }
  };

  this.disp = function () {
    //noStroke();
    //fill(this.color);
    //ellipse(this.x, this.y, this.d, this.d);
    rect(this.x, this.y, this.d, this.d);
  };
}
