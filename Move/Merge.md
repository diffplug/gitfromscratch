# Merge your work

To merge two lines of commits back into a single line, you must create a merge commit.  **A merge commit is a commit which has more than one parent**.  When you click a commit with one parent, you see a comparison between the snapshot of that commit and its parent.  But what about when you click a commit with multiple parents?  There are multiple ways to look at this, but the simplest is to pick which parent you want to compare against.

![Picking the parent to view](Merge_PickParent.gif)

Answering the question "What changed in this commit?" is tricky for a merge commit - which is why you don't want to use them to make changes!  **A merge commit should not introduce new changes; it should only combine the work of existing commits.**  A merge commit which violates this rule is known as an "evil merge".

## How do I merge

Usually, merging is easy.  Let's take the [example where we created a branch `123` and `ABC`](../Branches/Overview.html#using-a-branch-as-a-paintbrush).

![123ABC.png](Merge_BeforeMerge.png)

To perform a merge, we checkout the branch that we would consider to be "our" side of the merge (more on that later).  Then we right-click the branch that we would like to merge into that branch (which we'll call "their" side), and select `Merge`.

![123ABC.png](Merge_PerformMerge.gif)

Note that after the merge is complete, "our" branch (123) includes the merge, while "their" branch (ABC) actually hasn't changed.  If we look at the change relative to its first parent ("our" side, 123), we can see the combined changes in the ABC branch.  If we look at the change relative to its second parent ("their" side, ABC), we can see the combined changes in the 123 branch.

## Merge difficulties

The previous example hinted a little at what's going on under the hood.  When we asked git to merge ABC into 123, git searched through history to find the first commit which was shared by both branches (in this case, the `branchexample` branch).  Then it asked "what did we (ABC) change relative to this common parent?", and "what did they (123) change relative to this common parent?".

If both sides of the merge changed different files, then the merge is pretty easy - for files that only ABC changed, git takes the ABC side - for files that only 123 changed, git can take the 123 side.
