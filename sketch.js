const Engine = Matter.Engine;
const World = Matter. World;
const Bodies = Matter.Bodies;

var engine,world;
var canvas;
var ground;
var ball;
function setup() {
  engine = Engine.create();
  world = engine.world;

  canvas = createCanvas(800,400);
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle (400,400,800,10,ground_options);
  World.add (world,ground);
  var ball_options = {
    restitution:1.0
  }
  ball = Bodies.circle (400,50,10,ball_options)
  World.add (world,ball)
  console.log(ground);
  
}

function draw() {
  Engine.update(engine);
  
  background(255,255,255); 
  rectMode(CENTER); 
  rect (ground.position.x,ground.position.y,800,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10)
  
}