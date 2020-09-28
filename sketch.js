// declaring variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
var box1Sprite, box2Sprite, box3Sprite;
var box1Body, box2Body, box3Body;

//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//creating canvas
	createCanvas(800, 650);

	rectMode(CENTER);
	
    //creating ground sprite
    groundSprite=createSprite(width/2, 590, width,10);
	groundSprite.shapeColor=color(255);

	//creating boxes
	box1Sprite = createSprite(width/2, 580, 210, 20);
	box1Sprite.shapeColor = "red";

	box2Sprite = createSprite(500, 530, 20, 120);
	box2Sprite.shapeColor = "red";

	box3Sprite = createSprite(300, 530, 20, 120);
	box3Sprite.shapeColor = "red";

	//creating package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//creating helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//creating the engine
	engine = Engine.create();
	world = engine.world;

	//create a package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 1, isStatic:true});
	World.add(world, packageBody);
	

	//Create the boxes
	 box1Body = Bodies.rectangle(width/2, 580, width, 20 , {isStatic:true} );
	 World.add(world, box1Body);

	 box2Body = Bodies.rectangle(500, 530, 20, 120 , {isStatic:true} );
	 World.add(world, box2Body);

	 box3Body = Bodies.rectangle(300, 530, 20, 120 , {isStatic:true} );
	 World.add(world, box3Body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  rectMode(CENTER);
  keyPressed();
  drawSprites();
 
}

//function for dropping the package
function keyPressed()
 { if (keyCode === DOWN_ARROW) { 
	 Matter.Body.setStatic(packageBody,false); 
	} 
}



