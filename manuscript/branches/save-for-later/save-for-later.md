# Save work for later

It's common to make some changes in your working copy that end up looking like a dead end. It's tempting to just delete them and start over, but git makes it so easy to save them for later.

![Save some changes for later, put them back in](save-for-later.mp4)

*Images by Mr. Gray, Morio, Terri Monahan, Rama, and Gmhofmann under various CCSA licenses, see [here for full credits](https://github.com/diffplug/gitfromscratch/blob/master/manuscript/branches/save-for-later/licenses.md).*

<!---
Set git user to "Eastman Kodak".

GitDagFOrmat
	private final int WIDTH_USER = GitDagFormat.getUserWidth() * 2 / 3;
	private final int WIDTH_DATE = DateFormatter.getTimestampPixelWidth() / 3;

1888 kodak.jpg           Kodak: the first popular amateur camera.
1892 slogan.jpg          Coined slogan: "You press the button, we do the rest."
1897 pocket-kodak.jpg    Launched the Folding Pocket Kodak, which featured in the novel Dracula.
1935 kodachrome.jpg      First mass-market subtractive color film - Kodachrome.
1959 starmatic.jpg       Brownie starmatic with automatic exposure adjustment.
1963 instamatic.jpg      Instamatic - grandmother of the point and shoot.

1975 digital.jpg
	- edit date
	- show in folder
	- save-for-later
	- show it is gone from folder
	- but still present in the branch

1976 kodamatic.jpg         Clone Polaroid's success with the Kodamatic.
1986 -kodamatic.jpg        Lose lawsuit to Polaroid.
1986 mavica and rc-701     Sony and Canon deliver analog no-film cameras.
1991 logitech-fotoman.jpg  Dycam ships the first consumer digital camera (Logitech licenses as Fotoman).

- Apply delta -> and commit digital
- fix date
- show that it's there now

1994 quicktake.jpg  Kodak collaborates with Apple on QuickTake color VGA camera.

- Delete the branch

FOR EACH COMMIT:
1. gain focus
2. refresh button
3. click file
4. check it
5. type message
6. commit (on the dot of i)
7. PAUSE
8. edit date
9. select changed file
10. Goto WC
11. setup next commmit
12. give focus
13. hover over dot of i
14. UNPAUSE
-->

When you right-click a changed file or files in your working copy and select `Save changes for later`, DiffPlug will

- create a new branch
- commit those changes to the new branch branch
- remove those changes from your current working copy

This gives you a fresh start, but you still have easy access to your work-in-progress. To restore the work, just right-click the commit and select `Apply delta`. Once you are accustomed to throwing work away with the confidence that you can get it back in just a few seconds, you'll find that it's easier to try new things.

There *is* a chance that `Apply delta` will fail. That's okay, you'll still have both versions available, and you can manually copy-paste the work back over. We'll go into the details of when and how this fails in the [time-travel section](../../time-travel/time-travel.md). But first, let's talk about [sharing your work with others](../../share).

*Hint 1: To quickly save all files in the working copy, you can use the dropdown next to Commit.*

![Stash](save-all-for-later.png)

*Hint 2: If you're an experienced git user who already uses the "git stash" command, see the [departures from vanilla git](../../epilogue/departures) section for more info.*
