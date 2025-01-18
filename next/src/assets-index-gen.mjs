import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const publicDir = path.join(process.cwd(), 'public');
const allAssets = getAllFiles(publicDir);
const allAssetEntries = allAssets.reduce((acc, file) => {
  const src = path.relative(publicDir, file).replaceAll('\\', '/');
  acc[src] = {
    ext: path.extname(file).toLowerCase().slice(1)
  };
  return acc;
}, {});
const allAssetEntriesWithImageSizes = await Promise.all(Object.entries(allAssetEntries).map(async ([src, asset]) => {
  if (asset.ext === 'png') {
    try {
      const fullPath = path.join(publicDir, src);
      const metadata = await sharp(fullPath).metadata();
      return [src, {
        ...asset,
        width: metadata.width,
        height: metadata.height
      }];
    } catch (error) {
      console.error(`Error processing ${src}:`, error);
      return [src, asset];
    }
  }
  return [src, asset];
}));
const allAssetEntriesWithImageSizesMap = Object.fromEntries(allAssetEntriesWithImageSizes);

function sortKeys(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(sortKeys);
  }
  
  return Object.keys(obj).sort().reduce((sorted, key) => {
    sorted[key] = sortKeys(obj[key]);
    return sorted;
  }, {});
}

fs.writeFileSync(
  path.join(process.cwd(), 'src/assets', 'assets-index.json'),
  JSON.stringify(sortKeys({
    assets: allAssetEntriesWithImageSizesMap
  }), null, 2)
);

console.log('Valid assets list generated successfully.');