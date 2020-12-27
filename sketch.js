
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var world,engine,body;
var rope1,rope2,rope3,rope4,rope5;
var roof,bodies;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
/*function preload()
{
	
}*/

function setup() {
	createCanvas(1400,700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	//ground=new Ground(width/2,780,1000,20);
    roof=new Roof(width/2,150,250,20);
    
    
  bobDiameter=50;

  startBobPositionX = width/2;
  startBobPositionY = height/4+300;
  
  bobObject1=new Bob(startBobPositionX -bobDiameter*2,startBobPositionY,bobDiameter);
   bobObject2=new Bob(startBobPositionX -bobDiameter,startBobPositionY,bobDiameter);
    bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
    bobObject4=new Bob(startBobPositionX + bobDiameter,startBobPositionY,bobDiameter);
    bobObject5=new Bob(startBobPositionX + bobDiameter*2,startBobPositionY,bobDiameter);
    
  rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
  rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
  rope3=new Rope(bobObject3.body,roof.body,0,0);
  rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
  rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
  Engine.run(engine);
  
}


function draw() {
  background(76,60,296);
  Engine.update(engine); 
	 rectMode(CENTER);
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display(); 
   bobObject5.display();
	 roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
     drawSprites();
   //  keyPressed();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-130,y:130})
}
}








