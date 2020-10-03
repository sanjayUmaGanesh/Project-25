
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,danda1,danda2,danda3,ball1,image,dustbin,img;

function preload (){

	img = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	 danda1 = new Metal(900,660,100,90);
	 danda2 = new Metal(880,620,80,180);
	 danda3 = new Metal(920,620,80,180);
	 
	 ground = new Ground(200,height,width,20)

	 ball1 = new ball(280,580);

	 dustbin = createSprite(900,600,20,20);
	 dustbin.addImage("img",img);
	 dustbin.scale = 0.4;
	 

	 //ball1.addImage("image",image);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  danda1.display()
  danda2.display()
  danda3.display()
  ball1.display();
  
  drawSprites();

  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:3,y:-5})  
  }
 
}


