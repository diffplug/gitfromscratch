import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import clsx from 'clsx/lite'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'

function useInitialValue(value: any, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

interface NavLinkProps {
  href: string
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
  children: React.ReactNode
}

function NavLink({
  href,
  tag,
  active,
  isAnchorLink = false,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

interface VisibleSectionHighlightProps {
  group: NavigationGroup
  pathname: string
}

function VisibleSectionHighlight({
  group,
  pathname,
}: VisibleSectionHighlightProps) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s: any) => s.sections),
      useSectionStore((s: any) => s.visibleSections),
    ],
    useIsInsideMobileNavigation(),
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0],
    ),
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

interface ActivePageMarkerProps {
  group: NavigationGroup
  pathname: string
}

function ActivePageMarker({ group, pathname }: ActivePageMarkerProps) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex =
    group.links.findIndex((link) => link.href === pathname) ?? 0
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-emerald-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

interface NavGroupProps {
  group: NavigationGroup
  className?: string
}

function NavGroup({ group, className }: NavGroupProps) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s: any) => s.sections)],
    isInsideMobileNavigation,
  )

  let isActiveGroup =
    group.group.href === router.pathname ||
    (group.links &&
      group.links.findIndex((link) => link.href === router.pathname) !== -1)

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        <Link
          href={group.group.href}
          aria-current={isActiveGroup ? 'page' : undefined}
          className={''}
        >
          {group.group.title}
        </Link>
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && group.group.href !== router.pathname && (
            <ActivePageMarker group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links?.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section: any) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

interface NavigationLink {
  title: string
  href: string
}

interface NavigationGroup {
  group: NavigationLink
  links: NavigationLink[]
}

export const navigation: NavigationGroup[] = [
  {
    group: { title: 'Git from scratch', href: '/' },
    links: [],
  },
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

export function Navigation() {
  return (
    <nav>
      <ul role="list">
        {navigation.map((group, groupIndex) => (
          <NavGroup
            key={group.group.title}
            group={group}
            className={clsx(groupIndex === 0 && 'md:mt-0')}
          />
        ))}
      </ul>
    </nav>
  )
}
