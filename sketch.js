var ship, ship_sailing, edges;
var SeaImage;
var sea

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
  SeaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20)
  sea.addImage (SeaImage)
  edges = createEdgeSprites();

  ship = createSprite(200,200,100,50);

  sea.scale = 0.3 
   ship.addAnimation("sailing", ship_sailing);

  ship.scale = 0.25
}

function draw() {
  background("blue");
  sea.velocityX = -2
  console.log (sea.x)


  console.log(ship.x)
  if (sea.x<0) {
    sea.x = sea.width/8
  }
  
  drawSprites();
}