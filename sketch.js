var fixedRect, movingRect,ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1=createSprite(600,100,30,40);
  ob2=createSprite(50,200,30,40);
  ob3=createSprite(400,200,30,40);
  ob4=createSprite(400,100,30,40);

ob2.velocityX=4;
ob3.velocityX=-4;

ob1.velocityY=4;
fixedRect.velocityY=-4;

ob2.shapeColor = "green";
ob3.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
   if(isTouching(ob4,movingRect)){
    movingRect.shapeColor = "red";
    ob4.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    ob4.shapeColor = "green";
  }
  
  bounceoff(ob2,ob3);
  bounceoff(ob1,fixedRect);
  drawSprites();
}
