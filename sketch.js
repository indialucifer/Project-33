 const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var bg;
var bird, birdImg;
var snow = [];
var ground;

function preload(){
bg = loadImage("snow2.jpg");
birdImg = loadImage("bird.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  bird = createSprite(10,300,10,10);
  bird.addImage("biirds",birdImg);
  bird.scale = 1.5;
  ground = createSprite(400,390,800,20);
  ground.visible = false;
}

function draw() {
  if(bg)
  background(bg);  

  bird.y = bird.y + 5;
  bird.collide(ground);

  if (keyDown(LEFT_ARROW)){
    bird.x = bird.x -5;
  }

  if (keyDown(RIGHT_ARROW)){
    bird.x = bird.x +5;
  }

  if(keyDown("space")){
    bird.y = bird.y -50;
  }

  if (frameCount%30 === 0){
    snow.push(new Snow(random(0,800), 0,10,10))
  }
  for (var h = 0; h < snow.length; h++){
    snow[h].display();
} 

  drawSprites();
}