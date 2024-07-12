import clsx from 'clsx/lite'
import { navigation } from './config'
import { NavGroup } from './NavGroup'

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
