# I don't know anything about git or version control

You will soon!  We'll start from the very beginning.

Let's say you've got a folder on your computer.  Each time you make a meaningful change, you make a zip copy of the folder, and name these copies `v1.zip`, `v2.zip`, etc.  This process is a form of "version control".  Git is just an easy way to do that.  Git also adds an efficient mechanism for uploading and downloading versions between your computer and someone else's computer - this makes it really easy to backup your work and also to collaborate with others.

Git's terminology for this is:

- **working copy** - a folder on your computer whose versions you are tracking
- **repository** - a hidden folder named `.git` inside the working copy which is keeping all the versions of the working copy that you have saved
- **remote** - a repository on someone else's computer, you can download versions from it and upload versions to it

That's really all there is!  From here, you can start in a couple of ways:

- You can [open an existing working copy](open-working-copy/open-working-copy.md) if you've already got one setup
- You can [clone an existing repository](clone/clone.md)
- You can [init a brand new repository](init/init.md) to start a new project
