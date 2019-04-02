# Merge your work

To merge two lines of commits back into a single line, you must create a merge commit.  **A merge commit is a commit which has more than one parent**.  When you click a commit with one parent, you see a comparison between the snapshot of that commit and its parent.  But what about when you click a commit with multiple parents?  At first, you're looking at the difference between the commit and its first parent, but you can compare against other commits by clicking the `+` to view the other parents.

![Picking the parent to view](TODO.png)

Answering the question "What changed in this commit?" is tricky for a merge commit - which is why you don't want to use them to make changes!  **A merge commit should not introduce new changes; it should only combine the work of existing commits.**  A merge commit which violates this rule is known as an "evil merge".

## How do I merge?

Usually, merging is easy.  Let's take the [example where we created a branch `123` and `ABC`](../Branches/Overview.html#using-a-branch-as-a-paintbrush).

![123ABC.png](TODO.png)

To perform a merge, we checkout the branch that we would consider to be "our" side of the merge (more on that later).  Then we right-click the branch that we would like to merge into that branch (which we will call "their" side), and select `Merge`.

![123ABC.png](TODO.png)

Note that after the merge is complete, "our" branch (123) includes the merge, while "their" branch (ABC) hasn't changed.  If we look at the change relative to its first parent ("our" side, 123), we can see the combined changes in the ABC branch.  If we look at the change relative to its second parent ("their" side, ABC), we can see the combined changes in the 123 branch.

## How does it work?

The previous example hinted a little at what's going on under the hood.  When we asked git to merge ABC into 123, git searched through history to find the first commit which was shared by both branches (in this case, the `branchexample` commit).  Then it asked "what did we (ABC) change relative to this common parent?", and "what did they (123) change relative to this common parent?".  The final commit will contain:

- the files from the common parent
- plus the changes made in 123
- plus the changes made in ABC

Unfortunately, there's a missing bullet point above - what if 123 and ABC change the same thing in different and incompatible ways?  These are called **merge conflicts**, and we'll get to them, but first let's think about a special kind of merge which is guaranteed to never have a conflict - the summary merge.

## Summarizing changes, with or without history

As we learned back when we [made our first commit](../../intro/make-a-commit/), **a commit is a snapshot of every single file in your project folder**.  This is true whether a commit has one parent like a normal commit, or multiple parents like a merge commit.  And as we learned at the beginning of this page, when you click a merge commit you're looking at the difference between the snapshot in that commit compared to its first parent - but you can also compare to its other parents if you want.

Let's say we have only one branch, and we're doing some quick brainstorming.  Each time we do something vaguely interesting, we make a commit.  After a few such commits, we finally get to something useful.  Because we made a commit each time we did something interesting, whether it was good or bad, we've recorded our entire thought process, but it's a little messy...

![brainstorming](TODO.png)

<!---
- The whale is way better than the squirrel, delete all the squirrel stuff.
- Let's add a blue whale!!! !!!!!!
- Or blue!
- What if it was purple?
- Look!  A squirrel!
- Blank project
-->

We spent a lot of time making and coloring a squirrel, but in the end we removed it from our project entirely.  If we're going to share this work with someone else, it might be wasteful for them to read up on all our squirrel thoughts, since all they really need to know is the blue whale.  One way for us to clean up this work is to **squash it**.

![video of squash](TODO.png)

Our new squashed commit has the exact same snapshot that the `whale is way better than the squirrel, delete all the squirrel stuff` commit had.  We just changed the commit message and the commit's parents so that the history tells a more concise summary of our thought process.

The only potential problem with this approach is that we've lost the history of our brainstorming.  If we wanted to keep this history, while also summarizing our final result concisely, we can use a **summary merge**.

![summary merge](TODO.png)

Let's compare the final result of the "squash" with the final result of the "summary merge".

![squash vs summary merge](TODO.png)

There's a lot about these which are *exactly* the same.

1. They end up with the *exact* same snapshot of files.
2. They each end up with the *exact* same first parent.
3. As a direct consequence of **1** and **2**, when we click the final commit and therefor compare the commit against its first parent, we see the *exact* same change.

The only difference between the two approaches is that in one case, our miscellaneous history is there for us to look at in the future.  Whether that is good or bad is entirely up to you, and you can decide to keep your brainstorming sometimes and discard it other times.

So why are we talking about it now?  Let's go back to our earlier description of what was contained in the file snapshot of a merge commit:

- the files from the common parent
- plus the changes made in 123
- plus the changes made in ABC
- (formerly missing bullet point) incompatible changes to the same files made in both 123 and ABC

In the case of a summary commit, only one side of the merge has any changes at all.  This makes it impossible that 123 and ABC could ever have incompatible changes, because ABC doesn't *have* any changes.

But what if ABC *did* have changes, and they happened to be in the exact same place as changes from 123?

## Merge conflicts

If boths sides changed the same file, this is called a merge conflict.  Depending on what kind of changes were made, your tools might be able to fix it automatically without ever showing you a problem.  We'll get into the details of that in the [next section](TODO).

Luckily for us, the very worst-case scenario is not that bad.  And you'll have to understand this worst-case scenario first before you can understand how your tools can sometimes fix this for you.

In the worst-case, a merge conflict will end up producing *four* versions of the file.  You'll end up with:

1. the last version that both branches agreed upon before they split (aka base)
2. the version that one branch had
3. the version that the other branch had
4. the working copy version, which is a broken mess of the previous three versions

The full commit history producing this situation might be complex:

![TODO](TODO.png)

But at the level of a single conflicted file, we can ignore all the intermediate changes reduce this down to a simple diamond.

![TODO](TODO.png)

At this point, the tools have done everything they can to give you the context for the conflict, and it's your job to figure out what the working copy ought to be.  Once you have made the working copy the way that you want it to be, you declare to git "I have resolved this conflict, accept my gospel" and you can go on with your work.

## Merge conflicts create evil merges

But the less evil they are, the better.  Remember our summary commit?  Because it only has changes on one side, it has the magical property that it can say:

> See all the commits towards my 2nd (right) parent?  They're sorta interesting, you can browse through them if you want.  But the sum total of all that effort?  You can see it all at once, right here, just by clicking me.  There's no change in those intermediate commits that you can't see summarized in this merge, and there's no changes in this merge except for the final result of the incremental changes of those intermediate commits.

And a non-evil merge, with no conflicts, can say the same thing, symmetrically, about each of its parents.

> See all those commits in my 1st and 2nd (left and right) parents?  They're sorta interesting, but their changes are completely independent.  You can see the sum total of all the changes in either branch, just by clicking me and picking which parent you care about.  There's no change in those intermediate commits that you can't see summarized in this merge.

But evil merge can make no such guarantees.

Sometimes, both sides of a merge have changed the same file.  This is called a "merge conflict".  It can play out in one of two ways:

1. If your tools are able to parse the file, and the deltas

2. If the changes are in the same part of the file, then you'll have to resolve this conflict ourself.

## Automatic resolution

Let's say we've got a file 100 lines long.  On one side of a merge, we changed a few lines at the top, and on the other side, a few lines at the bottom.  Because the changes are so far apart, it's relatively easy for git to combine the two.  But this relies on the fact that git is able to understand the guts of the file - it knows how to open a text file, parse out the lines, and recombine the lines from different files back into one coherent whole.

What about files

As we learned back when we [made our first commit](../../intro/make-a-commit/), **a commit is a snapshot of every single file in your project folder**.  Just like a zip file!  Since jgit
