# Rewrite history

*Future years will never know the seething hell and the black infernal background of [implementing this feature]; and it is best they should not -- the real war will never get in the books.*

Walt Whitman was speaking about the American Civil War, not your feature branch, but either way it's not clear if this is good advice.  When something goes wrong, in culture or code, we will look to the past to try to understand how we got here.  Assuming you don't intend to deceive future archaeologists, then it is important for your history to be accurate and detailed.  But there may be some value in some amount of condensing and summarizing your changes so that future generations and present collaborators may understand your intent more clearly.

We've touched on some of these techniques in passing before, but this is our chance to provide a full overview and introduce some new techniques.

## Squash

The simplest history-simplification is to simply squash two or more commits together.  Ctrl-select the commits you want to squash, right-click, and select `Squash`.

![Video of "oops, add this" squash.](TODO.png)

## Rewrite

Alternatively, whenever you drag the working copy branch to a new location, you are given the option to `Rewrite branch from here`.  If you select that, DiffPlug will

- create a new branch, and add it to your tips
- move your working branch to wherever you dragged it

This means that you have moved your project back in time to wherever you have dragged, but you can easily see all the work you have done since then.

![Video setting up a rewrite.](TODO.png)

### Summary merge

If you'd like to keep every commit of your brainstorming but just provide a summary of the final result, you can use a summary merge.  We discussed this technique in more detail in the [../merge/_.md](merge section).

![Video resolving with a summary merge.](TODO.png)

### Full rewrite

You can also pick and choose which commits to include, and in which order.

![Video resolving with a summary merge.](TODO.png)

<!---
- Add a squirrel
- Add a whale
- Add a human
- Make the squirrel blue

- Add a whale
- Add a squirrel
(reorder)
- Make the squirrel blue
(squash)
- omit adding the human entirely
-->
