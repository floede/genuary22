precision highp float;

uniform vec2 u_resolution;

void main() {
  vec3 color = vec3(0.,0.,0.);
  vec2 st = gl_FragCoord.xy/u_resolution;

  color += step(.5,st.x);
    
  gl_FragColor = vec4(color,1.0);
}