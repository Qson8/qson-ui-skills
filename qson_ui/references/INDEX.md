# qson-ui 家族目录

项目名：`qson-ui-skills`（GitHub 项目名）；本地家族由总索引 skill `qson_ui` 加独立分类 skill 组成（数量见下方名册），均在 `~/workspace/custom-skills/` 顶层。

结构（2026-11-01 Qson 拍板）：每个分类是真正的独立 skill 以 `qson_ui_` 前缀命名，各自有 skill.yaml 与独立的中英文触发描述、可被单独检索与单独安装；本索引只做家族名册与收纳流程，不存效果全文。机器可读注册表在 `effects.yaml`。
状态：draft 只有描述 / verified-demo 有可预览 demo / production 已在真实项目用过。

## 家族成员

- `qson_ui_popup` 弹窗：6 种高级弹窗交互（玻璃面板/圆环进度/刻度尺/照片抽屉/翻面凭证/下拉展开）。verified-demo，demo 在 `~/workspace/your_files/popup-sheets-demo/`。来源西瓜同学《高级交互》第 13 集。
- `qson_ui_layout` 布局：5 原则（错位/大图主导/非对称/层叠/留白）+ 6 配方（宽体大图列表/Hero 叠信息/黑白两档/Bento/海报转盘/叠放堆栈）。draft，来源第 3+12 集。
- `qson_ui_cards` 卡片按钮：定点弹出/按钮变形/甩动翻页/列表转网格/筛选重排/倾斜视差/长按浮起/多选模式。draft，来源第 4 集。
- `qson_ui_feedback` 提示动效：红点展开/提示队列/撤销倒计时/角标翻位/横幅挤下/未读分割线/红点连锁。draft，来源第 6 集。
- `qson_ui_components` 交互组件：搜索展开/加号面板/按钮变步进器/图标变形/顶栏收起/进度展开/刻度调节/分步选择/数据联动。draft，来源第 10+16 集；圆形扩散正主在 qson_ui_transitions，列表转网格正主在 qson_ui_cards。
- `qson_ui_transitions` 转场手势：完成反馈/勾选联动/叠卡扇形/吸附卡/惯性滚轮/圆形扩散/照片扇形/面板停靠/滑动分拣/逐行标题/波形进度/常驻圆碟。draft，来源第 14+15 集。
- `qson_ui_dashboard` 后台看板：风格系统 17 种（配色占比为纲）/导航 12 种（侧边栏+后台菜单）/布局交互 25 项（为交互留位、主次结构、主题变量切换）。draft，来源《Dashboard高级设计与交互》第 1-9 集（2026-11-01 收）。
- `qson_ui_micro` 动态图标：Morphicons 两态变形与 Lordicon 一次反馈两类，纪律为只给最常点的按钮。draft，来源《Skill实战》第 17 集。
- `qson_ui_web` Web 交互：滚动钉图/自定义光标（88px）/磁吸按钮/导航底色跟随/悬停翻色/图表跟随/悬停预览/圆形扩散换肤等 10 种。draft，来源《Skill实战》第 19 集。
- `qson_ui_principles` 审美原则：Apple 式静态规范（留白/图片主角/编辑排版/深浅一致/玻璃）+交互落地准则（联动句式/分批揭示/预载不闪空/减少动态降级）。draft，来源《Skill实战》第 20+21 集。
- `qson_ui_workflow` 方法：AI 做 UI 七步工作流+术语对齐+去模板感 9 条+编码前/交付前清单，附推荐 Skill 清单与合集 21 集主题索引。draft，来源《Skill实战》第 1/2/16/18 集精看。

## 候选与待收

- 候选目录：`candidates/xigua-catalog.md`（西瓜同学三合集 47 集全目录与分级）。
- B 类 Dashboard 已于 2026-11-01 收完（见 qson_ui_dashboard）；C 类已于 2026-11-01 收完（qson_ui_micro / qson_ui_web / qson_ui_principles / qson_ui_workflow）。西瓜同学三合集 47 集至此全部处理完毕；合集外约 50 条单集未展开，仍可能有遗漏，见候选清单说明。后续收新分类时按 qson_ui_ 前缀新建独立 skill 并登记本目录与注册表。
