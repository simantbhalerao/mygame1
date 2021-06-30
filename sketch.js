var PLAY = 1;
var END = 0;
var gameState = PLAY;
var forest, forestImg; 
var car, carImg; 
var bomb, bombImg;
var zombie1, zombie1Img, zombie1Group; 

function preload(){
    forestImg = loadImage("edit img/forestjpg.jpg");
    carImg = loadImage("edit img/red car edit.png");
    bombImg = loadImage("edit img/bomb edit 2.png");
    zombie1Img = loadImage("edit img/zombie edit.png");
}



function setup(){
    createCanvas(1000,600);
    forest = createSprite(1000,300);
    forest.addImage(forestImg);
    forest.velocityX = -6;
    forest.scale = 2.3;
    var zombie1Group = new Group();
    
    
    car = createSprite(200,550);
    car.addImage(carImg);
    car.scale = 0.3;


}

function draw(){
    background(0);
    if (gameState===PLAY){
        if(keyDown("space")){
            createBomb();
        }
        
        if(forest.x < 0){
            forest.x = 100;
        }
        
        spawnzombies();
        

       

        
    }

    else if (gameState === END) {

       
    }

   
  


    drawSprites();
}

function createBomb(){
    bomb = createSprite(200,500,60,10);
    bomb.addImage(bombImg);
    bomb.x = 360;
    bomb.y = car.y;
    bomb.velocityX = 4;
    bomb.scale = 0.1;  
}


function spawnzombies(){
    if(frameCount % 200 === 0){
    zombie1 = createSprite(1100,500,10,10);
    //zombie1.x = Math.round(random(10,10));
    zombie1.addImage(zombie1Img);
    zombie1.scale = 0.3;
    zombie1.velocityX = -6;
    zombie1Group.add(zombie1);
 
   
    }
   
}

 












