import {
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { lora, spectral } from '@/lib/fonts'
import { remToPx } from '@/lib/remToPx'
import { useInitialValue } from '@/lib/useInitialValue'
import clsx from 'clsx/lite'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { NavigationGroup } from './config'
import NavLink from './NavLink'
import { VisibleSectionHighlight } from './VisibleSectionHighlight'

interface NavGroupProps {
  group: NavigationGroup
  className?: string
}

export function NavGroup({ group, className }: NavGroupProps) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s: any) => s.sections)],
    isInsideMobileNavigation,
  )
  let { isOpen } = useMobileNavigationStore()

  let isActiveGroup =
    group.group.href === router.pathname ||
    (group.links &&
      group.links.findIndex((link) => link.href === router.pathname) !== -1)

  const groupTitleRef = useRef<HTMLAnchorElement>(null)
  const [groupTitleHeight, setGroupTitleHeight] = useState(0)
  const sectionRefMap = useRef(new Map<string, HTMLElement>())
  const [sectionIdsToBoxes, setSectionIdsToBoxes] = useState<{
    [key: string]: { height: number; top: number }
  }>({})

  useLayoutEffect(() => {
    if (isInsideMobileNavigation && !isOpen) return
    setGroupTitleHeight(groupTitleRef.current!.offsetHeight)
    const _sectionIdsToBoxes: {
      [key: string]: { height: number; top: number }
    } = {}
    for (const key of sectionRefMap.current.keys()) {
      const sectionSpan = sectionRefMap.current.get(key)!
      _sectionIdsToBoxes[key] = {
        height: sectionSpan.offsetHeight,
        top: sectionSpan.offsetTop,
      }
    }
    setSectionIdsToBoxes(_sectionIdsToBoxes)
  }, [isOpen])

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        <Link
          ref={groupTitleRef}
          href={group.group.href}
          aria-current={isActiveGroup ? 'page' : undefined}
          className={lora.className}
        >
          {group.group.title}
        </Link>
      </motion.h2>
      <div className="mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (!isInsideMobileNavigation || isOpen) && (
            <VisibleSectionHighlight sectionIdsToBoxes={sectionIdsToBoxes} />
          )}
        </AnimatePresence>
        <div
          style={{ top: groupTitleHeight + remToPx(1) }}
          className="absolute bottom-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <ul role="list" className="border-l border-transparent">
          {group.links?.map((link) => (
            <motion.li
              key={link.href}
              layout="position"
              className={`${spectral.className}`}
            >
              <NavLink
                ref={(el) => {
                  if (el && link.href === router.pathname) {
                    sectionRefMap.current.set('_top', el!)
                  }
                }}
                href={link.href}
                active={link.href === router.pathname}
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
                        ref={(el) => {
                          if (el) sectionRefMap.current.set(section.id, el!)
                        }}
                        key={section.id}
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
