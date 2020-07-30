var car,wall

var speed,weight

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,95);
  weight = random(400,1500);
  
  car = createSprite(50,200,50,50);
  car.weight = weight
  wall = createSprite(1500,200,60,height/2);

  wall.shapeColor = (rgb(80,80,80));
  
  car.velocityX = speed;
}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
   var deformation = 0.5*weight*speed*speed/22500;
   car.collide(wall)
   if(deformation < 100){
     car.shapeColor = (rgb(0,255,0));
   }
    if(100<deformation && deformation<180){
     car.shapeColor = (rgb(230,230,0));
   }
   if(deformation>180){
     car.shapeColor = (rgb(255,0,0));
   }
  }
  drawSprites();
}

