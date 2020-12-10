  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
  const MouseConstraint = Matter.MouseConstraint;
  const Mouse = Matter.Mouse; 


  var ball, ball2, ball3, ball4, ball5;
  var slings, slings2, slings3,slings4, slings5;



function setup() {
  canvas =createCanvas(windowWidth/2, windowHeight/0.5);
  engine = Engine.create();
  world = engine.world;
  
let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
  mouse: canvasmouse
};

msConstraint = MouseConstraint.create(engine,options);
World.add(world, msConstraint);





   ball = new Particle(200,300,30);
   ball2 = new Particle(250,300,30);
   ball3 = new Particle(300,300,30);
   ball4 = new Particle(350,300,30);
   ball5 = new Particle(400,300,30);

   slings = new Sling(ball.body, {x:200, y:200} ); 
   slings2 = new Sling(ball2.body, {x:250, y:200} ); 
   slings3 = new Sling(ball3.body, {x:300, y:200} ); 
   slings4 = new Sling(ball4.body, {x:350, y:200} ); 
   slings5 = new Sling(ball5.body, {x:400, y:200} ); 



}



 


function draw() {
  background(247,152,98);
  //background(215,114,44);
  //background(136,48,0);
  textSize(20);
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


 slings.display();
 slings2.display();
 slings3.display();
 slings4.display();
 slings5.display();






  Engine.update(engine);
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}