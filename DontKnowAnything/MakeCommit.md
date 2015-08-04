### Make a commit

**A commit is a snapshot of every single file in your project folder**, along with some metadata such as when the commit was made, who made it, and a short message describing the reasoning behind the work.  **A repository is just a pile of commits** - you can compare the files in one commit to another, search through the commits to see when a certain change was made, whatever!

The commits that are already in your repository are shown down here.  If you just created an empty repository, then you won't have much to look at yet, but you will soon!

![Click a commit](MakeCommit_ClickCommit.gif)

If you click a commit, you can see all the files that were created, deleted, or changed between that commit and the previous commit.

![Created, deleted, and changed files](MakeCommit_CreatedDeletedChanged.gif)

You can also see metadata about who made the commit, when, and why.

![Who, what, when, why](MakeCommit_WhoWhatWhenWhy.gif)

Now you're going to make your own commit.  In the list of commits at the bottom, there is always a special row for something called the "working copy".  **The working copy is a draft of the next commit you're going to make**.  If you're looking at the working copy, then this button will say `Commit`.  If it doesn't say `Commit`, then it will say `Go to WC`, and if you click it, it will take you to the working copy.

![Go to the WC](MakeCommit_GoToWc.gif)

Once you're at the working copy, the *Changed files* section will show you which files you have modified in your project directory.  To make sure that it is up-to-date, you can hit the refresh button.

![Refresh changed files](MakeCommit_ShowChanges.gif)

To make a commit, you need to check the box for which files you'd like to commit, and type in a commit message which explains the reasoning behind your changes.  Once you have done those two things, hit the "Commit" button and you'll make your very first commit!

![Make the commit](MakeCommit_MakeTheCommit.gif)

### Set your username

Every time you make a commit, it will be tagged with your name and email.  That way when you share your commits, your colleagues will be able to know who to contact if they'd like to discuss a particular change.  You only have to set your username once, and it will be set for all the commits you make to every repository.

From the top menu bar, go to *Help -> Preferences*, then *DiffPlug -> Filesystems -> Git*. Hit the *Edit* button to the right of committer and type in your name and email.  Now it will be attached to all the commits you make from now on.

![Refresh changed files](MakeCommit_SetUsername.gif)
