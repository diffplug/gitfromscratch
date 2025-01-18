import { mdxAnnotations } from 'mdx-annotations'
import { visit } from 'unist-util-visit'
import remarkGfm from 'remark-gfm'
import { assetPathFor, assetW, assetH } from '../assets/assets.mjs'

export function remarkAssetPrefix() {
    return (tree, file) => {
        visit(tree, 'image', (node) => {
            const assetKey = node.url
            node.url = assetPathFor(assetKey)
            node.data = {
                hProperties: {
                    width: assetW(assetKey),
                    height: assetH(assetKey)
                }
            }
        })
    }
}

export const remarkPlugins = [mdxAnnotations.remark, remarkGfm, remarkAssetPrefix]
