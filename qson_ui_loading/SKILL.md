# qson-ui-loading - 加载状态与骨架屏

## 使用

- Invoke this skill when the user wants loading states, skeleton screens, progress indication or image reveal motion, or mentions qson_ui_loading.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill.

- Read [the loading states reference](references/loading-states.md) for the three named patterns and [the prompts file](references/prompts.md) before generating loading UI.

## 三个有名字的加载效果（动廊图鉴第1集）

- Skeleton shimmer for content that has not arrived yet: grey placeholder blocks shaped exactly like the real content, with one translucent light band sweeping left to right in a 1500ms loop. Animate transform only.

- Smooth progress for work with a real percentage, such as upload or publish: the bar follows the real progress and eases between values over 600ms instead of jumping.

- Blur in for images: the image starts at 14px blur and sharpens over 700ms, which reads softer than a plain fade in.

- The three combine on one page: skeleton for the list, smooth progress for the upload, blur in for each image as it lands.

## 纪律

- Never ship the AI default: a lone centered spinner followed by content suddenly dumped in. Give structure first, then content.

- Name the pattern when asking an AI to build it. The name carries the spec: skeleton shimmer, smooth progress, blur in.

- Read [Loading States](references/loading-states.md) for per-pattern rules and which values the source video actually stated.
