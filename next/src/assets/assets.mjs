import assetsIndex from './assets-index.json' assert { type: 'json' };

export function assetPathFor(asset) {
    if (asset.startsWith('/')) {
        throw Error(`Asset should not start with '/': ${asset}`)
    }
    if (asset.indexOf("://") != -1) {
        throw Error(`Asset should not contain '://': ${asset}`)
    }

    if (!assetsIndex.assets[asset]) {
        throw Error(`No such asset found: ${asset}`)
    }

    const assetPrefix = process.env.NEXT_PUBLIC_BUILD_PREFIX || '';

    // TODO: Implement asset fingerprinting
    // const fingerprint = getAssetFingerprint(asset);

    // TODO: Track asset usage
    // trackAssetUsage(asset);

    return `${assetPrefix}/${asset}`;
}

function assertNumber(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error(`Expected to be a number: ${n}`);
    }
    return n
}
function isHiDpi(asset) {
    return asset.indexOf("_2x.") != -1
}
export function assetW(asset) {
    if (!assetsIndex.assets[asset]) {
        throw new Error(`Cannot get width - no such asset found: ${asset}`)
    }
    const raw = assertNumber(assetsIndex.assets[asset].width)
    return isHiDpi(asset) ? raw / 2 : raw
}
export function assetH(asset) {
    if (!assetsIndex.assets[asset]) {
        throw new Error(`Cannot get width - no such asset found: ${asset}`)
    }
    const raw = assertNumber(assetsIndex.assets[asset].height)
    return isHiDpi(asset) ? raw / 2 : raw
}