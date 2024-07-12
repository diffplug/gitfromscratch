import clsx from 'clsx/lite'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(className, 'prose dark:prose-invert')}
      {...props}
    />
  )
}
