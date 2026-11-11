// 液态玻璃 · 片元着色器 — 画心人 · LiquidGlass-Pack v2.0 · MIT
// 圆角矩形 SDF（可平滑融合）→ 边缘折射 → RGB 分通道色散 → 5 点约 1px 模糊 → 细白边 + 边缘光。无阴影。
// 坐标：像素，原点左上。uR[i] = (中心x, 中心y, 半宽, 半高)；uS[i] = (圆角, 磨砂0~1, 放大倍数, 折射倍数)
// uT[i] = (图层 0/1, 着色 0~1, -, -)；uP = (strength 折射, chroma 色散, blur 模糊px, band 折射带宽px)
// uE = (edgeWidth 白边px, edgeOpacity, 光源角度rad, 边缘光强度)；uM = (融合半径px, 全局着色)
precision highp float;
uniform sampler2D uTex; uniform vec2 uRes; uniform int uN;
uniform vec4 uR[8]; uniform vec4 uS[8]; uniform vec4 uT[8];
uniform vec4 uP; uniform vec4 uE; uniform vec2 uM; varying vec2 vUv;
float sdRB(vec2 p, vec2 b, float r){ r = min(r, min(b.x, b.y)); vec2 q = abs(p) - b + r; return min(max(q.x,q.y),0.) + length(max(q,0.)) - r; }
float smin(float a, float b, float k){ if(k <= .01) return min(a,b); float h = clamp(.5 + .5*(b-a)/k, 0., 1.); return mix(b,a,h) - k*h*(1.-h); }
float scene(vec2 p, float L){ float d = 1e5; for(int i=0;i<8;i++){ if(i>=uN) break; if(abs(uT[i].x-L)>.5) continue; d = smin(d, sdRB(p-uR[i].xy, uR[i].zw, uS[i].x), uM.x); } return d; }
vec3 tap(vec2 px, vec2 ca){ vec2 u = px/uRes; vec2 c = ca/uRes; return vec3(texture2D(uTex, clamp(u+c,.001,.999)).r, texture2D(uTex, clamp(u,.001,.999)).g, texture2D(uTex, clamp(u-c,.001,.999)).b); }
vec4 glass(vec2 p, float L){
  float d = scene(p, L); if(d > 3.) return vec4(0.);
  float e = 1.5; vec2 g = normalize(vec2(scene(p+vec2(e,0.),L)-scene(p-vec2(e,0.),L), scene(p+vec2(0.,e),L)-scene(p-vec2(0.,e),L)) + 1e-6);
  float best = 1e5; vec4 R = uR[0]; vec4 S = uS[0]; vec4 Tt = uT[0];
  for(int i=0;i<8;i++){ if(i>=uN) break; if(abs(uT[i].x-L)>.5) continue; float di = sdRB(p-uR[i].xy, uR[i].zw, uS[i].x); if(di<best){ best=di; R=uR[i]; S=uS[i]; Tt=uT[i]; } }
  float t = clamp(-d/max(uP.w,1.), 0., 1.); float k = pow(1. - pow(t, .30), 2.);
  vec2 q = p; if(S.z > 1.001) q = R.xy + (p - R.xy)/S.z;
  vec2 refr = -g*k*uP.x*S.w; vec2 ca = -g*k*uP.y*S.w; vec2 bp = q + refr; float bs = uP.z;
  vec3 s = tap(bp,ca) + tap(bp+vec2(bs,0.),ca) + tap(bp-vec2(bs,0.),ca) + tap(bp+vec2(0.,bs),ca) + tap(bp-vec2(0.,bs),ca); s /= 5.;
  vec3 col = s*1.06 + vec3(.015,.025,.048);
  col += smoothstep(R.w*.35, -R.w*1.1, p.y-R.y) * vec3(.055,.075,.105);
  col = mix(col, vec3(.97,.98,1.), S.y*.85);
  col = mix(col, vec3(.88,.94,1.), max(uM.y, Tt.y));
  vec2 Ld = vec2(cos(uE.z), sin(uE.z)); float rim = 1. - smoothstep(0., 7., -d);
  col += uE.w * rim * pow(max(dot(g, Ld), 0.), 2.);
  col += uE.w * .45 * rim * pow(max(dot(g, -Ld), 0.), 3.);
  float line = 1. - smoothstep(0., uE.x, abs(d)); col = mix(col, vec3(1.), line*uE.y);
  float inside = 1. - smoothstep(-.8, .8, d);
  return vec4(col, max(inside, line*uE.y));
}
void main(){
  vec2 p = vUv*uRes; vec3 c = texture2D(uTex, vUv).rgb;
  vec4 a = glass(p, 0.); c = mix(c, a.rgb, a.a);
  vec4 b = glass(p, 1.); c = mix(c, b.rgb, b.a);
  gl_FragColor = vec4(c, 1.);
}
