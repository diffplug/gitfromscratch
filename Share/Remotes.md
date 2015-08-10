# Establish a connection

It is common for a team to have a central repository - a single "source of truth" can be helpful for keeping a team in sync.  However, insofar as git is concerned, your local repository is just as good as the team repository.  **There's nothing special about the team server, it works exactly the same way that the repository on your computer works.**  Any repository can talk to any other once it establishes a connection.

In DiffPlug, you can see which servers you can communicate with by clicking `Sync` and then looking at the `Remotes` section.  Each server has its own button.  If you click the button, you can see the details for that server.

![Browse remotes](Remotes_Browse.png)

If you just started a new project, then this section will be empty.  If you cloned the project from a central server, then there's probably one remote named `origin`.  **A remote is just an address with a nickname.**  There are three kinds of address:

1. **File**  is for a repository on your local hard drive or a shared drive.  You probably won't use this much, but it's great for learning about synchronizing, because you can manipulate both sides of the connection.
	+ `file:///C:/Users/<username>/Documents/gitfromscratch` (windows)
	+ `file:///Users/<username>/Documents/gitfromscratch` (mac)
	+ `file:///home/<username>/Documents/gitfromscratch` (linux)
2. **HTTPS** is for a repository hosted on the internet.  Almost every service which provides git hosting supports the HTTP / HTTPS protocol.
	+ `https://github.com/diffplug/gitfromscratch`
3. **SSH/GIT** is common if you work with lots of linux machines, but you'll probably never use it otherwise.  We won't discuss it in this tutorial.
	+ `git://github.com/diffplug/gitfromscratch` (insecure, read-only)
	+ `ssh://github.com/diffplug/gitfromscratch` (secure, read/write)

You can have as many remotes as you'd like, but usually there will be just one central server named "origin".  If you and Joan are working closely together, you might connect to her repository and call it "joan".

## Creating a new remote

In the following sections, we're going to show how you can synchronize your commits with a remote.  While you're learning, it can be helpful to make a "dummy" remote that you can tinker with.  To make a dummy remote, just copy-paste your whole git repository to a new folder.  This will behave just like any other remote, but you can manipulate it directly to test various situations.

To add a new remote (dummy or otherwise), click the `+` button in the `Remotes` section.  Type in a name and the URL, and the remote will be added.  If you click `Download all`, it will download all the information in the given remote repository.

![Add a new remote](Remotes_Add.png)
