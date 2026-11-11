# qson-ui-glass - 液态玻璃（真折射）

## 使用

- Invoke this skill when the user wants liquid glass, iOS 26 style glassmorphism with real refraction, glass tab bars, toggles, sliders or cards, or mentions qson_ui_glass.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill.

- Read [the glass effects reference](references/glass-effects.md) for the named patterns and [the implementation reference](references/implementation.md) before generating liquid glass UI. Use [the prompts file](references/prompts.md) when briefing an AI executor.

## 液态玻璃与毛玻璃的分界

- Liquid glass is not frosted glass. Frosted glass (CSS backdrop-filter blur) only blurs what is behind; liquid glass bends it: refraction grows toward the edges like a convex lens, the rim splits background colour into a red-blue chromatic fringe, and a 1–2px white edge line closes the shape. If a build only blurs, it is not this skill.

- The shape is an SDF rounded rectangle. Sampling offset follows the SDF gradient scaled by a falloff curve, so the centre stays almost still and the edge band bends. Internal blur stays near 1px; above 3px it collapses back into frosted glass.

- No drop shadow, ever. Shadow makes liquid glass look dirty; the white edge and rim light do the separation work.

## 四个控件（源包实测形态）

- Glass tab bar: the indicator is a second glass layer over the bar; dragged, it stretches along its velocity and squashes across it, then springs back with overshoot.

- Glass toggle: at rest the knob is white frost; pressed, it turns into a clear glass bead and grows, with different spring damping on the two axes so it lands jelly-like.

- Glass slider: while dragging, the knob scales up and becomes a magnifier, sampling the background scaled toward its centre.

- Glass card: a draggable glass plate; wherever it moves, the background under it bends. Glass only reads on a background with content.

## 纪律

- At most 5 glass shapes on one screen and multiply every pixel parameter by min(devicePixelRatio, 2); a full-screen shader runs every frame.

- Real text and icons are DOM (or native views) aligned over the canvas, never baked into the background texture.

- Adapted from the open-source LiquidGlass-Pack v2.0 by 画心人 (MIT License); see the effects reference for provenance. Parameter values in the references are the pack's stated values, not recommendations invented here.
