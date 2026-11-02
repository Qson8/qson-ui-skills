# qson-ui-cards - 卡片与按钮交互

## 使用

- Invoke this skill when the user asks for 卡片按钮交互 effects, mentions qson_ui_cards, or wants this category from the qson-ui-skills family.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill, which lists all sibling qson_ui_ prefixed skills.

- Read [the prompts file](references/prompts.md) before writing code, and read the platform notes in references for the target platform.

- Keep any timing or size the source video did not verify labelled as a recommended value.

# 03 卡片按钮类 - 卡片与按钮交互 Card Button Interactions

分类：cards / 卡片、按钮
关键词：卡片弹出、定点起源、按钮变形、甩动翻页、列表转网格、筛选重排、倾斜视差、长按浮起、多选模式
状态：draft（已看正片提取，无 demo）
来源：西瓜同学《高级交互》第4集，9月5日，02:50。除长按 400 ms 为视频明示外，时长与曲线视频未明示，条目中数字为演示帧读数或本库推荐值。

## 8 个模式

- POP 卡片弹出（定点起源）：点按钮后卡片从按钮圆心生长放大，到位略冲过头再收回。关键是 transform-origin 钉在触发点，内容做反向缩放补偿并延迟淡入，避免文字被拉伸。反例是从屏幕中心淡入。关联 feedback-motion 的 ORIGIN，同机制不同载体。
- COMMIT 按钮变化：提交后宽按钮先收成圆，圆环转两圈，再撑开成结果条。形态连续变化，不要直接换一个成功页。
- FLING 甩动翻页：翻几页由位移和松手速度共同决定，拖过半松手翻一张，快甩翻两张，相邻卡按距离连续缩放。反例是只按位移过半判断。实现时速度权重需实测调，本库不照搬演示公式数值。
- LAYOUT 列表转网格：切换时每张卡的位置、尺寸、圆角按同一进度插值走到新布局，卡内图、标题、价签各有自己的起止位，标题可由两行收成一行。不要两套布局交叉淡化，会重影。与 interaction-components 的列表切换网格为同一效果，此处为正主，后者只做引用。
- FILTER 筛选重排：被筛掉的缩小淡出，留下的用弹簧滑到新位，新卡从空槽长出。三类卡三种退场与进场，不要整列闪烁重绘。
- TILT 券卡倾斜：手指按住时只有被按的这一张跟手倾斜，卡面图案以约 1.35 倍位移产生视差厚度，边缘高光随倾斜移动（演示读数旋转约 8 到 10 度）。整页倾斜是错误做法。此场景可带真实投影。
- PEEK 长按浮起：长按 400 ms（视频明示）后卡片浮起，进入可操作或可取消状态。阈值不要短于约 350 ms，避免和普通点击与滚动打架。
- SELECT 多选模式：长按一张卡整页进入多选态，所有卡同时缩一档，出现勾选圈，底部操作条比卡片变形晚约 6 帧入场。全页只由一个 mode 状态驱动，同时动会看不出主次。

## 通用规则

- 卡片动画先回答三个问题：从哪来、变成什么、去哪了。答不出就不要加动效。
- 同屏卡片动效只保留一个主角动作，其余用错峰或静止衬托。
