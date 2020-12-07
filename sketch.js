
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Ball(100,360,15);
ground=new Ground(800,490,1600,30);
d1=new Dustbin(1200,465,170,20);
d2= new Dustbin(1110,415,20,120);
d3= new Dustbin(1295,415,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 ground.display();
 d1.display();
 d2.display();
 d3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-35});
	}
}


