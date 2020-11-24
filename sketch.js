
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.

	roof = new Roof(405,300,300,20)
	bob1 = new Bob(300,500,20)
	bob2 = new Bob(350,500,20)
	bob3 = new Bob(400,500,20)
	bob4 = new Bob(450,500,20)
	bob5 = new Bob(500,500,20)

	rope=new Rope(bob1.body, roof.body,-100)

	
  
}


function draw() {
	background("white")
  rectMode(CENTER);

  Engine.update(engine);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
 
}



