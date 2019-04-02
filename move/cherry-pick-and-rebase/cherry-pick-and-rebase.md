# Move a single commit

A commit is a snapshot of all the files in a project.  If you compare a commit against its parent, then it becomes a list of files which were created, deleted, and changed.

Technically, it is impossible to move a commit - once a commit is created, [it can be forgotten](../Branches/Reflog.html#Deleted), but never modified.  However, **we can create a new commit which contains the same *files* or a new commit which contains the same *changes* as an existing commit.**.  This is effectively the same as moving it, with the added advantage that the old commit will hang around for a few weeks in case we change our mind.

If you right-click a commit, DiffPlug will give you these options:

| Options     | What does it do?            |
|--                                |--                           |
| ![Apply files](TODO.png) Branch | Marks a moveable spot in history and makes new commits. There are lots of ways to use a branch, and we'll show you all of them. |
| ![Remote branch](TODO.png) Remote branch | Keeps track of where a friend's branch is. You can't move it directly - it gets moved automatically when you download or upload from your friend's repository. |
| ![Tags](TODO.png) Tag (a.k.a. permanent branch) | Marks a permanent spot in history.   |


## Moving the files in a commit

## Moving the changes in a commit

## Moving the *inverse* of the

## Move a whole branch

Lets say you have a series of changes like this:

![Branch before rebasing](TODO.png)

And you would prefer that they looked like this:

![Branch after rebasing](TODO.png)

Since you already know how to [move the changes in one commit](../Commit.html#dslkjfhsa), you could apply the changes in each of the commits one at a time.  That's sorta feasible for this case where the branch has only three commits, but for longer branches that could be a huge pain.

What you'd really like is a way to automatically take the `ABC` branch which is based on `gitfromscratch` and redo each of its commits so that it is based on `123`.  **`Rebase` changes the base of a branch by automatically applying the changes in each of its commits.**

## How do I rebase?

As usual, in order to change a branch, you must first check it out.  Then, you right click the branch which you would like to be the new base of this branch, and select `Rebase`.

![Branch after rebasing](TODO.png)
