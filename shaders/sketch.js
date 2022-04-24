// this variable will hold our shader object
let theShader;

function preload() {
  // load the shader
  theShader = loadShader(
    "shaders/assets/basic.vert",
    "shaders/assets/basic.frag"
  );
}

function setup() {
  // shaders require WEBGL mode to work
  c = createCanvas(1024, 1024, WEBGL);
  //noStroke();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0, 0, 100, 100); // This means nothing???

  //saveCanvas(c, "Shader: The Void (blue)", "png");
  noLoop();
}
