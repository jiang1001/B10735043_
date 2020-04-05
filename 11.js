Mover(){ a,b,c,d,e};

function setup() {
  // put setup code here
  createCanvas(600,600);

   a = new Mover(300,250,-2,-1);
   b = new Mover(500,50,2,-3,20);
   c = new Mover(400,200,3,2,20);
   d = new Mover(250,320,-2,2,20);
   e = new Mover(150,430,4,-2,20);

a.mc=color(150,0,0);
}

function draw() {

	background(150,150,20);
   a.update();
   b.update();
   c.update();
   d.update();
   e.update();

 
   
   // step 4 = 動態修改屬性
   b.mc=color(0,0,150+cos(map(frameCount%70,0,70,-PI,PI))*100);
   a.mc=color(0,150+sin(map(frameCount%140,0,140,-PI,PI))*100,0);

//OOP類別的概念
class Mover {
   //貼上宣告內容
   float x;
   float y;
   float xspeed;
   float yspeed;

   // step 1 = 加入顏色屬性
   color mc = color(255,255,255);
   
   var trigger = 48; // 互動半徑
   var nsize = 36;
   var rotate = 0 ;
   
   float rval = random(-PI,PI); // 每物件設定亂數的衛星旋轉起始值
   
   //建構類別
   Mover(float x_, float y_, float xspeed_, float yspeed_, String ic) {
      x = x_;
      y = y_;
      xspeed=xspeed_;
      yspeed=yspeed_;      
      icon = loadImage(ic);      
   }
   // 規則一移動
function rule1() {
      x=x+xspeed;
      y=y+yspeed;
   }
   // 規則二彈跳
function rule2(){
      if ((x>width-nsize/2) || (x<nsize/2)){
         xspeed = -1 * xspeed;
      }
      if ((y>height-nsize/2) || (y<nsize/2)){
         yspeed = -1 * yspeed;
      }
   }
   //if(mousePressed){}
   // 規則顯示
   // 一般顯示
function ruleShow(){       
      pushMatrix();
        translate(x, y);
        rotate(atan2(yspeed,xspeed));       
        imageMode(CENTER);
        tint(mc);
        image(icon, 0, 0, nsize,nsize);
      popMatrix();
      ruleSubShow();
   }  
   // 衛星顯示
function ruleSubShow(){
      pushMatrix();
        translate(x, y);
        rotate(rval+radians(frameCount));  // 旋轉       
        imageMode(CENTER);
        tint(mc);
        stroke(50,50,50);
        line(0,0,nsize*2,0); // 注意起始點位置
        circle(nsize*2, 0, nsize/2); // 注意起始點位置
      popMatrix();
   }
   // 顯示內容
function update() { 
    rule1();
    rule2();
    ruleShow();
   }
  // put drawing code here

}
