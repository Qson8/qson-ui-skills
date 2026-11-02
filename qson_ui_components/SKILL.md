# qson-ui-components - 交互组件

## 使用

- Invoke this skill when the user asks for 交互组件 effects, mentions qson_ui_components, or wants this category from the qson-ui-skills family.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill, which lists all sibling qson_ui_ prefixed skills.

- Read [the prompts file](references/prompts.md) before writing code, and read the platform notes in references for the target platform.

- Keep any timing or size the source video did not verify labelled as a recommended value.

# 05 组件类 - 交互组件 Interaction Components

分类：components / 交互组件
关键词：搜索框展开、图标变形、步进器、顶栏收起、进度展开、刻度调节、分步选择、数据联动、标签指示条
状态：draft（已看正片提取，无 demo）
来源：西瓜同学《高级交互》第10集（9月23日，02:04，10 项）+ 第16集（10月17日，01:58，4 项）。时长、曲线、阈值视频未明示，演示帧数值不作通用参数。

## 第10集 10 项

- CIRCLE TO FIELD 搜索展开：点右上角圆形搜索钮，圆横向展开成输入框，光标自动就位。形态过渡，不是图标消失换一框。
- 加号展开面板：点悬浮加号展开成操作面板，关闭自然收回。材质未确认，不要默认当玻璃面板。
- BUTTON CHAIN 提交状态链：点提交后按钮内依次走加载、完成、结果，一条链演完，不要单次变色了事。与 transitions 的完成反馈按钮同大类不同形态：此处是按钮内文案状态链，那处是收缩画勾加粒子，不合并。
- PATH MORPH 图标变形：汉堡三线变关闭叉（中线缩没，上下线各转 45 度），播放三角变暂停两竖，全程只插值顶点，不切图、不交叉淡入。
- 标签指示条：切标签时指示条先拉伸向新位置再回缩落位，有跟随的弹性感，不要瞬移或匀速滑。
- 按钮变步进器：点加入后按钮原地展开成数量步进器，数量归零自动恢复成原按钮。
- 列表展开详情：点列表项就地展开详情，其余项顺势下移让位，不要跳详情页。与第16集进度展开同族：此处是列表行内展开，那处是摘要面板展开。
- 列表切换网格：与 card-button-interactions 的 LAYOUT 为同一效果，此处只引用不重述。
- COLLAPSING BAR 顶栏收起：滚动时顶栏按滚动进度连续收成图标，回滚再展开，按进度不是过阈值二值跳变。
- CIRCULAR REVEAL 菜单全屏：点菜单后圆形遮罩从按钮处扩散铺满全屏，菜单项随后依次出现。与 transitions 的圆形扩散转场为同一机制两个场景，机制正主在 transitions，此处是菜单场景。

## 第16集 4 项

- 进度展开（按需展开）：平时只露摘要（预计时间、联系人），点追踪后路线区高度展开，三个节点进度依次填充，再点收起，按钮文案同步切换。信息按需给，不要默认全展开。
- 刻度滑动调节：中央指针固定，用户拖动刻度尺改参数，数值、预览效果与外圈指示实时联动，松手吸附最近刻度。与 popup-sheets 的刻度扫到今天元素相同、交互相反：那处是自动扫动展示，此处是人拖动调值，互引不合并。
- 分步兴趣选择：一问一屏分步选兴趣，一次只处理一个问题。步数、回退与选中样式正片未可靠读出，接入时自行定并标注为自定。
- 数据面板联动：点一条记录，面板数字滚动更新；切换单位或显隐时所有相关处同步变化，一处操作全盘联动，不要局部刷新留下不一致。

## 通用规则

- 组件变形的核心是同一元素连续变，不要用消失加出现冒充变形。
- 联动类组件先建单一数据源，视觉联动只是它的投影。
