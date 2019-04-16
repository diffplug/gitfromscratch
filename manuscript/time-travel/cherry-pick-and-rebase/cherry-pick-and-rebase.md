# Move a single commit

A commit is a snapshot of all the files in a project.  If you compare a commit against its parent, then it becomes a list of files which were created, deleted, and changed.  Wouldn't it be nice if we could take those changes, and apply them somewhere else?  You can do this easily by right-clicking and selecting

<>

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
