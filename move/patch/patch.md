# Patch


Sometimes, both sides of a merge have changed the same file.  This is called a "merge conflict".  It can play out in one of two ways:

1. If your tools are able to parse the file, and the deltas

2. If the changes are in the same part of the file, then you'll have to resolve this conflict ourself.

## Automatic resolution

Let's say we've got a file 100 lines long.  On one side of a merge, we changed a few lines at the top, and on the other side, a few lines at the bottom.  Because the changes are so far apart, it's relatively easy for git to combine the two.  But this relies on the fact that git is able to understand the guts of the file - it knows how to open a text file, parse out the lines, and recombine the lines from different files back into one coherent whole.

What about files

As we learned back when we [made our first commit](../../intro/make-a-commit/), **a commit is a snapshot of every single file in your project folder**.  Just like a zip file!  Since jgit
