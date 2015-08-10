### Collaborating on a moving target

In [an earlier section](../Branches/Overview.md) we discussed what a branch actually was - a name that points to a commit.  When synchronizing with teammates, its important to also remember the intent behind publishing a branch.  **The purpose of publishing a branch is to synchronize and integrate work around a given objective**.  You can use your own convention, but the following are common:

* **master** holds the latest working version of the integrated software
* **feature/&lt;feature name&gt;** holds the work-in-progress towards a specific feature

You can use whatever convention you want, but the important thing is that publishing a branch is different than just having one.  If you publish a branch, anyone can download it and move it forward by adding their own commits.  If you also make some improvements on this branch, then you'll have to reconcile your changes with theirs.  This is trivial if the objective of the branch is clear, but it can become difficult if there aren't clear objectives.