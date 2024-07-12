import { remToPx } from '@/lib/remToPx'
import { motion } from 'framer-motion'
import { NavigationGroup } from './config'

interface ActivePageMarkerProps {
  group: NavigationGroup
  pathname: string
}

export function ActivePageMarker({ group, pathname }: ActivePageMarkerProps) {
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
