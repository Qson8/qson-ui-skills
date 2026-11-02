# 实现要点 - 反馈类

- 帧数换算：画面标注 6f 约 100 ms、4f 约 65 ms（60fps），高刷屏按时间而非帧数实现。
- Flutter：撤销倒计时用线性 AnimationController 驱动进度条与自动消失；连锁递减用同一状态源加逐级延迟，不要三处各自算数字；横幅挤下用 AnimatedPadding 或 sliver 插入加高度动画让内容让位。
- Web：角标先改容器宽度（量好新数字宽度再 transition），数字用滚动列或翻牌；分割线用 IntersectionObserver 判断滚过再触发淡出，高度回收在淡出结束后做。
- 推荐时长（本库值）：提示进场 220 ms，红点展开 260 ms，横幅 300 ms。
