const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash,box1,box2,box3,ground,dustbinImage;

function preload()
{
	dustbinImage=loadImage("dustbin.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	trash = new Trash(200,550,20);
	box1 = new Dustbin(650,680,100,10);
	box2 = new Dustbin(600,660,10,50);
	box3 = new Dustbin(700,660,10,50);
	ground = new Ground(0,690,1600,10);
	

	
	
  
}


function draw() {
	background("white");
	Engine.update(engine);
	trash.display();
	box1.display();
	box2.display();
	box3.display();
	ground.display();
	image(dustbinImage,585,585,125,100)
}

function keyPressed(){
	if(keyCode===UP_ARROW){ 
		Matter.Body.applyForce(trash.body,trash.body.position,{x:55,y:-55});
		
	}
	
}
	
	
  
 
 


