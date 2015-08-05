# Git from scratch

Git is a tool that does two main things:

1. **Git tracks the history of your files**, so you can compare your files from a week ago with what you have today.
2. **Git helps you share and collaborate on files**, so you can compare your files with your team's files.

**But git's most valuable ability is underappreciated - normally, work only counts if you do it on the latest version of a document.**  If you fix a typo, but somebody published a new version while you were fixing the typo, then you'll have to manually fix the typo all over again.  **With git, you can take the work that you did on an older version, and automatically apply it to a newer version.**

**Because you don't have to base your work on the latest version, you're free to experiment**, let an idea simmer, and construct an argument over time - no need to keep it synchronized every step of the way.  If your experiment produces a valuable result after a few weeks, it doesn't matter that the project has moved on in the meantime.  You don't need to redo your whole experiment - git can do most of the work for you.

**This also means that you can work on each of your ideas in parallel.**  It doesn't matter what order you finish them in, or if one of them never works out - when an idea is done, you can apply its changes to the latest version.

There are lots of tutorials on how to get started with git.  There are two things that make this one different:

1. **This tutorial will show you how to use git on text, pictures, spreadsheets, or any other kind of document, using DiffPlug.**  It used to be that you could only use git using a text-based interface, but now there's nothing stopping us from using git on anything.
2. **This tutorial will show you how to move your work through time.**  Many introductory tutorials skip powerful features like rebase, cherry-pick, and the reflog because they are "advanced", but using a graphical client makes them easy to use.

So, once you've [downloaded DiffPlug](http://www.diffplug.com/versions/latest), let's begin.

# Summary

* [Introduction](INTRO.md)
* [I don't know anything about git or version control](DontKnowAnything/README.md)
   * [Basic navigation](DontKnowAnything/BasicNav.md)
   * [Create a new repository](DontKnowAnything/CreateNew.md)
   * [Clone an existing repository](DontKnowAnything/CloneExisting.md)
   * [Make a commit](DontKnowAnything/MakeCommit.md)
* [I know how to commit, but I don't know how branches work](Branches/README.md)
   * [Branches are paintbrushes](Branches/Branches.md)
   * [History of a branch](Branches/Reflog.md)
   * [Merging branches](Branches/Merging.md)
   * [Save work for later](Branches/SaveForLater.md)
   * [Permanent branches (a.k.a. tags)](Branches/Tags.md)
* Move work through time? What?
   * Move a single commit
   * Move a branch
* I did some work.  How do I share it?
   * Remotes and remote branches
   * Downloading and uploading
* Appendix
   * Departures from the command line
   * Mapping DiffPlug to the command line

