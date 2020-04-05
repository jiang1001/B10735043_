function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  var cx = map(mouseX,0,width,0,255);
  var cy = map(mouseY,0,height,0,255);
  var nsize = width/8+cos(mouseY*PI/180)*width/16;

  fill(cx,cy,150,150);
  circle(mouseX,mouseY,nsize);
  //以mosuseX跟Y做一個nsize的圓
}