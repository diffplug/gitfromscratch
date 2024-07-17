import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { lora, spectral } from '@/lib/fonts'
import { remToPx } from '@/lib/remToPx'
import { useInitialValue } from '@/lib/useInitialValue'
import clsx from 'clsx/lite'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavigationGroup } from './config'
import NavLink from './NavLink'

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
          className={`${lora.className} relative block`}
        >
          {group.group.title}{' '}
          {group.group.href === router.pathname && (
            <div
              className={clsx(
                'absolute',
                'top-[-4px]',
                'bottom-[-4px]',
                'left-[-8px]',
                'right-0',
                'bg-indigo-600/30',
                'dark:bg-white/2.5',
                'rounded-[8px]',
              )}
            />
          )}
        </Link>
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5" />
        <ul role="list" className="border-l border-transparent">
          {group.links?.map((link) => (
            <motion.li
              key={link.href}
              layout="position"
              className={`${spectral.className}`}
            >
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
                {link.href === router.pathname && (
                  <div
                    className={clsx(
                      'absolute',
                      'top-[-4px]',
                      'bottom-[-4px]',
                      'left-[-16px]',
                      'right-0',
                      'bg-indigo-600/30',
                      'dark:bg-white/2.5',
                      'rounded-[8px]',
                    )}
                  />
                )}
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
