### Permanent branches (a.k.a. tags)

There are lots of ways to move a branch.  This makes them great for tracking a moving target, such as progress on a new feature, but unreliable for keeping track of a fixed instant in time, such as a release.

Which is why git has tags.  Tags work the same way as a branch (a name that points to a commit) - the only difference is that there's no easy way to move them.

![Create a tag](Tags_CreateATag.gif)

| Kind of tag | How to make one             | What they look like |
|--           |--                           |--                   |
| Lightweight | ![Lightweight tag dialog](Tags_LightweightDialog.png) | ![Lightweight tag right-click](Tags_LightweightRightClick.png) |
| Annotated   | ![Annotated tag dialog](Tags_AnnotatedDialog.png) | ![Annotated tag right-click](Tags_AnnotatedRightClick.png) |

