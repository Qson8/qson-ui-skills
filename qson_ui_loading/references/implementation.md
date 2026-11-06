# 加载状态实现要点（本库建议，非视频原述）

- 扫光骨架屏：骨架与真实布局共用同一套布局代码，只换数据源为空占位，避免内容到达时跳位；扫光用一个斜向渐变层做 translateX 循环动画（transform + opacity 之外不动画）。Web 用 CSS animation 1500ms linear infinite；Flutter 用 AnimationController repeat + ShaderMask 或渐变容器平移。
- 平滑进度条：进度值变化时对显示值做 600ms 补间（Web 用 CSS transition on width/transform，Flutter 用 TweenAnimationBuilder），真实进度回退或长时间不动时停在当前值，不编造前进。
- 模糊到清晰：Web 用 filter: blur(14px) → blur(0) 过渡 700ms，图片需先解码完成再开始过渡，避免过渡中途才出图；Flutter 用 ImageFiltered + Tween 或 BackdropFilter 只作用于图片本体。低清缩略图先行时可与模糊衔接：缩略图放大填充并模糊，清晰图就绪后同帧完成锐化。
- 组合页：骨架、进度、图片入场各自独立计时，互不阻塞；内容到达哪一段就落定哪一段，不要等全页齐了再一起揭开（那正是反模式的「突然整页蹦出来」）。
- 降级：减少动态偏好开启时，扫光改为静态骨架、模糊入场改为直接显示、进度条保留数值变化但去掉补间。
- 无障碍：加载超过约 10 秒要给文字进度或取消入口，三式都不解决「无限等待」本身。
