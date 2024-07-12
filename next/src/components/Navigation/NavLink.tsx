import { Tag } from '@/components/Tag'
import clsx from 'clsx/lite'
import Link from 'next/link'
import { forwardRef } from 'react'

interface NavLinkProps {
  href: string
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
  children: React.ReactNode
}

function NavLink(
  { href, tag, active, isAnchorLink = false, children }: NavLinkProps,
  ref: React.Ref<HTMLAnchorElement>,
) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
      )}
    >
      <span ref={ref}>{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

export default forwardRef(NavLink)
