var player;

function preload(){

}

function setup(){
  createCanvas(900,600);
  player = createSprite(450,300,100,100);
}


function draw(){
  background("black")

  camera.position.x = displayWidth/2;
  camera.position.y = (player-1).y;
 
  move();
  drawSprites();
}
function move(){
  if (keyCode === DOWN_ARROW) {
    player.y = player.y+1;
  }

  if (keyCode === UP_ARROW) {
    player.y = player.y-1;
  }

  if (keyCode === RIGHT_ARROW) {
    player.x = player.x+1;
  }

  if (keyCode === LEFT_ARROW) {
    player.x = player.x-1;
  }
}