# I don't know anything about git or version control

You will soon!  We'll start from the very beginning.

Let's say you've got a folder on your computer.  Each time you make a meaningful change, you make zip copy of the folder, and name these copies `v1.zip`, `v2.zip`, etc.  This process is a form of "version control".  Git is just an easy way to do that.

The folder that you're tracking, that's the "working copy".  The pile of `v1.zip` and `v2.zip` files is the "repository".  Git also has a feature where you can upload and download versions between the repository on your computer and a repository on someone else's computer - a repository on someone else's computer is called a "remote".

In concrete terms:

- **working copy** - a folder on your computer whose versions you are tracking
- **repository** - a hidden folder named `.git` inside the working copy which is keeping copies of all the versions of the working copy that you have saved
- **remote** - a repository on someone else's computer, you can download versions from it and upload versions to it

That's really all there is to it!  From here, you can start in a couple ways:

- You can [open an existing working copy](open-working-copy/) if you've already got one setup
- You can [clone an existing repository](clone/) (this is the easiest way to get started)
- You can [init a brand new repository](init/) to start a new project

Once you've done that, even if you're a seasoned git user, be sure to see how to [make and edit a commit](commit/).  There are some common misconceptions that we need to clear up, and that section provides an important foundation for the rest of the manual.
