const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

const randCol = () => {
  return [random(255), random(255), random(255)];
};

const weightedRandom = (min, max) => {
  return max / (Math.random() * max + min);
};
