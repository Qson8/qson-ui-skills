# qson-ui-layout - 高级审美布局

## 使用

- Invoke this skill when the user asks for 高级布局 effects, mentions qson_ui_layout, or wants this category from the qson-ui-skills family.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill, which lists all sibling qson_ui_ prefixed skills.

- Read [the prompts file](references/prompts.md) before writing code, and read the platform notes in references for the target platform.

- Keep any timing or size the source video did not verify labelled as a recommended value.

# 02 布局类 - 高级审美布局 App Layouts

分类：layout / 布局、排版
关键词：高级布局、错位、大图主导、非对称、层叠、留白、Bento、Hero、布局排版
状态：draft（已看正片提取，无 demo）
来源：西瓜同学《高级交互》第3集（9月2日，02:27）+ 第12集（9月28日，02:04）
说明：布局为静态结构，无手势与动效参数，视频未明示动效时长。分两层用：先用第3集 5 原则定结构，再用第12集 6 配方落具体页面。

## 第一层 5 个结构原则（第3集）

- STAGGER 卡片错位：两列卡片高度故意不一、左右错开，用高度差打破对齐轴，制造层次。反面是等宽等高三边对齐的表格感。
- SCALE 大图主导：让一张主图占到约半屏，次要文字压到很小，主图与最小块的比例拉到远大于 1.4 倍。反面是所有块一样大、图只占两成高。
- ASYMMETRY 非对称：主卡吃主位、次卡只露半截出画，用主次悬殊代替 1:1 均分，靠出画制造张力。
- OVERLAP 层叠：图、卡、标签前后压叠，用遮挡关系做纵深，不要所有元素隔缝平铺。关联第12集 HERO OVERLAY 与 STACKED DECK。
- WHITESPACE 留白：删元素、放大间距，整屏可以大半是空的，一屏只讲一件事。反面是 14 个元素挤一屏、留白不足两成。

## 第二层 6 个具体配方（第12集）

- Wide Caps Image List 宽体标题大图列表：两行宽体大写标题，圆角搜索栏配黑色圆形筛选钮，一排分类，每项一整张 16:10 大图，信息排图下一行。适合内容流首页。
- HERO OVERLAY 大图头块叠信息：大图头块上叠倒计时与按钮，下接白底天气条、日期块，温度用一条曲线连起。适合旅行、行程类页。
- BLACK HERO 黑白两档：浅灰打底，黑色块当主角配白字，分类选中态翻黑，下方黑色横幅。只用黑白拉主次，适合工具与效率类。
- BENTO GRID 大色块网格：一个亮色大块放核心数字当主角，浅灰底，配圆环完成度、超粗标题和四列小格。适合习惯、统计、仪表页。
- POSTER DIAL 海报大字加半圆转盘：方块大字标题，半圆转盘选一项（每格 30 度），超大数字配黑色主按钮，底栏撞色。适合专注、计时类页。
- STACKED DECK 叠放堆栈：细长宽体标题，分类，大图以堆栈叠放，配页码示意层数。适合卡片组、相册入口。

## 使用规则

- 一页只用一个主原则加一个配方，不要错位加层叠加非对称全上。
- 先定主角再排其余：主图或主数字的面积至少是次要块的 3 倍，否则 SCALE 与 ASYMMETRY 都不成立。
- 留白是兜底：元素超过约 10 个先删再排版，不要靠缩小字号塞下。
