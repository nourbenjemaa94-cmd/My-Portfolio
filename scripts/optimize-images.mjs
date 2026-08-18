import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const publicDir = path.resolve('public');

await mkdir(publicDir, { recursive: true });

const jobs = [
  { src: 'nour.png', out: 'nour.webp', width: 800, quality: 78 },
  { src: 'nounour.png', out: 'nounour.webp', width: 640, quality: 78 },
];

for (const job of jobs) {
  const input = path.join(publicDir, job.src);
  const output = path.join(publicDir, job.out);
  const info = await sharp(input)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(output);
  console.log(
    `${job.src} -> ${job.out} ${info.width}x${info.height} ${info.size} bytes`,
  );
}
