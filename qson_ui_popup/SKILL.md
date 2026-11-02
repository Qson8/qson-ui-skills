# qson-ui-popup - 高级弹窗交互

## 使用

- Invoke this skill when the user asks for 高级弹窗 effects, mentions qson_ui_popup, or wants this category from the qson-ui-skills family.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill, which lists all sibling qson_ui_ prefixed skills.

- Read [the prompts file](references/prompts.md) before writing code, and read the platform notes in references for the target platform.

- Keep any timing or size the source video did not verify labelled as a recommended value.

# 01 弹窗类 - 6种高级弹窗交互 Popup Sheets

分类：popup / 弹窗、弹层、Bottom Sheet、Modal
关键词：弹窗交互动画、高级弹窗、玻璃面板、圆环进度、刻度尺、照片抽屉、翻面凭证、下拉展开、毛玻璃、底部弹层
状态：verified-demo（已做可预览 demo，未在生产项目验证）
来源：西瓜同学《App和小程序的高级交互》第13集，2026-10-07，视频号链接见 INDEX

## 通用原则 三段式

- 背景先变：背景先模糊或变暗 200 到 300 ms，比面板早 30 到 50 ms 启动。
- 面板后到：面板用升起、翻面或拖拽展开等物理动作进场，不要居中缩放淡入。
- 内部再动：面板落定后，数字、圆环、格子、按钮按 40 到 70 ms 间隔错峰动起来，总时长控制在 600 ms 内。
- 手感收尾：落定带 ease-out 或轻微回弹，拖拽松手按阈值吸附。
- 降级：prefers-reduced-motion 时把错峰、扫动、翻面降为短淡入。

## 通用参数基线 推荐值非源视频原值

- 底部面板升起 380 到 450 ms，曲线 cubic-bezier(0.22, 1, 0.36, 1)
- 圆环绘制 700 到 900 ms，中心数字同步计数
- 刻度扫动 550 到 800 ms，到达今天时高亮脉冲一次
- 卡片翻面 550 到 650 ms，透视 1000 到 1200 px，90 度切换正反面
- 下拉吸附 250 到 350 ms

## Pattern 1 玻璃面板浮起 Frosted Glass Sheet

- 触发卡片点击后从底部升至视口高度的 72% 到 84%
- 面板半透明加 backdrop blur 18 到 24 px，顶部圆角 24 到 28 px，柔和阴影
- 12 个格子在面板落定后逐个填充或打勾，不要整片同时淡入
- 点背景或关闭按钮关闭，格子快速反向淡出后面板下滑，背景恢复清晰
- 避坑：不透明白板会破坏玻璃感

## Pattern 2 圆环进度弹出 Ring Progress Sheet

- 深色面板从底部升起，中心只放一个圆环和一个大数字
- 圆环沿圆周画到目标弧度，数字用同一控制器同步递增，不要直接跳终值
- 刻度选项在圆环过半后淡入
- 关闭时圆环回缩再下滑，不要瞬间消失

## Pattern 3 刻度尺扫到今天 Tick Ruler Sheet

- 票据造型入场，带齿孔、虚线或缺口边缘，等宽字体显示日期与编号
- 刻度从起始日连续扫到今天并高亮停住
- 完整编号默认隐藏，点显示按钮后才展开
- 避坑：刻度是展示动画，不要做成可拖动，否则用户会以为日期可改

## Pattern 4 照片抽屉贴合 Photo Drawer Sheet

- 先把被点照片放大铺满宽度并落定，再推抽屉
- 抽屉上推至与照片下沿完全贴合，无缝隙、无悬浮外边距，只有顶部圆角
- 进度、文案、主按钮都在抽屉内部随抽屉到位，不要浮在照片上
- 关闭先收抽屉，再把照片缩回原卡片

## Pattern 5 点击翻面凭证 Flip Voucher

- 卡片原地绕 Y 轴翻面，不要新开页、不要左右滑代替翻转
- 90 度时切换正反面，正面放详情，背面放入场或核销信息，背面更简洁
- 再点一次翻回，全程背景保持模糊
- 避坑：平面滑动会被读成页面导航，翻面才会被读成同一张卡转面

## Pattern 6 下拉展开面板 Pull Down Reveal

- 先弹矮态约 38% 高，只露摘要、拖动把手和一个关键数字
- 把手拖拽时面板高度实时跟手，松手按距离或速度阈值吸附到矮态或展开态约 78% 高
- 完整信息在展开过程中依次出现
- 保留关闭按钮和下滑关闭兜底

## 实现检查

- 用一个可复用面板壳统一管背景、升起、圆角、拖拽和关闭，各模式只换内部内容
- 背景、面板、内部错峰用同一时间线或同一控制器驱动
- 测关闭、动画中、完全打开三态，快速连点不能叠出两个弹层
- 测小屏、深色和浅色模式下文字对比度，Web 版补焦点陷阱、Esc 关闭和关闭按钮标签
