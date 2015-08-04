# Git from scratch

Git is a tool that does two main things:

1. **Git tracks the history of your files**, so you can compare your files from a week ago with what you have today.
2. **Git helps you share and collaborate on files**, so you can compare your files with your friend's files.

But git's most valuable ability is hidden and underappreciated - **git makes your work timeless**.  Normally, work only counts if you do it on the latest version of a document.  If you fix a typo, but somebody published a new version while you were fixing the typo, then you'll have to manually fix the typo all over again.  With git, you can move your work forward in time - **you can take the work that you did on an older version, and automatically apply it to a newer version.**

**Because you don't have to base your work on the latest version, you're free to experiment**, let an idea simmer, and construct an argument over time - no need to keep it synchronized every step of the way.  If your experiment produces a valuable result after a few weeks, it doesn't matter that the project has moved on in the meantime.  You don't need to redo your whole experiment - git can automatically take work based an old version, and move it to the latest version.

This ability to move work is extremely valuable, even if you're just working by yourself.  It means that you can work on each of your ideas in parallel.  It doesn't matter what order you finish them in, or if one of them never works out - when an idea is done, you can apply its changes to the latest version.

There are lots of tutorials on how to get started with git.  There are two things that make this one different:

1. This tutorial will show you how to use git on text, pictures, spreadsheets, or any other kind of document, using a completely graphical interface.  It used to be that you could only use git using a text-based interface, but now that we have DiffPlug, there's nothing stopping us from using git on anything.
2. Many tutorials show how to "track history" and "share and collaborate".  This one does too, but it also shows how to make your work become timeless.  Even if you've never used git before, after spending 30 minutes with this tutorial, you'll be able to move your work forward and backward in time.

So, once you've [downloaded DiffPlug](http://www.diffplug.com/versions/latest), let's begin.

* [Introduction](INTRO.md)
* [I don't know anything about git or version control](DontKnowAnything/README.md)
   * [Basic navigation](DontKnowAnything/BasicNavigation.md)
   * [Create a new repository](DontKnowAnything/CreateNew.md)
   * [Clone an existing repository](DontKnowAnything/CloneExisting.md)
   * [Make a commit](DontKnowAnything/MakeCommit.md)
* I know how to commit, but I don't know how branches work.
   * Branches in git
   * History of a branch
   * Permanent branches (a.k.a. tags)
   * Merging branches
   * Save work for later
* I've got commits and branches, how do I share?
   * Remotes and remote branches
   * Downloading and uploading
* What's this "timeless" nonsense about?
   * Move a single commit
   * Move a branch
* Work styles
   * Merge per idea
   * Linear history
   * Git flow / Github

* Appendix
   * Mapping DiffPlug to the command line
   * Departures from the command line
      * No staging area / index
      * No stash
      * No pull
