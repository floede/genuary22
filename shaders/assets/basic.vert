// We'll not pay attention to that in this article. This change the precision
// on the numbers we use.
precision highp float;

// This “vec3 aPosition” is a built in shader functionality.
// You must keep that naming.
// It's automatically used by p5 to set the position of every vertex on your canvas
attribute vec3 aPosition;

// We always must do at least one thing in the vertex shader:
// tell the pixel where on the screen it lives:
void main() {
  // copy the position data into a vec4, using 1.0 as the w component
  vec4 positionVec4 = vec4(aPosition, 1.0);

  // Make sure the shader covers the entire screen:
  // scale the rect by two, and move it to the center of the screen
  // if we don't do this, it will appear with its bottom left corner
  // in the center of the sketch
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // Send the vertex information on to the fragment shader
  // this is done automatically, as long as you put it into the built in
  // shader variable “gl_Position”
  gl_Position = positionVec4;
}