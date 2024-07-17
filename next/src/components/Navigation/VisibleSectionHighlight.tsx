import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { useInitialValue } from '@/lib/useInitialValue'
import clsx from 'clsx/lite'
import { motion } from 'framer-motion'
import { useLayoutEffect, useState } from 'react'

interface VisibleSectionHighlightProps {
  sectionIdsToBoxes: { [key: string]: { height: number; top: number } }
}

export function VisibleSectionHighlight({
  sectionIdsToBoxes,
}: VisibleSectionHighlightProps) {
  let visibleSections = useInitialValue(
    useSectionStore((s: any) => s.visibleSections),
    useIsInsideMobileNavigation(),
  )

  const [height, setHeight] = useState<number>(0)
  const [top, setTop] = useState<number>(0)

  useLayoutEffect(() => {
    let _height: number = 0
    if (visibleSections.length && Object.keys(sectionIdsToBoxes).length > 0) {
      const _top = sectionIdsToBoxes[visibleSections[0]].top
      for (let i = 0; i < visibleSections.length; i++) {
        _height += sectionIdsToBoxes[visibleSections[i]].height
      }
      _height += 8
      setHeight(_height)
      setTop(_top)
    }
  }, [sectionIdsToBoxes, visibleSections])

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
