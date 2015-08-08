### Deleting and restoring a commit

Have you ever slid your finger around a roll of tape, feeling for the little edge you can pry up?  If you wanna be sure to find it, you can put a sticky note on the tip, to make sure you don't lose it.  Branches serve exactly that function in git.

If you lose the tip of a string of commits in git, they are effectively "deleted".  As an example, let's delete our life's work.

![How to delete your life's work](Reflog_LifesWorkDelete.gif)

1. Do your life's work.
2. Commit it into git for safe keeping.
3. Move the branch back by one commit, thus losing the "tip" that pointed to your life's work.
4. Mission accomplished!

### Why the hell am I using git then?

As it turns out, your life's work isn't deleted, it's just *unreachable*.  And there's an easy way to make it *reachable* again.  Here's how to know if a commit is reachable or not:

1. Pick up a branch.
2. Follow its commits, parent to parent, until you reach the very first commit.
3. Repeat steps 1 and 2 on every branch.

Any commit that the process above can touch is reachable.  Everything else is unreachable.  The unreachable commits are still there, on your computer, there's just no way to find them, because there's no sticky note on their tip.

### My work is still gone...

Git has a mechanism called the reflog.  **Every change to a branch is logged to the reflog**.  This means that you can go into the reflog and see where a branch used to be.  Let's use the reflog to get back your life's work.

![How to restore your life's work](Reflog_LifesWorkRestore.gif)

This demonstrates that **if you committed it, you can get it back**.  So commit often!  You can always make new, cleaner commits later, if you want to.

### Do commits ever get *actually* deleted?

Yes! Every few days, git will do *garbage collection*.  That means that it will find all of the reachable commits, using the process we described before:

1. Pick up a branch.
2. Follow its commits, parent to parent, until you reach the very first commit.
3. Repeat steps 1 and 2 on every branch.

... and then it will permanently delete the unreachable ones that are more than two weeks old.  So if a commit that you care about (such as your life's work) is unreachable and more than two weeks old, then it is eligible for garbage collection, and it could be actually deleted.  So make sure that everything you care about has a branch pointing to it somewhere.

But if you made a mistake and want to revive a commit from a few hours or days ago, no worries - your commit will definitely still be there.
