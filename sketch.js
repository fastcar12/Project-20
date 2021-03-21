
var background, backgroundImg
var cat, catImg, cat2
var mouse, mouseImg, mouse2



function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png")
    catImg = loadImage("images/cat1.png")
    mouseImg=loadImage("images/mouse1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600)
cat.addImage(catImg);
cat.scale=0.2

mouse = createSprite(200,600)
mouse.addImage(mouseImg);
mouse.scale=0.15
  
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=37){
 cat.velocityX=-5
 cat.addAnimation("catRunning", cat2)
 cat.changeAnimation("catRunning")
 mouse.addAnimation("mouseRunning", mouse2)
 mouse.changeAnimation("mouseRunning")
}

}
