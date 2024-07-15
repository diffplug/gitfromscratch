import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { useInitialValue } from '@/lib/useInitialValue'
import clsx from 'clsx/lite'
import { motion } from 'framer-motion'

interface VisibleSectionHighlightProps {
  pathname: string
  navItemRefMap: { [href: string]: HTMLElement }
  sectionRefMap: { [id: string]: HTMLElement }
}

export function VisibleSectionHighlight({
  pathname,
  navItemRefMap,
  sectionRefMap,
}: VisibleSectionHighlightProps) {
  let [_, visibleSections] = useInitialValue(
    [
      useSectionStore((s: any) => s.sections),
      useSectionStore((s: any) => s.visibleSections),
    ],
    useIsInsideMobileNavigation(),
  )

  const activeNavItem = navItemRefMap[pathname]
  let height = 0
  let top = 0
  if (activeNavItem) {
    if (visibleSections.length === 0) {
      top = activeNavItem?.offsetTop
      height = activeNavItem?.offsetHeight + 8
    } else {
      if (visibleSections[0] === '_top') {
        top = activeNavItem?.offsetTop
      } else {
        top = sectionRefMap[visibleSections[0]]?.offsetTop
        console.log({ here: top })
      }
      for (let i = 0; i < visibleSections.length; i++) {
        height += sectionRefMap[visibleSections[i]]?.offsetHeight
      }
      height += 8
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: 'easeInOut' },
        y: top,
      }}
      exit={{ opacity: 0 }}
      className={clsx(
        'absolute',
        'top-[-4px]',
        'bottom-[4px]',
        'left-[-8px]',
        'right-0',
        'bg-indigo-600/30',
        'dark:bg-white/2.5',
      )}
      style={{
        borderRadius: 8,
        height,
      }}
    />
  )
}
