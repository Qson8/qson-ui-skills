# 实现要点 - 转场手势类

- Flutter：圆形扩散用 CustomClipper 圆 clip 随动画半径增长，圆心取点击坐标；扇形用 Transform rotate 绕同一支点加逐张延迟；波形用 CustomPainter 画全量波形，亮段按进度着色，拖动用手势 x 换算进度。
- Web：圆形扩散用 clip-path circle 从触点坐标增长；分拣卡用 pointer 事件跟手，阈值建议卡宽 35% 或速度触发，下一张预缩放待场；滚轮用惯性衰减加 requestAnimationFrame，停时吸附最近刻度。
- 推荐时长（本库值）：完成反馈全链约 800 ms，扩散 450 ms，逐行每行错峰 60 ms，扇形每张错峰 45 ms。
- 手感验收：真机上松手瞬间不能有跳帧或回跳，跟手类以松手位置与动画起点一致为合格线。
