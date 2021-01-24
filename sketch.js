var monkey , monkey_running;
var ground, groundImg;
var bananaImage, bananaGrp;
var obstacleGrp, obstacleImg;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImg = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  bananaGrp = new Group();
  obstacleGrp = new Group();

  
}


function draw() {
  background("white");
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ", score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: ", survivalTime, 100, 50);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(200, 100, 50, 50);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.lifeTime = 200;
    banana.scale = 0.5;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGrp.add(banana);
  }
  
}

function spawnObstacles() {
  if(frameCount % 300===0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.addImage(obstacleImg);
    obstacle.velocityX = -(6 + 3*score/100);
    
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstacleGrp.add(obstacle);
  }
}








