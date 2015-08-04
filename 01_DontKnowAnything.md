## Basic navigation

Normally, you use your desktop and Windows Explorer / Mac Finder / Linux Nautilus to look at files.  But these interfaces were designed for looking at files at one point in time.  DiffPlug was designed for looking at the history of files and comparing them.  So there's just a couple things you need to know about basic navigation in DiffPlug first.

The [D] icon brings up the *DiffManager*.  This is just a scratchpad where you can put files that you're interested in for comparing them later.  To put a file on the DiffList, drag it there from your desktop.  You can also drag files to the "D" icon and they'll be added to the DiffList.

![Dragging to the DiffManager](/01_DontKnowAnything/01_BasicNav/Dragging_to_the_DiffManager.gif)

Alternatively, you can find a file using fuzzy search using the browse bar.

![Navigating with the browse bar](/01_DontKnowAnything/01_BasicNav/Browsebar.gif)

## Create a new repository

Git tracks all of the files which are contained by a folder (including sub-directories, sub-sub-directories, etc).  The first step when you create a new project is to pick the root folder.  I'll be using the source code to this repository as an example, but you can use whatever folder you'd like to start tracking.  Drag the folder to the DiffManager

![Dragging to the DiffManager](/01_DontKnowAnything/02_Create/Drag_code_to_DiffManager.gif)

Then right-click -> Git -> Create new repository.

![Right-click and create a new repository](/01_DontKnowAnything/02_Create/Rightclick_createNew.gif)

Now that you've got an empty repository, you can start [making commits](#MakeACommit).

## Clone an existing repository

If you just want to make a new repository, you can skip this section and go straight to [making commits](#MakeACommit).  If you'd like to try cloning any arbitrary project, the [source code to this website](https://github.com/diffplug/gitfromscratch) is a good simple example.

Git tracks all of the files which are contained by a folder (including sub-directories, sub-sub-directories, etc).  To start working on an existing repository, you'll need to grab a copy of that folder and all of its history.  This is called *cloning*.

There are two things you're going to need:
1) The URL you want to clone from
    + This acts like the "phone number" which git will call to ask for the latest version.
    + Later on, we'll show you [how to upload changes you make to this URL](Upload).
2) The folder on your computer where you're going to put the clone

Go to wherever you'd like to put your clone, and right-click -> Git -> Clone existing repository.  This will open a dialog where you can put the URL, and DiffPlug is happy to make a new destination folder for you if you want.

![Right-click and clone an existing repository](/01_DontKnowAnything/03_Clone/Rightclick_clone.gif)

It might take a while to finish all the downloading, but eventually, you'll have your shiny new clone.

![Clone finished](/01_DontKnowAnything/03_Clone/Clone_finished.gif)

## Make a commit

*A commit is a snapshot of every single file in your project folder*, along with some information like when the commit was made, who made it, and a short message describing the work that was done.  *A repository is just a pile of commits* - you can compare the files in one commit to another, search through the commits to see when a certain change was made, whatever!

The commits that are already in your repository are shown down here.  If you just created an empty repository, then you won't have much to look at yet, but you will soon!

![Click a commit](/01_DontKnowAnything/04_Commit/Click_a_commit.gif)

If you click a commit, you can see all the files that were created, deleted, or changed between that commit and its previous files.

![Created, deleted, and changed files](/01_DontKnowAnything/04_Commit/Created_deleted_changed.gif)

You can also see metadata about who made the commit, when, and why.

![Who, what, when, where, why](/01_DontKnowAnything/04_Commit/Who_what_when_where_why.gif)

Now, you're going to make your own commit.  In the list of commits at the bottom, there is always a special row for the "working copy".  *The working copy is a draft of the next commit you're going to make*.  If you're looking at the working copy, then this button will say "Commit".  If it doesn't say "Commit", then it will say "Go to WC", and if you click it, it will take you to the working copy.

![Go to the WC](/01_DontKnowAnything/04_Commit/Go_to_WC.gif)

Once you're at the working copy, the "Changed files" section will show you which files you have modified in your project directory.  To make sure that it is up-to-date, you can hit the refresh button.

![Refresh changed files](/01_DontKnowAnything/04_Commit/Refresh_changed_files.gif)

