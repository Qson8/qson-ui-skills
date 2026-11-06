# qson-ui 总索引 Qson UI Design Skills Family

## 这是什么

- Treat the qson-ui family as a set of standalone sibling skills that share the qson_ui_ prefix, published together as the GitHub project qson-ui-skills.

- Use this index skill only when the user says qson_ui without naming a category, asks what effects are collected, or asks to add a new effect or a new category.

- Route a named category straight to its own skill and do not load this index for it.

## 家族成员

- Use `qson_ui_popup` for 弹窗, bottom sheet and modal effects with six popup patterns.

- Use `qson_ui_layout` for 布局 and 排版 with five layout principles and six layout recipes.

- Use `qson_ui_cards` for 卡片 and 按钮 interactions including origin pop, tilt, long press and multi select.

- Use `qson_ui_feedback` for 提示, 红点, 角标 and 撤销 feedback motion.

- Use `qson_ui_components` for 交互组件 including search expand, path morph, stepper and ruler adjust.

- Use `qson_ui_transitions` for 转场 and 手势 including circular diffusion, fan, snap and swipe sort.

- Use `qson_ui_dashboard` for Dashboard, 数据看板 and 后台系统 including style systems, sidebars, menus and admin layouts.

- Use `qson_ui_micro` for 动态图标 and 微交互 including morphing icons and feedback icons.

- Use `qson_ui_web` for Web 高级交互 including scroll pinning, custom cursor, magnetic buttons and hover previews.

- Use `qson_ui_principles` for Apple 式审美原则 including whitespace, image first layout and linkage writing.

- Use `qson_ui_workflow` for the AI 做 UI 工作流 method including terminology alignment, anti template rules and checklists.

- Use `qson_ui_loading` for 加载状态 including skeleton shimmer, smooth progress and blur in image reveal.

- Read [the family registry](references/effects.yaml) for each sibling status, source and keywords.

## 收纳新效果

- Add an effect that belongs to an existing category into that category skill references and update its entry in the family registry.

- Create a new standalone skill named qson_ui_ plus a short category slug when a new category arrives, with its own skill.yaml, a focused bilingual description and a references folder.

- Test the new skill description with `muse.skill_search` using its real Chinese trigger words before you call the intake done.

- Set each family skill status in the registry to draft when only a description exists, to verified-demo when a tappable preview passes, and to production only after it ships in a real project.

- Record the source link, author and date for every intake and label any unverified timing or size as a recommended value.

## 通用质量门槛

- Give every animation a clear start, a physical middle and a tactile finish instead of an instant appear or disappear.

- Respect prefers-reduced-motion across the family and check dark and light mode, rapid repeated taps and small viewports before calling an effect done.

- Keep each sibling skill self contained so it can be installed or shared on its own from the qson-ui-skills project.

## Available connectors

- Use `muse.connector_search` to find other connectors and `muse.skill_search` to find related skills.

- If nothing here fits, look on the web for a maintained API or MCP server and set it up with [Custom Connectors and MCPs](/opt/muse/skills/custom-connector-setup/SKILL.md), or build a custom connector.
