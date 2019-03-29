# Collaborating on a moving target

In [an earlier section](../branches/) we discussed what a branch actually was - a name that points to a commit.  When synchronizing with teammates, it is important to also remember the intent behind publishing a branch.  **The purpose of publishing a branch is to synchronize and integrate work around a specific objective**.  You can use your own convention, but the following are common:

* **master** holds the latest working version of the integrated project
* **feature/&lt;feature name&gt;** holds the work-in-progress towards a specific feature

You can use whatever convention you want, but the important thing is that publishing a branch is different than just having one.  If you publish a branch, anyone can download it and move it forward by adding their own commits.  If you also make some improvements on this branch, then you'll have to reconcile your changes with theirs.  This is trivial if the objective of the branch is clear, but it can become difficult if there aren't clear objectives.

## What are remote branches, and how do they work?

**Each time you download from a remote, your repository will have a remote branch placed wherever the equivalent branch is on the remote.**  In the example below, the remote `dummy` is on the left.  As its `test` branch is moved around, the move is reflected on the right each time that a download happens.

![Moving a branch](TODO.png)

If you have a local branch with the same name as the remote branch, then DiffPlug can automatically help you keep these two in sync.  If you right-click a branch (either the local branch or a remote branch), DiffPlug can show you what must be done to synchronize one with the other.

Here are the possible cases:

| Situation                        | Description     | Available actions |
|--                                |--               | --                |
| ![Local only](TODO.png) | The local branch doesn't have a remote counterpart. | ![Local only actions](TODO.png) |
| ![Remote only](TODO.png) | The remote branch doesn't have a local counterpart. | ![Remote only actions](TODO.png) |
| ![Synced](TODO.png) | The local and remote branches are synchronized. | ![Synced actions](TODO.png) |
| ![Local has new](TODO.png) | The local branch has new commits. | ![Local has new actions](TODO.png) |
| ![Remote has new](TODO.png) | The remote branch has new commits. | ![Remote has new actions](TODO.png) |
| ![Both have new](TODO.png) | Local and remote branches both have new commits. | ![Both have new actions](TODO.png) |

If both the local and remote branches have new commits, then you face the classic conundrum - you've done some work, someone else published a new version, and now you've got to redo your work on the new version.  Git has a smorgasbord of options available to you, which we cover in the [move your work through time](../Move/README.md) section.

## Onwards, ever onwards

**A published branch should only move forward.**  Once a branch has been published, anyone might base their work on the contents of that branch.  If you move a branch backwards, then other people who have based their work on the commits in that branch have lost their foundation.

**If you find that you need to remove or undo some changes that have already been published, you should do that [using new commits](../Move/Apply.md).**  This gives you the opportunity to explain in the commit messages why some previously published commits were faulty.  If you move a branch backwards, there's no way to tell your teammates why, so it will be very distressing to them when they find that the commits which they based their work on are gone without any explanation.

At various points, the "not recommended" section will give you the option to move a remote branch backwards.  It can be useful when you're working by yourself and using a remote repository only as a personal backup mechanism.  **If you're working with other people, you should never use the "not recommended" section.**