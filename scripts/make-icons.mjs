// Generates the PWA icons (Macedonian sun: gold disc and rays on red)
// as raw PNGs using only node's zlib — no image dependencies.
import zlib from "node:zlib";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outDir = path.join(
  path.dirname(path.dirname(fileURLToPath(import.meta.url))),
  "public",
  "icons"
);
fs.mkdirSync(outDir, { recursive: true });

const CRC_TABLE = new Int32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c;
});

function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function makePng(size, pixelAt) {
  const raw = Buffer.alloc(size * (size * 3 + 1));
  for (let y = 0; y < size; y++) {
    const rowStart = y * (size * 3 + 1);
    raw[rowStart] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      const [r, g, b] = pixelAt(x, y);
      const p = rowStart + 1 + x * 3;
      raw[p] = r;
      raw[p + 1] = g;
      raw[p + 2] = b;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const RED = [210, 0, 0];
const GOLD = [255, 230, 0];

// Macedonian sun: a gold disc with eight rays on a red field.
function flagPixel(size) {
  const c = size / 2;
  const disc = size * 0.17;
  return (x, y) => {
    const dx = x + 0.5 - c;
    const dy = y + 0.5 - c;
    const d = Math.hypot(dx, dy);
    if (d <= disc) return GOLD;
    // Rays: eight wedges centred on the axes and diagonals, tapering outward.
    const angle = Math.atan2(dy, dx);
    const sector = Math.PI / 4;
    const off = Math.abs(((angle % sector) + sector) % sector - sector / 2);
    const halfWidth = (disc * 0.55) * (1 - (d - disc) / (size * 0.75));
    if (d > disc && halfWidth > 0 && d * Math.sin(off) < halfWidth) return GOLD;
    return RED;
  };
}

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  fs.writeFileSync(path.join(outDir, name), makePng(size, flagPixel(size)));
  console.log("wrote", name);
}
