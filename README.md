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

## 如何使用

本库有两种安装方式：人工安装（自己动手放文件夹）和 Agent 安装（把一句话发给你的 AI 助手，它自己装好）。任选其一，装完的使用方法相同。

### 方式一：人工安装

1. 克隆或下载本仓库到本地任意目录：

```bash
git clone https://github.com/Qson8/qson-ui-skills.git
```

2. 把 `qson_ui*` 文件夹复制到你所用工具的 skills 目录。全部复制是完整家族，只复制其中几个就是只装那几个分类，可以混搭。常见工具的目录：

| 工具 | skills 目录 |
| --- | --- |
| Claude Code | `~/.claude/skills/`（全局）或项目内 `.claude/skills/` |
| Muse | `~/workspace/custom-skills/` |
| Codex 等支持 Agent Skills 的工具 | 该工具文档指定的 skills 目录（如 `~/.codex/skills/`，以工具当前文档为准） |

```bash
# 示例：把全部家族装进 Claude Code
cp -r qson-ui-skills/qson_ui* ~/.claude/skills/
# 示例：只装弹窗一个分类
cp -r qson-ui-skills/qson_ui_popup ~/.claude/skills/
```

3. 验证安装：重启或刷新工具后问一句“qson_ui 里有什么效果”，能列出分类即装好；或直接提一个带关键词的需求，如“做一个高级弹窗”，观察是否命中对应 skill。
4. 更新：仓库有新版本时，在克隆目录 `git pull`，再重复第 2 步覆盖复制即可。

### 方式二：Agent 安装（推荐）

把下面这段话原样发给你的 AI 编程助手（Claude、Codex、WorkBuddy 等均可），它会自己完成安装并验证：

```text
请安装 qson-ui-skills 这套 UI 设计效果 skill 家族：
1. 克隆 https://github.com/Qson8/qson-ui-skills 到本地一个稳定目录；
2. 把仓库里的 qson_ui 开头的全部文件夹，整体复制到你当前环境的 skills 目录中（用你所在工具的规范目录，不要改文件夹名和内部结构）；
3. 逐个检查每个文件夹都有 skill.yaml 和 SKILL.md；
4. 用“高级弹窗”“Dashboard 侧边栏”“圆形扩散 扇形”各检索一次，确认能命中对应 skill；
5. 最后告诉我装好了哪几个 skill、分别管什么。
```

### 装完怎么用

装好后不需要记命令，用自然语言提需求就会按关键词触发，也可以点名调用：

| 你想做的事 | 这样说 | 命中的 skill |
| --- | --- | --- |
| 做弹窗 | “做个高级弹窗，玻璃面板浮起的那种” | `qson_ui_popup` |
| 排首页 | “用高级布局排这个首页，要有主次” | `qson_ui_layout` |
| 改后台 | “这个 Dashboard 侧边栏怎么改才高级” | `qson_ui_dashboard` |
| 加图标动效 | “模式切换的图标要会变形” | `qson_ui_micro` |
| 查全部库存 | “qson_ui 里都收了什么” | `qson_ui` 总索引 |
| 怕 AI 做得模板化 | “按 AI 做 UI 的工作流来，先对齐术语再动手” | `qson_ui_workflow` |

### 没有 Skill 机制的工具

打开目标分类文件夹，把 `SKILL.md` 的效果说明与 `references/prompts.md` 里的描述词贴给 AI 当需求描述即可，效果、顺序与数值都在里面，不依赖 Skill 机制。

### 继续收纳新效果

把视频链接或效果描述发给你的 AI 助手并说“收进 qson-ui”：新效果进对应分类的 references 并在总索引注册表登记；新分类按 `qson_ui_` 加短名新建独立 skill，命名与结构规范见总索引 `qson_ui` 的 SKILL.md。

## 本地位置

工作副本在 `~/workspace/custom-skills/qson_ui*`（日常收纳改那边）；本目录是发布仓库，内容为工作副本的同步快照，发布前先从工作副本同步一次再提交，避免两份漂移。

## 收纳纪律

- 新效果进已有分类：写进该分类 skill 的 references，并在总索引注册表登记。
- 新分类：按 `qson_ui_` 加短 slug 新建独立 skill，描述必须含中英文真实触发词并实测检索命中。
- 来源必须记录作者、链接与日期；原视频未明示的时长与尺寸一律标“推荐值”，不冒充原值。
- 效果用自己的话复述机制，不抄原文长句。
