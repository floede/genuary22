const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

const randCol = () => {
  return [random(255), random(255), random(255)];
};

const weightedRandom = (min, max) => {
  return max / (Math.random() * max + min);
};

const noiseField = (noiseType, element) => {
  if (noiseType === "random") {
    element.loadPixels();
    for (let x = 0; x < element.width; x++) {
      for (let y = 0; y < element.height; y++) {
        let index = (x + y * width) * 4;
        var r = random(20, 235);
        element.pixels[index + 0] = r;
        element.pixels[index + 1] = r;
        element.pixels[index + 2] = r;
        element.pixels[index + 3] = random(0, 20);
      }
    }
    element.updatePixels();
  }
  return element;
};
