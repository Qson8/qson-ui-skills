# Web / 小程序 WebView 实现要点

## 底座 CSS 变量

```css
:root{
  --sheet-radius:26px;
  --sheet-dur:420ms;
  --sheet-ease:cubic-bezier(.22,1,.36,1);
  --backdrop-dur:250ms;
  --stagger:50ms;
}
.overlay{backdrop-filter:blur(0px) brightness(1);transition:backdrop-filter var(--backdrop-dur),background var(--backdrop-dur)}
.overlay.open{backdrop-filter:blur(14px) brightness(.82);background:rgba(0,0,0,.28)}
.sheet{transform:translateY(105%);transition:transform var(--sheet-dur) var(--sheet-ease);border-radius:var(--sheet-radius) var(--sheet-radius) 0 0}
.sheet.open{transform:translateY(0)}
```

- 先给 overlay 加 `.open`，下一帧再给 sheet 加 `.open`，实现背景先行、面板后到。用 `requestAnimationFrame` 双帧或 40ms 延迟均可。

## 分模式

- **玻璃面板**：`.sheet{ background:rgba(255,255,255,.72); backdrop-filter:blur(20px) saturate(1.4) }`。格子入场给每个格子设 `transition-delay: calc(var(--i) * var(--stagger))`。
- **圆环**：SVG `circle` 用 `stroke-dasharray` + `stroke-dashoffset` 动画，JS 用同一进度值更新中心数字（`requestAnimationFrame` 插值）。
- **刻度尺**：刻度容器内一个指示点用 `left` 从起始百分比动画到今日百分比，`transition: left 650ms var(--sheet-ease)`；编号展开用 `max-height` 或 grid-rows 0fr→1fr 技巧。
- **照片抽屉**：照片容器与抽屉放在同一 flex 列布局里，抽屉 `margin-top:0` 且只有顶部圆角，天然贴合；照片放大用 `transform: scale` 或 FLIP。
- **翻面**：`.card{transform-style:preserve-3d; transition:transform 600ms}`，正反面 `backface-visibility:hidden`，背面预旋转 180deg，翻面时容器 `rotateY(180deg)`，外层加 `perspective:1100px`。
- **下拉展开**：把手绑 Pointer Events，拖动时直接设 sheet 高度（关掉 transition），松手按阈值决定目标高度再开 transition 吸附；同时监听 velocity 做快速甩动判断。

## 小程序注意

- 原生小程序 `backdrop-filter` 支持有限，玻璃面板在真机上先验一遍，不行就降级为高不透明度纯色面板 + 背景截图模糊图兜底。
- 动画优先用 CSS transition / `this.animate`（Skyline / WebView 渲染），少用 `wx.createAnimation` 做复杂编排。
