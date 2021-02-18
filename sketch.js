
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
//var world;

function setup(){
    var canvas =createCanvas(1600, 700);
    engine=Engine.create();
    world=engine.world;

    ground1=new ground(800,650,160,100);

    //Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background(154,233,237);
    Engine.update(engine);

    ground1.display();
    
    //drawSprites();
   
  }