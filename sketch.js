var img;
function preload() {
  img = loadImage("assets/example1.jpg");
}
function setup() {
  createCanvas(1000,1000)
  image(img, 0, 0);
  loadPixels();
  for(var i=0;i<pixels.length;i+=4) {
    if(pixels[i] > 185) { 
      pixels[i] = 125; //r
      pixels[i+1] = 0; //g
      pixels[i+2] = 0; //b
      }else{
        pixels[i] = 0; //r
        pixels[i+1] = 0; //g
        pixels[i+2] = 100; //b
      }
    }
    
  updatePixels();
}