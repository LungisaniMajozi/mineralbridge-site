const { Jimp } = require('jimp');

async function main() {
  try {
    const image = await Jimp.read('public/logo1.png');
    const colors = {};
    for (let x = 0; x < image.bitmap.width; x+=2) {
      for (let y = 0; y < image.bitmap.height; y+=2) {
        const hex = image.getPixelColor(x, y);
        const r = (hex >> 24) & 255;
        const g = (hex >> 16) & 255;
        const b = (hex >> 8) & 255;
        const a = hex & 255;
        
        if (a < 128) continue; // transparent
        
        // Approximate to nearest 10 to group similar shades
        const round = v => Math.round(v/10)*10;
        const key = `${round(r)},${round(g)},${round(b)}`;
        colors[key] = (colors[key] || 0) + 1;
      }
    }
    const sorted = Object.entries(colors).sort((a,b) => b[1] - a[1]);
    console.log('Dominant colors (R,G,B):');
    sorted.slice(0, 8).forEach(item => console.log('RGB:', item[0], 'Hits:', item[1]));
  } catch(e) {
    console.error('Error:', e.message);
  }
}
main();
