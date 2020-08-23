
var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(200,200,50,30);
  //15 + 25 = 40

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
}


function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y =  mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){

      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);
    }




  drawSprites();
}