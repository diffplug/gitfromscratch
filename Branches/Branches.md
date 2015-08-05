### Branches are paintbrushes

What's a branch, you ask?  Well, you might think this is a branch:

![Feature branch](FeatureBranch.png)

...but a branch is actually *much* simpler than that.  We learned [in the last section](../DontKnowAnything/MakeCommit.md) that a row represents a commit - a snapshot of all the files in your project at a specific point in time.  A branch is actually just a little rectangle on a row.  The commit below has three of them!

![Branch, remote branch, and tag](BranchRemoteAndTag.png)

You can use your mouse to drag the branch around.  You'll notice that the branch will stick to whatever commit you drop it on, but otherwise it doesn't feel like anything is happening...

![Dragging a branch](Dragging a branch.png)

It's not just a feeling - nothing is happening.  A branch is just a moveable sign which points to a commit, and we're just moving that sign.  If you look at the far right of any row, you'll see a long number-ish thing - `b6a31496...` or something like that.  That is the commit's name.  Every commit has its own unique name, and they're all forty characters long.  It's hard to remember these, so mostly we don't even try.  Instead, we make an easy-to-read sign, call it a branch, and point it to a commit.

If branches are just signs, and we can move them around willy-nilly without anything really happening, then what's the big deal with branches?

**Commits are paint, and branches are brushes.**

| Paint and brushes  | Commits and branches |
|--                  |--                    |
| A painting is made of paint, not of brushes. | A repository is made of commits, not of branches. |
| A painter spends most of his time holding a brush, not paint. | A gitter spends most her time holding a branch, not commits. |

There are three kinds of branches.

| Kind                             | Used for             |
|--                                |--                    |
| ![Branch](vcs_Branch.png) Branch | What you'll use 90% of the time.  You can move it however you'd like. |
| ![Remote branch](vcs_BranchRemote.png) Remote branch | Used for sharing changes, which we'll talk about in a later section.  For now, all you need to know is that you can only move it by synchronizing with some remote repository. |
| ![Tags](vcs_Tag.png) Tag (a.k.a. permanent branch) | Behaves the same as a branch, except you can't move it.  We'll talk about them later. |

As the table indicates, you're going to spend 90% of your time manipulating plain-old branches, so we'll start with them.

### What's the HEAD branch?

You might have noticed this





#### Looking at a painting through a brush

Here's where the metaphor breaks down.  Obviously, you don't need a brush to look at a painting.  But it turns out that you do need a branch to look at a repository.




Remember that a commit is a snapshot of every single file in your project folder.  But when you click a commit, you won't see all the files - you'll see changes.  X was added, Y was changed, Z was deleted.  That's because **every commit knows who its parent is, so that you know what to compare it to.**  If you just had a pile of snapshots, it would be very difficult to figure out how files where changes.  But the snapshots aren't a pile - they're a line, and every snapshot knows who its parent is.

