# 实现要点 - 布局类

- Flutter：错位用两列不同高度的瀑布流（StaggeredGrid），层叠用 Stack 加负 margin，堆栈用 Stack 加缩放与偏移模拟露边，不要用阴影堆纵深。
- Web：错位用 CSS columns 或 grid 行跨度，Bento 用 grid-template-areas 先划主角区，层叠用 z-index 加负 margin。
- 验收：一页截图转灰度后仍能一眼指出主角，指不出就是主次没拉开，先改面积比再调颜色。
- 大图比例、转盘格数等为演示值，按内容调整。静态布局无动效参数。
