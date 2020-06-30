//GLOBAL VARIABLES.
var wall,thickness;
var bullet,weight,speed;

function setup() {
  // RESETTING THE CANVAS.
  createCanvas(1600,400);
  //GIVING THE RANDOM TO SPEED , WEIGHT AND THICKNESS.
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  //CREATING THE SPRITES BULLET AND WALL , GIVING THE VELOCITY X AS SPEED TO BULLET AND COLOR AS WHITE.
  bullet = createSprite(50, 200, 20, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color (80,80,80);
}

function draw() {
  background(0,0,0);  
// MAKING THE CHANGE IN COLOR OF WALL WHEN THE DAMAGE IS LESS OR GREATER THAN 10 WITH CALUCULATION.
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage < 10)
    {
      wall.shapeColor = color(255,0,0);
    }


    if(damage > 10)
    {
      wall.shapeCOlor = color(0,255,0);
    }

  }
  drawSprites();
}

//CREATING A FUNCUTION HAS COLLIDED.
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
return true
  }
  return false;
}

