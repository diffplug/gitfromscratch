import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { lora, spectral } from '@/lib/fonts'
import { useInitialValue } from '@/lib/useInitialValue'
import clsx from 'clsx/lite'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ActivePageMarker } from './ActivePageMarker'
import { NavigationGroup } from './config'
import NavLink from './NavLink'
import { VisibleSectionHighlight } from './VisibleSectionHighlight'

interface NavGroupProps {
  group: NavigationGroup
  className?: string
}

export function NavGroup({ group, className }: NavGroupProps) {
  const [navItemRefMap, setNavItemRefMap] = useState<{
    [href: string]: HTMLElement
  }>({})
  const [sectionRefMap, setSectionRefMap] = useState<{
    [id: string]: HTMLElement
  }>({})

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
          className={lora.className}
          ref={(el) => {
            el &&
              !navItemRefMap[group.group.href] &&
              setNavItemRefMap({
                ...navItemRefMap,
                [group.group.href]: el,
              })
          }}
        >
          {group.group.title}
        </Link>
      </motion.h2>
      <div className="mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight
              pathname={router.pathname}
              navItemRefMap={navItemRefMap}
              sectionRefMap={sectionRefMap}
            />
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
            <motion.li
              key={link.href}
              layout="position"
              className={`${spectral.className}`}
            >
              <NavLink
                href={link.href}
                active={link.href === router.pathname}
                ref={(el) => {
                  el &&
                    !navItemRefMap[link.href] &&
                    setNavItemRefMap({
                      ...navItemRefMap,
                      [link.href]: el,
                    })
                }}
              >
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
                      <li
                        key={section.id}
                        ref={(el) => {
                          el &&
                            !sectionRefMap[section.id] &&
                            setSectionRefMap({
                              ...sectionRefMap,
                              [section.id]: el,
                            })
                        }}
                      >
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
