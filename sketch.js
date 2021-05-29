var player,player_damage,player_running,player_jump,player_idle,player_shooting,player_dead
var backGround,background_image;
var obstacle_img,obstaclesGroup

function preload(){
player_damage = loadImage("damage03.png");
player_running = loadImage("run5.png");
player_idle = loadImage("idle01.png");
player_jump = loadImage("jump02.png");
player_shooting = loadImage("shooting1.02.png")
background_image = loadImage("forest-background.png")
obstacle_img = loadImage("stone.png")
}

function setup() {
  createCanvas(1600,800);
  player = createSprite(200, 600, 50, 50);
  player.addImage("player_idle",player_idle)
  player.scale = 3.5;

  backGround = createSprite(100,320,1200,800);
  backGround.addImage("background_image",background_image);
  backGround.scale = 3.5;  
  backGround.velocityX = -2;
}

function draw() {
  background("forest-background.png");
  if(backGround.x < 290){
    backGround.x = background.width*2
  }
  player.depth = backGround.depth;
  player.depth = player.depth+1
  console.log(backGround.depth)  
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
