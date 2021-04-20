var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacles;
var s;

var form, player, game;

var cars, car1, car2, car3, car4;
var i, track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  f2 = loadImage("images/f1.png");
s=loadSound("sounds/sliding.mp3")

  track = loadImage("images/f.jpg");
  car1_img = loadImage("images/basket.png");
  car2_img = loadImage("images/basket.png");
  car3_img = loadImage("images/basket.png");
  car4_img = loadImage("images/basket.png");
  ground = loadImage("images/ground.png");
  aI = loadImage("images/a.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();
  aGroup = createGroup

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  f1.visible = false
  obstacles.add(f1);
 }
}


function draw(){
   //start the game
   background(track);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }
  if(frameCount%10===0){
    Apple()
  }
  }


 
  
function Apple(){
  var apple = createSprite(random(0,displayWidth), 50) 
  apple.addImage(aI)
  apple.velocityY = 50
  apple.scale = 0.09

}