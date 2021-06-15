const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var world,engine;
var bg;
var snowFlakes = []

function preload(){

  bg = loadImage("snow3.jpg");

}

function setup(){

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

}

function draw(){

  background(bg);

  Engine.update(engine)

  if(frameCount % 15 === 0){
    snowFlakes.push(new Snow(random(10, 790),10,10));
  }  

  for (var s = 0; s < snowFlakes.length; s++) {
    snowFlakes[s].display();
  }

  drawSprites();

}