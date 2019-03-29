# Move a single commit

A commit is a snapshot of all the files in a project.  If you compare a commit against its parent, then it becomes a list of files which were created, deleted, and changed.

Technically, it is impossible to move a commit - once a commit is created, [it can be forgotten](../Branches/Reflog.html#Deleted), but never modified.  However, **we can create a new commit which contains the same *files* or a new commit which contains the same *changes* as an existing commit.**.  This is effectively the same as moving it, with the added advantage that the old commit will hang around for a few weeks in case we change our mind.

If you right-click a commit, DiffPlug will give you these options:

| Options     | What does it do?            |
|--                                |--                           |
| ![Apply files](Commit_Files.png) Branch | Marks a moveable spot in history and makes new commits. There are lots of ways to use a branch, and we'll show you all of them. |
| ![Remote branch](vcs_BranchRemote.png) Remote branch | Keeps track of where a friend's branch is. You can't move it directly - it gets moved automatically when you download or upload from your friend's repository. |
| ![Tags](vcs_Tag.png) Tag (a.k.a. permanent branch) | Marks a permanent spot in history.   |


## Moving the files in a commit

## Moving the changes in a commit

## Moving the *inverse* of the
