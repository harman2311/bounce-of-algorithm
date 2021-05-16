function setup() {
  createCanvas(1000,1000);
  fixedRect=createSprite(100, 200, 50, 50);
  fixedRect.shapeColor="purple";
  movingRect=createSprite(900, 200, 50, 150);
  movingRect.shapeColor="purple";
  movingRect.velocityX=-1;
  fixedRect.velocityX=3;
  rect1=createSprite(500,100,50,50);
  rect1.shapeColor="blue";
  rect1.velocityY=3;
  rect2=createSprite(500,900,50,50);
  rect2.shapeColor="green";
  rect2.velocityY=-2;
}

function draw() {
  background("yellow");  
  drawSprites();
  bounceOff(rect1,rect2);
  bounceOff(fixedRect,movingRect)
}
function bounceOff(sprite1,sprite2){
  if(sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2 && 
    sprite2.x-sprite1.x<=sprite1.width/2+sprite2.width/2 ){
      sprite1.velocityX=sprite1.velocityX*(-1);
      sprite2.velocityX=sprite2.velocityX*(-1);
    }
    if(sprite1.y-sprite2.y<=sprite1.height/2+sprite2.height/2 &&
    sprite2.y-sprite1.y<=sprite1.height/2+sprite2.height/2){
    sprite1.velocityY=sprite1.velocityY*(-1);
    sprite2.velocityY=sprite2.velocityY*(-1);
  }
}