precision highp float;

#define PI 3.14159265359

uniform vec2 u_resolution;

void main() {
  vec3 color = vec3(0.);
  vec2 st = gl_FragCoord.xy/u_resolution;

  color += step(.5+cos(st.y*PI)*.25,st.x);
    
  gl_FragColor = vec4(color,1.);
}