# 实现要点 - 组件类

- Flutter：图标变形用 CustomPainter 按进度插值路径端点，或用 AnimatedIcon 先顶上；顶栏收起用 SliverAppBar 的 flexibleSpace 按 shrinkOffset 算进度；刻度调节用横向 ListView 加固定中心指针，scroll end 时 animateTo 最近刻度位。
- Web：图标变形用 SVG path 的 d 插值（同顶点数同命令才可直插）；顶栏用 scroll 监听把进度写 CSS 变量；步进器用宽度 transition 加内容交叉，注意归零回退的状态机。
- 推荐时长（本库值）：搜索展开 300 ms，指示条 280 ms 带回弹，进度展开 350 ms，节点填充间隔 90 ms。
- 分步选择正片细节最少，接入前按自己产品补回退、进度与跳过规则，不要当已验证条目用。
