# qson-ui-skills

Qson 的个人 UI 设计效果 skill 家族：把短视频与实战里验证过的高级交互效果，整理成可被 AI 助手直接调用的独立 skill。

## 结构

家族采用扁平独立加前缀命名：每个分类是一个真正的独立 skill（各自有触发描述、可单独检索、单独安装），总索引负责名册与收纳流程。发布到 GitHub 时，把下列文件夹原样放进本仓库根目录即可。

| Skill | 分类 | 状态 |
| --- | --- | --- |
| `qson_ui` | 总索引与收纳流程 | active |
| `qson_ui_popup` | 高级弹窗交互 ×6 | verified-demo |
| `qson_ui_layout` | 高级审美布局 原则×5 配方×6 | draft |
| `qson_ui_cards` | 卡片与按钮交互 ×8 | draft |
| `qson_ui_feedback` | 高级提示动效 ×8 | draft |
| `qson_ui_components` | 交互组件 ×12 | draft |
| `qson_ui_transitions` | 转场与手势 ×14 | draft |
| `qson_ui_dashboard` | Dashboard 风格×17 导航×12 布局交互×25 | draft |
| `qson_ui_micro` | 动态图标 两类 | draft |
| `qson_ui_web` | Web 高级交互 ×10 | draft |
| `qson_ui_principles` | Apple 式审美原则 静态规范+交互准则 | draft |
| `qson_ui_workflow` | AI 做 UI 工作流 方法+清单 | draft |

状态定义：draft 只有描述 / verified-demo 有可预览 demo 并目检通过 / production 已在真实项目用过。

## 本地位置

工作副本在 `~/workspace/custom-skills/qson_ui*`（日常收纳改那边）；本目录是发布仓库，内容为工作副本的同步快照，发布前先从工作副本同步一次再提交，避免两份漂移。

## 收纳纪律

- 新效果进已有分类：写进该分类 skill 的 references，并在总索引注册表登记。
- 新分类：按 `qson_ui_` 加短 slug 新建独立 skill，描述必须含中英文真实触发词并实测检索命中。
- 来源必须记录作者、链接与日期；原视频未明示的时长与尺寸一律标“推荐值”，不冒充原值。
- 效果用自己的话复述机制，不抄原文长句。
