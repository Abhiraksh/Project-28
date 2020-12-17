
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,stone,ground,boy_image,tree;

function preload()
{
	//boy_image = loadImage("Project28-Supplement/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,650,1600,20);
	tree = new Tree(1500,650);

	Engine.run(engine);
  
}


function draw() {
  background("cyan");
  drawSprites();
  
  ground.display();

  tree.display();

  
  
 
}



