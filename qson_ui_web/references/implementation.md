# Web 交互实现要点

- 滚动钉图：position sticky 或 GSAP ScrollTrigger pin；文字切换与推近进度都绑滚动进度，不要绑时间。
- 自定义光标：全局 pointermove 驱动 transform，放大态切换用 transform scale 加内容淡入；必须保留触屏与键盘操作的降级（触屏设备不隐藏系统交互反馈）。
- 导航底色跟随：一个绝对定位指示块，目标项的 offsetLeft 与 offsetWidth 驱动 left 与 width，弹性缓动用 cubic-bezier 或弹簧动画库实现。
- 圆形扩散换肤：clip-path circle 以点击点为圆心动画半径，或 View Transitions API 的截面扩散；扩散完成前锁定重复点击。
- 悬停预览图：图片容器跟随行位置做纵向插值移动，换图时先淡出旧图再淡入，避免闪烁；列表快速滑动时节流更新。
- 通用：悬停类效果一律只在有精确指针的设备启用（pointer: fine 媒体查询），移动端用点击态替代。
