# Move and undo commits and chains of commits

There's a difference between the *content* of a commit and the *changes* between a commit and its parent.  Usually, the most useful thing is to move changes, but we'll look at both cases.

## Moving the content in a commit

If you want to copy some or all of the files in a commit into your working copy, right-click the commit and select ![Apply content icon](apply_file.png)`Apply content`.  You can choose between:

- ![All files icon](blank_folder.png)`all files into WC` copies every file from that commit into your working copy.
- ![Some files icon](blank_file.png)`some files into WC` copies individual files one at a time into your working copy.

## Moving the changes in a commit

When you click a commit, you see the changes that took place between that commit and its parent.  To apply those same changes to your WC, all you have to do is right-click the commit, select ![Apply delta icon](apply_delta.png)`Apply delta`, and then one of its children:

- ![Commit icon](commit.png)`and commit`
- ![All files icon](blank_folder.png)`all files into WC`
- ![Some files icon](blank_file.png)`some files into WC`

This will create a patch for the changes in this commit, and then apply it as either a new commit (`and commit`), or as an uncommitted change in the working copy (`all files into WC` and `some files into WC`).  The distinction between `all files` and `some files` is whether you will apply every change, or just some of the changes.

*Note: Vanilla git calls this "git cherry-pick".  See [departures from vanilla git](../../epilogue/departures/departures.md) for why we use a different name.*

## Undoing a commit

Given that we can create a patch from a commit to its parent, we can use the exact same process to create a patch *from* the parent *to* the commit - the inverse patch.  By doing this, we will undo all the changes in that commit.  This is super useful because it works even if many other commits have happened in the meantime.

*Note: Vanilla git calls this "git revert".  See [departures from vanilla git](../../epilogue/departures/departures.md) for why we use a different name.*

## Move a chain of commits

Let's say you have a series of commits like this:

![Branch before rebasing](before-rebase.png)

And you would prefer that they looked like this:

![Branch after rebasing](after-rebase.png)

Happens all the time.  The `letters` branch is based off of the `common` commit, and you would rather it be based on the `3` commit.

One way to do this is to right-click each commit, one at a time, and select ![Apply delta icon](apply_delta.png)`Apply delta`.

![Demonstrate rebase one-at-a-time](rebase-by-cherry-picking.mp4)

A faster way to accomplish this is the ![Rebase icon](rebase.png)`rebase` command.  Here's how it works:

- checkout the branch you want to move
- right-click the branch you'd like to change its base to
- select ![Rebase icon](rebase.png)`rebase`

![Actual rebase](rebase-actual.mp4)

## Rebase onto origin/master

The scenario above happens especially often in a team setting - somebody else uploaded their changes before you did.  Because it's so common, there's a shortcut for exactly this case:

![Rebase onto origin/master](TODO.png)

But you need to be careful about rebasing branches which you have shared.  When your branch moves to the new tip after a rebase, your old commits are [lost](../../branches/reflog/reflog.md).

![Rebase deletes commits](TODO.png)

That's fine if you haven't shared those commits with anyone else, but it's not good if you already have.  In the situation below, for example, the commits in `master` have already been published to `origin/sharedFeature`.

![Not good to rebase](TODO.png)

If you rebase `master`, there will be some duplicated commits!

![Duplicated commits](TODO.png)

[Merging](../merge/merge.md) is never bad, only use rebase when you haven't shared the commits with anyone else.

## rebase(123, abc) == merge(123, abc)

The final result of rebasing one branch onto another is *exactly* the same as the final result of merging those two branches, except for the history.

![Compare a rebase to a merge](rebase-compare-to-merge.mp4)

The *only* difference is in the story that your history will tell.  So whether we like it or not, every time we choose either to merge or to rebase, we have made a subjective, editorial decision about what kind of history will tell a better story.  Which sets us up perfectly for our next topic: [rewriting history](../rewrite-history/rewrite-history.md).
