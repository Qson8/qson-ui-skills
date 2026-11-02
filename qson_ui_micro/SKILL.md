# qson-ui-micro - 动态图标与微交互

## 使用

- Invoke this skill when the user wants animated icons, icon state transitions or micro interaction feedback, or mentions qson_ui_micro.

- This is a standalone skill in the qson-ui-skills family. The family index is the `qson_ui` skill.

- Read [the animated icons reference](references/animated-icons.md) for the two library patterns and [the prompts file](references/prompts.md) before generating icon animation.

## 两类动态图标（第17集）

- Use morphing icons for two states that switch back and forth: the icon deforms from one state into the other instead of hard cutting. Pairs include circle to check, plus to close, play to pause, sun to moon and send to sent.

- Use feedback icons for one shot operation feedback: the icon plays one built in animation and the motion itself is the message, suited to empty states and completion moments, with stroke color following the page accent.

- Read [Animated Icons](references/animated-icons.md) for trigger rules and placement discipline.

## 选型纪律

- Two way switching gets a morph, one time feedback gets a played animation, and static information gets no motion at all.

- Animated icons go only to the most tapped buttons. Never spread animated icons across a whole page.
