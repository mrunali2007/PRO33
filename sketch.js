const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowflex = [];

function preload(){
  backgroundImage = loadImage("snow2.jpg");
}

function setup() {

  createCanvas(1360,620);
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(680,0,50,50);

  Engine.run(engine);
}

function draw() {
 
  background(backgroundImage); 
  Engine.update(engine); 
  if(frameCount % 20 === 0){
  snowflex.push(new Snow(random(10,1350),10,60,60))
  }
 
  for(var i=0; i<snowflex.length; i++){
  snowflex[i].display()
 }

  snow.display();
  drawSprites();
}