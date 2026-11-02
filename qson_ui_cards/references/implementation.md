# 实现要点 - 卡片按钮类

- Flutter：定点起源用 Transform origin 对齐按钮中心加 ScaleTransition；列表转网格用同一批 widget 做 Hero 或 AnimatedPositioned 插值，不要换树交叉淡化；倾斜用 Listener 取本地坐标算 rotateX/rotateY 加透视。
- Web：定点起源用 transform-origin 设为按钮中心坐标；翻页速度用 pointerup 的位移与时间算 velocity；多选操作条延迟用 transition-delay 实现约 6 帧错峰。
- 推荐时长（本库值）：弹出 320 ms，按钮变化全链约 900 ms，倾斜跟手无过渡、回正 200 ms，浮起 180 ms。
- 长按 400 ms 为视频明示值，可直接用。其余演示帧读数只说明演示状态，不当通用参数。
