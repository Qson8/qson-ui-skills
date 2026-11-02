# qson-ui-web - Web 高级交互

## 使用

- Invoke this skill when the user builds web page interactions for desktop pointers, or mentions qson_ui_web.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill.

- Read [the web interactions reference](references/web-interactions.md) for mechanisms and [the prompts file](references/prompts.md) before writing code.

## 总原则（第19集）

- Every clickable element on the page must answer a hover or a dwell: cursor, buttons, navigation and images all respond to the operation instead of sitting static.

## 10 种 Web 交互（第19集）

- Scroll Pinning for a hero image that stays while side text cycles and the image pushes in on its focal area.

- Custom Cursor that grows into an action disc over large images and shrinks back over buttons, Magnetic Buttons that pull toward the pointer and snap back, and Icon Buttons that expand their label on hover.

- Nav Indicator Follow where one rounded background block glides to the hovered item with spring easing and returns to the active item on leave, and Hover Invert Fill where color spreads from the corner arrow to cover a feature block while text inverts.

- Stepped Slider that ticks value by value and snaps on release, a Chart Scrub where a guide line and value follow the pointer across bars, Hover Preview Images that float beside a text list row, and Circular Theme Reveal that expands the new theme from the click point.

- Read [Web Interactions](references/web-interactions.md) for the sequence and marked values of each pattern.
