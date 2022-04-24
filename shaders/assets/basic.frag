precision highp float;

void main() {
    // gl_FragColor is a built in shader variable,
    // and your .frag file must set it
    // We are setting the color into a new vec4, with a transparency of 1 (no transparency)
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
}