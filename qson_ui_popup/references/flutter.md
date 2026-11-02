# Flutter 实现要点

## 底座

- 用 `showModalBottomSheet` 的 `isScrollControlled: true` + 自定义 `AnimationController`，或直接用 `showGeneralDialog` 自控 backdrop blur。
- 背景模糊：`BackdropFilter(filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18))` 套在 barrier 上，barrier 透明度与 blur 用同一 controller 的 0→0.3s 区间驱动。
- 面板升起：`SlideTransition` 或 `AnimatedPositioned`，曲线 `Curves.easeOutCubic` 近似 cubic-bezier(0.22,1,0.36,1)，时长 420ms。需要回弹时换 `Curves.easeOutBack` 并把 overshoot 控制在 0.6 以内避免弹跳感过强。

## 分模式

- **玻璃面板**：面板 `Container` 用半透明色 + `ClipRRect` + `BackdropFilter`。格子用 `StaggeredGrid` 思路手动实现：每个格子一个 `AnimationController` 延迟，或一个主 controller + `Interval(index * 0.05, ...)`。
- **圆环**：`CustomPainter` 画 arc，`TweenAnimationBuilder<double>` 从 0 到目标值，painter 与数字 `Text` 读同一个动画值，保证同步计数。数字取整显示。
- **刻度尺**：一条 `CustomPainter` 横线+刻度，扫动用动画值控制高亮刻度位置与今日圆点 x 坐标；编号展开用 `AnimatedSize` + `AnimatedOpacity`。
- **照片抽屉**：照片用 `Hero` 做共享元素放大；抽屉 `DraggableScrollableSheet` 的 initialChildSize 对准照片下沿，或用 `Stack` 让抽屉 top 与照片 bottom 严格相接（同一约束计算，不要写两个独立高度凑）。
- **翻面**：`AnimatedBuilder` + `Transform` 做 `rotateY`，加 `Matrix4.identity()..setEntry(3,2,0.001)` 透视；角度 > pi/2 时切换子 widget 并对背面再旋转 pi 防止镜像。
- **下拉展开**：`DraggableScrollableSheet` 自带跟手与吸附，`snap: true` + `snapSizes: [0.38, 0.78]` 正好对应矮态/展开态；把手只是视觉元素，拖拽由 sheet 本身承接。

## 关闭与手感

- 关闭统一走 controller reverse，保证退场是进场的镜像而不是突然消失。
- 拖拽关闭阈值与展开吸附阈值分开设置，避免用户想展开却误关。
