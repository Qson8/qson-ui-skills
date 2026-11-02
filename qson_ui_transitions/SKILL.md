# qson-ui-transitions - 转场与手势

## 使用

- Invoke this skill when the user asks for 转场手势 effects, mentions qson_ui_transitions, or wants this category from the qson-ui-skills family.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill, which lists all sibling qson_ui_ prefixed skills.

- Read [the prompts file](references/prompts.md) before writing code, and read the platform notes in references for the target platform.

- Keep any timing or size the source video did not verify labelled as a recommended value.

# 06 转场手势类 - 转场与手势 Transitions and Gestures

分类：transitions / 转场、手势、相册
关键词：完成反馈、勾选联动、叠卡扇形、吸附卡、惯性滚轮、圆形扩散、照片扇形、滑动分拣、逐行标题、波形进度、常驻圆碟
状态：draft（已看正片提取，无 demo）
来源：西瓜同学《高级交互》第14集（10月11日，01:51，6 项）+ 第15集（10月15日，02:26，8 项）。时长、曲线、吸附阈值视频未明示。

## 第14集 6 项

- DONE BURST 完成反馈按钮：点完成后三段连演，按钮先收缩成圆，再画出对勾，最后周围迸发小粒子。与 components 的状态链同大类不同形态，不合并。
- LINKED STATE 勾选联动：勾选一次待办，三处跟着动，进度环增长、数字滚动、顶部背景变化。一处操作要有全盘回响，但只限直接相关处。
- STACK FAN 叠卡展开：卡片叠放整齐，点开依次扇形展开，再点叠回。演示为清单组，扇形角度与张数按内容定。
- SNAP CARDS 吸附卡加画线：滑卡松手先吸附居中，吸附完成后再逐段绘制时间线。先定位后画线，顺序反了线会画歪位。
- 惯性滚轮：甩动后惯性旋转减速，吸附到刻度，过冲会弹回。减速与回弹是手感核心，匀速停住不合格。
- CIRCULAR DIFFUSION 圆形扩散转场（机制正主）：点页签后新页从触点位置圆形扩散铺满全屏。components 的菜单全屏是同一机制的菜单场景，两处互引只建这一条机制。

## 第15集 8 项

- 照片落下收拢：入场时照片从上方错落落下堆成一摞，其中一组迅速收拢成扇形，其余继续落出屏。堆叠与扇形的对比是记忆点。
- 扇形叠换相册：左右滑时旧组收走，新组带弹性重新摆开，标题与分页点同步切换，不要只换照片不换标题。
- 面板收起留主角：点关闭后主面板滑下，照片叠放大成主角，底部留一个小召回按钮，随时能把面板叫回。是收起待命，不是关闭消失。与 popup 的下拉展开是不同的面板形态，互引不合并。
- 缩略图放大成票根：点缩略图从原位等比放大成带撕口的票根（共享元素式），下方三个操作按钮延迟半拍弹出。与 popup 的翻面凭证只是同为票证造型，机制不同。
- 滑动分拣：卡叠左右滑整理，左滑丢弃，右滑保留，当前卡滑走后下一张从暗处以约 0.92 缩放待场再放大浮上。阈值正片未明示，接入时按卡宽比例自定。
- 标题逐行切换：滑动切标题时旧标题三行错开下沉，新标题逐行升起，插画同时缩小淡出。逐行错峰是关键，整块换字不合格。
- 拖波形调进度：内容压缩成波形，按住拖动时亮起段跟手移动，松手从该处继续。适合音视频与长内容定位。
- 底栏常驻圆碟：底部导航嵌一个进行态小圆碟，进行中轻轻浮动，暂停停住，点它随时回到当前进行面板。是嵌入式常驻入口，不要做成悬浮按钮。

## 通用手感原则

- 吸附三兄弟：吸附卡、刻度调节、惯性滚轮共用同一手感原则，松手后先找最近落点再弹回或吸附，但对象不同不算同一条目，参数各自调。
- 所有跟手类动效松手前必须实时跟手，松手后只做吸附与回弹，不要松手后重播一遍动画。
