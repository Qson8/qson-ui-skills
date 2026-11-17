# qson-ui-feedback - 高级提示动效

## 使用

- Invoke this skill when the user asks for 提示动效 effects, mentions qson_ui_feedback, or wants this category from the qson-ui-skills family.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill, which lists all sibling qson_ui_ prefixed skills.

- Read [the prompts file](references/prompts.md) before writing code, and read the platform notes in references for the target platform.

- Keep any timing or size the source video did not verify labelled as a recommended value.

# 04 反馈类 - 高级提示动效 Feedback Motion

分类：feedback / 提示、通知、状态反馈
关键词：红点、提示队列、撤销倒计时、角标、横幅、未读分割线、红点连锁、定点起源、完成态、数值联动、发布反馈
状态：draft（已看正片提取，无 demo）
来源：西瓜同学《高级交互》第6集，9月12日，01:32。时长与曲线视频未明示，帧数标注（6f、4f）为画面原有标注，换算毫秒按项目帧率处理。补收：西瓜同学《高级交互》第20集，2026-11-17，02:35（抖音 https://www.douyin.com/video/7708983103909399834 ），新增 2 个模式；该集未展示毫秒参数卡片，补收条目不带视频原值。

## 总原则

提示层不应抢戏：适时出现、适时消失，每条提示都要有来路、有去向，处理掉哪一条用户要能看出来。

## 8 个模式

- DOT 红点展开：点红点后提示内容从红点位置展开，不要凭空淡入，来路即信任。
- QUEUE 提示队列：提示进场带小位移加淡入，进场本身要看得见；多条提示依次排队出现，不要同时涌入挤成一团。
- UNDO 撤销条：删除后出现带可见倒计时进度的撤销条，走完才消失；被处理项的红点沿原路缩回再散掉并让那一行亮一下，不要原地淡出，否则用户不知道处理的是哪条。删除动画不要倒放回原位。
- BADGE 角标：数字变化时容器宽度先撑开（约 6 帧在前），数字随后翻位。宽度与数字一起变会把旁边图标挤歪一帧。
- BANNER 横幅：横幅从状态栏方向挤下来，页面内容跟着下移让位，是推开不是覆盖浮层。
- ORIGIN 新建面板定点起源：点加号后新面板从所按点长出，列表让位，新内容落进列表有来路。与 card-button-interactions 的 POP 为同一机制，此处是面板载体，正主互引不重复建条。
- UNREAD 未读分割线：分割线在滚动经过前保持位置不动，用户滚过它才开始变淡；淡出与高度回收要解耦，先淡再收，避免列表突然上跳一格显得像故障（演示处理为淡掉后收高度，接入时以不跳变为验收标准）。
- SYNC 红点连锁：处理一条未读后，行、分组、顶部三层数字依次减少，三层错开约 4 帧响应，因果才读得出；三层同时跳用户会怀疑数字对不上。

## 第 20 集补收 2 个模式

- COMPLETE-UNDO 完成态与撤销：点操作按钮后，按钮原地变成带对勾的完成态，同时出现撤销入口，相关数值同步变化（演示：浇水后湿度 38%→78%）。要点是状态反馈的一致性：按钮完成态、撤销入口、数值变化三处随同一次操作一起给，不要只做一个按钮动画。与 UNDO 的区别：UNDO 是删除后带倒计时的撤销条，此处是操作完成后的确认态加可撤销；与 components 的 BUTTON CHAIN 的区别：那处是按钮内走完状态链，此处多了撤销入口与数值联动。
- COMPOSE-LOOP 输入与发布反馈：点加号后编辑区在原位展开（不是跳新页），输入时字数实时更新，发布按钮随输入状态变化（空输入不可发、有内容可发）；发布后新内容直接出现在信息流顶部。输入、提交、结果形成完整闭环。与 ORIGIN 同为定点起源机制，此处是编辑器载体；与 components 的搜索展开同为原地展开，此处多了字数与发布状态链。

## 使用规则

- 同一时刻提示不超过一类在动，队列负责串行。
- 所有计数变化都要让用户能追溯是哪一条引起的，连锁错峰是为此服务，不是装饰。
