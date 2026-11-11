// 液态玻璃 · 顶点着色器（全屏四边形）— 画心人 · MIT
attribute vec2 a;
varying vec2 vUv;
void main() { vUv = vec2(a.x * .5 + .5, .5 - a.y * .5); gl_Position = vec4(a, 0., 1.); }
