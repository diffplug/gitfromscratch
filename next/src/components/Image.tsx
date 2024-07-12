import NextImage from 'next/image'

interface ImageProps {
  className: string
  src: string
  alt: string
  width?: number
  height?: number
}

/**
 * Seems like you should be able to use the `next/image` inside a
 * .mdx file, but it doesn't work
 */
export function Image(props: ImageProps) {
  return <NextImage width={16} height={16} {...props} />
}
