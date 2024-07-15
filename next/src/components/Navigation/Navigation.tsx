import clsx from 'clsx/lite'
import dynamic from 'next/dynamic'
import { navigation } from './config'

const NavGroup = dynamic(
  () => import('./NavGroup').then((module) => module.NavGroup),
  { ssr: false },
)

interface NavigationProps {
  className?: string
}

export function Navigation(props: NavigationProps) {
  return (
    <nav {...props}>
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
