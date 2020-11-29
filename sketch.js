
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var engine,world,paper,ground,dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(800,680,1600,10,{isStatic: true});
	World.add(world,ground);
	paper = new Paper(100,660,70);
	dustbin=new Dustbin(1080,625,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  fill("yellow");
  rect(800,680,1600,10);

  paper.display();
  dustbin.display(); 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



