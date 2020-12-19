
//+++++project c20

var car, wall;
var speed,weight;
var deform;

function setup()
{
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,10,height/2);
  wall.shapeColor = color(80,80,80);

  car.velocityX =   speed;

}
function draw()
{
  background("black");
  drawSprites();

  if(wall.x - car.x < (car.width/2 + wall.width/2))
  {
    deform = (0.5*weight*speed*speed)/22500;
    car.velocityX =0;
    if(deform <100)
    {
      car.shapeColor ="green";
      fill("white");
      textSize(15);
      text("Rating : A - ",300,200);
    }
    if(deform >100 && deform <180)
    {
      car.shapeColor ="yellow";
      fill("white");
      textSize(15);
      text("Rating : B+ ",300,200);
    }
    if(deform >180)
    {
      car.shapeColor ="red";
      fill("white");
      textSize(15);
      text("Rating : -D ",300,200);
    }

  }


}