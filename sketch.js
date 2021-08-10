var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg   =  loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  var ran = Math.round(random(1,2))
  if(frameCount % 80 == 0){
    if(ran == 1 ){
      createApple()
    }
    else if(ran == 2 ){
      createLeaf()
    }

  }
  drawSprites();
}
function createApple(){
apple = createSprite(random(50,350),40,10,10)
apple.addImage(appleImg)
apple.scale = 0.05
apple.velocityY = 4
apple.lifetime = 150

}
function createLeaf(){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg)
  leaf.scale = 0.05
  leaf.velocityY = 4
  leaf.lifetime = 150
  
  }
  