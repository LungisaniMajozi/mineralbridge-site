const { Jimp } = require('jimp');

async function main() {
  try {
    const image = await Jimp.read('public/logo1.png');
    const colors = {};
    
    // We only need an approximation, so step by 5 pixels
    for (let x = 0; x < image.bitmap.width; x+=5) {
      for (let y = 0; y < image.bitmap.height; y+=5) {
        const hex = image.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(hex);
        
        // Skip highly transparent pixels
        if (rgba.a < 128) continue;
        
        const key = `${rgba.r},${rgba.g},${rgba.b}`;
        colors[key] = (colors[key] || 0) + 1;
      }
    }
    
    // Sort logic
    const sorted = Object.entries(colors).sort((a,b) => b[1] - a[1]);
    console.log('Dominant solid RGB colors found:');
    sorted.slice(0, 5).forEach(item => console.log('RGB:', item[0], 'Hits:', item[1]));
  } catch(e) {
    console.error('Error:', e.message);
  }
}
main();
