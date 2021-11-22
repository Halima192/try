
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pt,bgImg ;
var player,coins,bee1;
function preload()
{
background1=loadImage("land.png")
land=loadImage("texture_21.png")
bee=loadImage("monster_08.png")
ring=loadImage("portal_orange.png")
bee_running =loadAnimation("spike.jpg","spike_bot2.jpg")

}
//845,301
function setup() {
	createCanvas(windowWidth, windowHeight);
pt=createSprite(40,600,270,20)
player=createSprite(89,537,20,100)
player.addImage(bee)
player.scale=0.3
pt2=createSprite(550,530,600,20)
pt3=createSprite(350,410,400,20)
pt4=createSprite(250,300,500,20)
pt5=createSprite(72,150,270,20)
pt5=createSprite(580,200,200,20)
pt5=createSprite(580,200,200,20)
pt7=createSprite(845,301,200,20)
pt8=createSprite(957,427,200,20)
//coins//944,396
fill("pink")
coins = createSprite(207,268,20,20);

coins2 = createSprite(700,500,20,20)
coins3 = createSprite(390,499,20,20);
coins4 = createSprite(532,499,20,20);
coins5 = createSprite(491,379,20,20);
coins6 = createSprite(390,267,20,20);
coins7= createSprite(823,266,20,20);
coins8 = createSprite(301,378,20,20);

//beeee
bee1=createSprite(577,174,20,20)
bee1. addAnimation("Moving",bee_running);

bee2=createSprite(947,398,20,20)


portal=createSprite(99,120,20,20)
portal.addImage(ring)
portal.scale=0.5


	engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.

	Engine.run(engine);
	bgImg = background1;
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  drawSprites();
  player .collide( pt);
  if(keyDown("space") &&player.y>=96) {
	player.velocityY =-2;
}    

if(keyDown("RightArrow")&&player.x>32){
	player.velocityX=2
}
if(keyDown("leftArrow")&&player.x>32){
	player.velocityX=-2
}
console.log(player)


//collect


if(coins.isTouching(player)) {
	coins.destroyEach();
	
  }

  if(coins2.isTouching(player)) {
	coins2.destroyEach();
	
  }



  if(coins3.isTouching(player)) {
	coins3.destroyEach();
	
  }

  if(coins4.isTouching(player)) {
	coins4.destroyEach();
	
  }



  if(coins5.isTouching(player)) {
	coins5.destroyEach();
	
  }



  if(coins6.isTouching(player)) {
	coins6.destroyEach();
	
  }


  if(coins7.isTouching(player)) {
	coins7.destroyEach();
	
  }


  if(coins8.isTouching(player)) {
	coins8.destroyEach();
	
  }















}



