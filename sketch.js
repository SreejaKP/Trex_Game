var mazeC = createSprite(50, 50, 40, 40);
mazeC.scale = 0.2;

var money1 = createSprite(350, 50, 40, 40);
money1.setAnimation("money_1");
money1.scale = 0.5;

var money = 100;
var day = 1;

var gamestate = "game1";

var yballoons, pballoons, bballoons;

var pin, bg;

var wall1 = createSprite(150, 20, 300, 10);
wall1.shapeColor = "white";
var wall2 = createSprite(10, 240, 10, 300);
wall2.shapeColor = "white";
var wall3 = createSprite(300, 165, 10, 300);
wall3.shapeColor = "white";
var wall4 = createSprite(110, 95, 200, 10);
wall4.shapeColor = "white";
var wall5 = createSprite(205, 125, 10, 50);
wall5.shapeColor = "white";
var wall6 = createSprite(145, 150, 130, 10);
wall6.shapeColor = "white";
var wall7 = createSprite(190, 210, 220, 10);
wall7.shapeColor = "white";
var wall8 = createSprite(85, 235, 10, 50);
wall8.shapeColor = "white";
var wall9 = createSprite(160, 260, 160, 10);
wall9.shapeColor = "white";
var wall10 = createSprite(120, 320, 220, 10);
wall10.shapeColor = "white";
var wall11 = createSprite(200, 385, 380, 10);
wall11.shapeColor = "white";
var wall12 = createSprite(390, 200, 10, 380);
wall12.shapeColor = "white";
  

function draw () {
  
  background(rgb(40, 90, 120));
  createEdgeSprites();
  mazeC.setAnimation("Walking_BunBun");
  
  if(keyDown("left") && gamestate == "game1") {
    mazeC.velocityX = -3;
    mazeC.velocityY = 0;
  }

  if (keyDown("right") && gamestate == "game1") {
    mazeC.velocityX = 3;
    mazeC.velocityY = 0;
  }

  if (keyDown("up") && gamestate == "game1") {
    mazeC.velocityY = -3;
    mazeC.velocityX = 0;
  }

  if (keyDown("down") && gamestate == "game1") {
    mazeC.velocityY = 3;
    mazeC.velocityX = 0;
  }

if (mazeC.bounceOff(wall1) || mazeC.bounceOff(wall2) || mazeC.bounceOff(wall3) || mazeC.bounceOff(wall4) || mazeC.bounceOff(wall5) || mazeC.isTouching(wall6) || mazeC.isTouching(wall7) || mazeC.isTouching(wall8) || mazeC.isTouching(wall9) || mazeC.isTouching(wall10) || mazeC.isTouching(wall11) || mazeC.isTouching(wall12)) {
  reset1();
  day = 1;
  money = money - 50;
  playSound("sound://category_digital/fail.mp3", false);
}

if (mazeC.isTouching(money1)) {
  reset1();
  day = 1;
  money = money + 100;
  playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3", false);
}

if (gamestate === "end of game1") {
  fill("white");
  textFont("calibri");
  textSize(20);
  text("The event is over. Let's see how much", 50, 50);
  text("money you have!", 50, 75);
  text("Money: " + money, 50, 100);
  text("Day: " + day, 200, 100);
  text("Press Enter to begin the next game", 25, 150);
}

  if(keyDown("enter")) {
    gamestate = "newgame";
  }

  if (gamestate === "newgame") {
    
    pin = createSprite(350, 200, 100, 5);
    pin.velocityY = -5;
    pin.bounceOff(topEdge);
   
    drawSprites();
    
    for (var i = 0; i < 350; i = i + 50) {
      yballoons = createSprite(50, i + 50, 30, 30);
      yballoons.setAnimation("yballoon");
      yballoons.scale = 0.5;
    }
  
    for (var j = 0; j < 250; j = j + 50) {
      pballoons = createSprite(100, j + 100, 30, 30);
      pballoons.setAnimation("pballoon");
      pballoons.scale = 0.5;
    }
  
    for (var k = 0; k < 150; k = k + 50) {
      bballoons = createSprite(150, k + 150, 30, 30);
      bballoons.setAnimation("bballoon");
      bballoons.scale = 0.5;
      
    }
  }
  drawSprites();
}

function reset1() {
  mazeC.velocityX = 0;
  mazeC.velocityX = 0;
  mazeC.destroy();
  money1.destroy();
  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  wall7.destroy();
  wall8.destroy();
  wall9.destroy();
  wall10.destroy();
  wall11.destroy();
  wall12.destroy();
  gamestate = "end of game1";
  
}
