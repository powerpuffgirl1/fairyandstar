var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic: true
}

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.x = 550;
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.15;

	star = createSprite(650,30,options);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

 keyPressed();

 if(starBody.position.y > 480){
	isStatic=true;
	Matter.Body.setStatic(starBody,isStatic);
	fairy.x=580;
 }

  drawSprites();

}

function keyPressed() {
	//write code here

    if(keyDown("LEFT_ARROW")){
		fairy.x = fairy.x - 5;
	}

	if(keyDown("RIGHT_ARROW")){
		fairy.x = fairy.x + 5;
	}

	if(keyDown("DOWN_ARROW")) {

    isStatic=false;
	Matter.Body.setStatic(starBody,isStatic);
	star.x = starBody.position.x;
	star.y = starBody.position.y;
	}
	


}