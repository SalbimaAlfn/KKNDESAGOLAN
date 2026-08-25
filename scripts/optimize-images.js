import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const assetsDirectory = path.join(currentDirectory, '..', 'src', 'assets');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png']);
const maxDimension = 1200;
const quality = 82;

const statistics = {
  processed: 0,
  skipped: 0,
  failed: 0,
  originalBytes: 0,
  webpBytes: 0,
};

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function getActivityFolders() {
  const entries = await fs.readdir(assetsDirectory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && (entry.name === 'albumphoto' || /^week\d+$/i.test(entry.name)))
    .map((entry) => path.join(assetsDirectory, entry.name));
}

async function findSourceImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const filePath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findSourceImages(filePath);
      return supportedExtensions.has(path.extname(entry.name).toLowerCase()) ? [filePath] : [];
    }),
  );
  return files.flat();
}

async function optimizeImage(inputPath) {
  const outputPath = path.join(path.dirname(inputPath), `${path.basename(inputPath, path.extname(inputPath))}.webp`);
  const relativePath = path.relative(assetsDirectory, inputPath);

  try {
    await fs.access(outputPath);
    console.log(`SKIP  ${relativePath} (WebP already exists)`);
    statistics.originalBytes += (await fs.stat(inputPath)).size;
    statistics.webpBytes += (await fs.stat(outputPath)).size;
    statistics.skipped += 1;
    return;
  } catch {
    // The expected case: create the WebP output below.
  }

  try {
    const originalSize = (await fs.stat(inputPath)).size;
    const image = sharp(inputPath).rotate();
    const metadata = await image.metadata();

    await image
      .resize({ width: maxDimension, height: maxDimension, fit: 'inside', withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      .toFile(outputPath);

    const webpSize = (await fs.stat(outputPath)).size;
    const outputMetadata = await sharp(outputPath).metadata();
    statistics.processed += 1;
    statistics.originalBytes += originalSize;
    statistics.webpBytes += webpSize;

    const savings = ((originalSize - webpSize) / originalSize) * 100;
    console.log(`DONE  ${relativePath}`);
    console.log(`      ${metadata.width}x${metadata.height} ${formatBytes(originalSize)} -> ${outputMetadata.width}x${outputMetadata.height} ${formatBytes(webpSize)} (${savings.toFixed(1)}% saved)`);
  } catch (error) {
    statistics.failed += 1;
    console.error(`FAIL  ${relativePath}: ${error.message}`);
  }
}

async function main() {
  const folders = await getActivityFolders();
  console.log(`Optimizing activity images in: ${folders.map((folder) => path.basename(folder)).join(', ') || '(none found)'}`);
  console.log(`Settings: WebP quality ${quality}; max ${maxDimension}x${maxDimension}; no enlargement.\n`);

  for (const folder of folders) {
    const images = await findSourceImages(folder);
    console.log(`${path.relative(assetsDirectory, folder)}/: ${images.length} source image(s)`);
    await Promise.all(images.map((imagePath) => optimizeImage(imagePath)));
  }

  const savings = statistics.originalBytes
    ? ((statistics.originalBytes - statistics.webpBytes) / statistics.originalBytes) * 100
    : 0;

  console.log('\nSummary');
  console.log(`Processed: ${statistics.processed}`);
  console.log(`Skipped: ${statistics.skipped}`);
  console.log(`Failed: ${statistics.failed}`);
  console.log(`Original total: ${formatBytes(statistics.originalBytes)}`);
  console.log(`WebP total: ${formatBytes(statistics.webpBytes)}`);
  console.log(`Storage saved: ${savings.toFixed(1)}%`);
}

main().catch((error) => {
  console.error(`Unexpected optimizer error: ${error.message}`);
  process.exitCode = 1;
});
