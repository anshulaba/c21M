

function setup()
{
 createCanvas(1200,800);
 fixedRect=createSprite(200,200,80,50);
 fixedRect.shapeColor="blue";
 fixedRect.debug=true;

 movingRect=createSprite(300,300,50,80);
 movingRect.shapeColor="blue";
 movingRect.debug=true;

}

function draw()
{
background(180);
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}
else
{
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

}

drawSprites();

}