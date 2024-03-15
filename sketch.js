var img;
const IMG_HEIGHT = 90;
const IMG_WIDTH = 90;
function preload() {
  img = loadImage("t1.jpg")
}
let p = [];


let startX = -40;
let startY = -41;
let marginX = 7;
let marginY = 7;
let fx = 0;
let fy = 0;
c = 0;

function setup() {
  createCanvas(window.innerWidth, 560);
  noLoop()
  image(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);

  for (let yOffset = 0; yOffset < IMG_HEIGHT; yOffset++) {
    for (let xOffset = 0; xOffset < IMG_WIDTH; xOffset++) {
      let pixel = get(xOffset, yOffset)
    /*
    for png image
      if (pixel[3] === 255) {
        p.push('1');
      } else {
        p.push('0');
      }
      */
     p.push(pixel);
    }
    p.push('2');
  }
  background(0)
 // image(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);

  for (let i = 0; i < p.length; i++) {
    const currentPixel = p[i];
    fx++;
    let ch = "@"
    //if (currentPixel === '0') {
      text(ch, startX + (marginX * fx), startY + (marginY * fy));
      fill(currentPixel[0], currentPixel[1], currentPixel[2],currentPixel[3])
      c++;
    //}
    if (currentPixel === '2') { fy++; fx = 0; }
  }
}

