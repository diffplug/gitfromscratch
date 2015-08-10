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

So, once you have [downloaded DiffPlug](http://www.diffplug.com/versions/latest), let's begin.  If you get stuck, you can ask for help in our [live chatroom](https://gitter.im/diffplug/gitfromscratch).  This book will be updated over time, so you might want to [subscribe to be notified of updates](https://www.gitbook.com/book/diffplug/gitfromscratch/details).   And of course, the source which generates this book is [available for branching or modification on GitHub](https://github.com/diffplug/gitfromscratch).

## Summary

* [Introduction](INTRO.md)
* [I don't know anything about git or version control](Start/README.md)
   * [Basic navigation](Start/BasicNav.md)
   * [Create a new repository](Start/CreateNew.md)
   * [Clone an existing repository](Start/CloneExisting.md)
   * [Make a commit](Start/MakeCommit.md)
* [I know how to commit, but I don't know how branches work](Branches/README.md)
   * [Sticky-notes and paintbrushes](Branches/Overview.md)
   * [Deleting and restoring a commit](Branches/Reflog.md)
   * [Save work for later](Branches/SaveForLater.md)
* [I did some work.  How do I share it?](Share/README.md)
   * [Establish a connection](Share/Remotes.md)
   * [Permanent branches (a.k.a. tags)](Share/Tags.md)
   * [Collaborating on a moving target](Share/Branches.md)
* [Move work through time? What?](Move/README.md)
   * [Merge your work](Move/Merge.md)
   * [Move a single commit](Move/Commit.md)
   * [Move a whole branch](Move/Branch.md)
* [Epilogue](Epilogue/README.md)
   * [Departures from the command line](Epilogue/Departures.md)
