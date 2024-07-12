import clsx from 'clsx/lite'
import { navigation } from './config'
import { NavGroup } from './NavGroup'

interface NavigationProps {
  className?: string;
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
