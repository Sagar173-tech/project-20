var cat, cat_sitting, cat_moving, cat_still;
var mouse, mouse_standing, mouse_teasing, mouse_looking;
var garden, gardenImg;
function preload() {
cat_sitting = loadImage("cat1.png");
cat_moving = loadAnimation("cat2.png, cat3.png");
cat_sitting = loadImage("cat4.png");
mouse_standing = loadImage("mouse1.png");
mouse_teasing = loadAnimation("mouse2.png, mouse3.png");
mouse_looking = loadImage("mouse4.png");
gardenImg = loadImage("garden.png");    

}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(750,400,100,100);
    tom.addImage("cat still", cat_sitting);

    jerry = createSprite(250,400,100,100);
    jerry.addImage("mouse standing", mouse_standing);
    
    garden = createSprite(500,400);
    garden.addImage("background", gardenImg);

}

function draw() {

    background(255);
    if(isTouching(tom, jerry)) {
        tom.velocityX = 0;
        tom.changeImage("cat still");
        tom.x = 750;
        jerry.changeImage("mouse standing");
        jerry.x = 250;

    }

    drawSprites();
}


function isTouching(object1, object2) {
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
       object2.x - object1.x < object1. width/2 + object2.width/2 &&
       object1.y - object2.y < object1.height/2 + object2.height/2 &&
       object2.y - object1.y < object1.height/2 + object2.height/2
       ) {
           return true;
       }

    else{
        return false
    }
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      jerry.addAnimation("mouse teasing", mouse_teasing);
      jerry.changeAnimation("mouse teasing");

      tom.addAnimation("cat running", cat_moving);
      tom.changeAnimation("cat running");
      tom.VelocityX = -2;
  }

}
