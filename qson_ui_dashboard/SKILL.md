# qson-ui-dashboard - Dashboard 风格、导航与布局交互

## 使用

- Invoke this skill when the user designs a Dashboard, 数据看板, 后台系统 or 管理系统, mentions qson_ui_dashboard, or asks for sidebar, menu, theme or admin layout guidance.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill.

- Read [the prompts file](references/prompts.md) before generating a dashboard, and read styles, navigation or layout references for the part being designed.

- Keep any value the source videos did not verify labelled as a recommended value. On-screen readings are marked as such in the references.

## Dashboard 三条总原则（第1/2/3/5/6/8/9集反复出现）

- Kill the AI default look first: no purple gradient background and no wall of equal cards. That default is the named anti-pattern across episodes 1, 3 and 9.

- Decide the color budget before any color: the base takes almost the whole page, and the single accent goes only to the current state or the action points. Interfaces should rarely color themselves when content photos can supply the color.

- Layout reserves space for interaction before cards are placed, and every page declares one visual hierarchy first, then gets described to the AI in proper design terms rather than "make it premium".

## 一、风格系统（第1/2/3/9集，17 种）

- For enterprise data backends use Minimal Business, for personal tools use Light and Airy, for monitoring and operations use Dark Tech, and for portfolios or creative teams use High Saturation Clash from episode 1.

- For strong color structure use Big Color Blocks, Glassmorphism, Fluorescent Accent, Magazine Layout, Dark Top Block or Dark Console from episode 2, each defined mainly by its color area ratio.

- For softer or content led pages use Warm Spacious, Minimal Data, Immersive Mood, Image Card Stream or Content First Cards from episodes 2 and 3.

- For mixed style and structure use Content Driven Components from episode 9, where card sizes vary with the content but spacing, radius and type levels stay unified.

- Read [Dashboard Styles](references/styles.md) for each style composition, its color ratio and its scene.

## 二、导航（第4/7集，12 种）

- Use the six sidebar patterns from episode 4: Floating Rail, Dark Heavy Base, Frosted Glass, Dual Rail, Hover Expand and Grouped with Fixed Footer.

- Use the six menu patterns from episode 7: Transparent Top Bar, Right Vertical Rail, Active Item Expands Label, Icon Rail with Page Title, Icon Rail with Hover Tips and Adjacent Quick Actions.

- Follow the episode 7 rule across all twelve: icons stay resident and text appears on demand, and only the active item is highlighted.

- Read [Dashboard Navigation](references/navigation.md) for mechanisms, sizes and selection rules.

## 三、布局与交互（第5/6/8/9集，25 项）

- Use the six reserved interaction slots from episode 5: drag reorder, in place zoom, filter linkage, hover cross highlight, sticky shrinking metrics and a master detail drawer.

- Use the six layout structures from episode 6: Hero Module, Horizontal Bands, Main plus Right Rail, Full Canvas with Floating Panels, Kanban Columns and Timeline Swimlanes.

- Use the six styled layout and interaction hybrids from episode 8 and the Asymmetric Layout plus theme token switching from episode 9.

- Read [Dashboard Layout](references/layout.md) for structures, linkage order and the theme variable rule.

## 落地顺序

- Pick the style by scene and color budget, then the navigation by entry count and screen width, then the layout by the main reading path, in that order.

- Switch themes by swapping the four tokens background, card, text and accent, and adjust text contrast together with the base color rather than only changing the background.
