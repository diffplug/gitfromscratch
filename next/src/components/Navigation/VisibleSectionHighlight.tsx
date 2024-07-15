import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { useInitialValue } from '@/lib/useInitialValue'
import clsx from 'clsx/lite'
import { motion } from 'framer-motion'

interface VisibleSectionHighlightProps {
  pathname: string
  pageLinkRefMap: { [href: string]: HTMLElement }
}

export function VisibleSectionHighlight({
  pathname,
  pageLinkRefMap,
}: VisibleSectionHighlightProps) {
  let [_, visibleSections] = useInitialValue(
    [
      useSectionStore((s: any) => s.sections),
      useSectionStore((s: any) => s.visibleSections),
    ],
    useIsInsideMobileNavigation(),
  )

  let top = 0
  let height = 0

  const activeNavItem = pageLinkRefMap[pathname]
  if (activeNavItem) {
    if (visibleSections[0] === '_top' || visibleSections.length === 0) {
      height = activeNavItem.offsetHeight
      top = activeNavItem.offsetTop
    } else {
      top = document.getElementById(`${visibleSections[0]}-li`)!.offsetTop
    }
    for (let i = 0; i < visibleSections.length; i++) {
      if (visibleSections[i] === '_top') continue
      height += document.getElementById(
        `${visibleSections[i]}-li`,
      )!.offsetHeight
    }
    height += 8
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
