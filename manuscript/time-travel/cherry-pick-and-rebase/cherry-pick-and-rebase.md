# Moving commits and strings of commits

## Moving the changes in a commit

When you click a commit, you see the changes that took place between that commit and its parent.  To apply those same changes to your current working-copy, all you have to do is right-click the commit, select ![Apply delta icon](apply_delta.png)`Apply delta`, and then one of its children:

- ![Commit icon](commit.png)`and commit`
- ![WC icon](blank_folder.png)`all files into WC`
- ![WC icon](blank_file.png)`some files into WC`

This will create a patch for the changes in this commit, and then apply it as either a new commit (`and commit`), or as an uncommitted change in the working-copy (`all files into WC` and `some files into WC`).  The distinction between `all files` and `some files` is whether you will apply every change, or just some of the changes.

![Demonstrate apply delta](TODO.png)

*Note: Vanilla git calls this a "cherry-pick".  See [departures from vanilla git](../../epilogue/departures/departures.md) for why we use a different name.*

## Undoing a commit

Given that we can create a patch from a commit to its parent, we can use the exact same process to create a patch *from* the parent *to* the commit - the inverse patch.  By doing this, we will undo all the changes in that commit.  This is super useful because it works even if many other commits have happened in the meantime.

![Demonstrate a revert](TODO.png)

*Note: Vanilla git call this a "revert".  See [departures from vanilla git](../../epilogue/departures/departures.md) for why we use a different name.*

## Move a string of commits

Lets say you have a series of commits like this:

![Branch before rebasing](TODO.png)

And you would prefer that they looked like this:

![Branch after rebasing](TODO.png)

Happens all the time.  The `ABC` branch is based off of the `common` commit, and you would rather it be based on the `3` commit.

One way to do this is to right-click each commit, one at a time, and select `![Apply delta icon](apply_delta.png) Apply delta`.

![Demonstrate rebase one-at-a-time](TODO.png)

A faster way to accomplish this is the ![Rebase icon](rebase.png)`rebase` command.  Here's how it works:

- right-click the branch you'd like to change your base to
- select ![Rebase icon](rebase.png)`rebase`
- git will find the last common base between the branch you selected and your checked-out branch
	- ![Highlight the common base](TODO.png)
- git will then take every commit from that common base to your checked-out branch, and apply it on top of the branch you selected
	- ![Redo each commit](TODO.png)
- your checked-out branch will move to the tip of the new commits
	- ![Move your branch](TODO.png)

## Rebase onto origin/master

This happens especially often in a team setting - somebody else on the team uploaded their changes before you had a chance.  Because it's so common, there's a shortcut just for this case:

![Rebase onto origin/master](TODO.png)

But you need to be careful about rebasing branches which you have shared.  When your branch moves to the new tip after a rebase, your old commits are [lost](../../branches/reflog).

![Rebase deletes commits](TODO.png)

That's fine if you haven't shared those commits with anyone else, but it's not good if you have already.  In a situation like this, for example, the commits in `master` have already been published to `origin/sharedFeature`.

![Not good to rebase](TODO.png)

If you rebase `master`, there will be some duplicated commits!

![Duplicated commits](TODO.png)

[Merging](../merge/merge.md) is never bad, only use rebase when you haven't shared the commits with anyone else.  And be *really* sure you haven't already shared commits when we talk about our next topic: [rewriting history](../rewrite-history/rewrite-history.md).
