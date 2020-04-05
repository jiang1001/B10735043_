
function setup() {
  // put setup code here
  createCanvas(600,600);
background(100,100,100);

}

/*function draw() {
  var square = createShape(RECT, 0, 0, mouseY*3/5, mouseX);
  var nsize=map(mouseX,0,width,50,120);
    square.setFill(color(100,mouseY*3/5,255-nsize));
   stroke(255-mouseX,0,mouseY);
   shape(square,mouseX,mouseY);
    }

  var cx = map(mouseX,0,width,0,255);
  var cy = map(mouseY,0,height,0,255);
  var nsize = width/8+cos(mouseY*PI/180)*width/16;

  fill(cx,cy,150,150);
  circle(mouseX,mouseY,nsize);
    */
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);

/*function draw() {


    ctx.fillRect(mouseX,mouseY,100,100);
    ctx.strokeRect(mouseX-20, mouseY-20, 100, 100);
    ctx.clearRect(mouseX, mouseY, 0, 0);
  }



