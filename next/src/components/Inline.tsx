import { assetPathFor, assetW, assetH } from '../assets/assets.mjs'

interface InlineProps {
  src: string
  alt: string
}

/**
 * Seems like you should be able to use the `next/image` inside a
 * .mdx file, but it doesn't work
 */
export function Inline(props: InlineProps) {
  return <img src={assetPathFor(props.src)} alt={props.alt} className={'inline m-0'} width={assetW(props.src)} height={assetH(props.src)} />
}
