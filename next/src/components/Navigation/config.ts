export interface NavigationLink {
  title: string
  href: string
}

export interface NavigationGroup {
  group: NavigationLink
  links: NavigationLink[]
}

export const navigation: NavigationGroup[] = [
  {
    group: {
      title: "I don't know anything about git or version control",
      href: '/intro',
    },
    links: [
      {
        title: 'Open an existing working copy',
        href: '/intro/open-working-copy',
      },
      { title: 'Clone an existing repository', href: '/intro/clone' },
      { title: 'Init a new repository', href: '/intro/init' },
      { title: 'Make and edit a commit', href: '/intro/commit' },
    ],
  },
  {
    group: {
      title: "I know how to commit, but I don't know how branches work",
      href: '/branches',
    },
    links: [
      {
        title: 'Sticky-notes and paintbrushes',
        href: '/branches/sticky-notes-and-paintbrushes',
      },
      { title: 'Delete a commit, then get it back', href: '/branches/reflog' },
      { title: 'Save work for later', href: '/branches/save-for-later' },
    ],
  },
  {
    group: {
      title: 'I did some work. How do I share it?',
      href: '/share',
    },
    links: [
      { title: 'Establish a connection', href: '/share/remotes' },
      { title: 'Permanent branches (a.k.a. tags)', href: '/share/tags' },
      { title: 'Collaborate on a moving target', href: '/share/branches' },
    ],
  },
  {
    group: {
      title: 'My work can time-travel?',
      href: '/time-travel',
    },
    links: [
      { title: 'The merge', href: '/time-travel/merge' },
      {
        title: 'Patches are the "flux capacitor" of work',
        href: '/time-travel/patch',
      },
      {
        title: 'Move and undo commits and chains of commits',
        href: '/time-travel/cherry-pick-and-rebase',
      },
      {
        title: 'Rewrite history',
        href: '/time-travel/rewrite-history',
      },
    ],
  },
  {
    group: {
      title: 'Epilogue',
      href: '/epilogue',
    },
    links: [
      {
        title: 'Departures from vanilla git',
        href: '/epilogue/departures',
      },
    ],
  },
]
