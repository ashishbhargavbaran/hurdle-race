var player,player_running;
var backgr, backgr1, coin, coin1, gamesound;
let stone1, stone2, stone3, stone4, ran;
let gravity = 0;
let gamestat =false;
let score= 0;
let timer= 2;
function preload(){
  player_running = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
  backgr1 = loadImage("fcqYEC.png");
  stone1 = loadImage("assets/1.png");
  stone2 = loadImage("assets/2.png");
  stone3 = loadImage("assets/3.png");
  stone4 = loadImage("assets/4.png");
  coin = loadImage("assets/coin.png");
  gamesound = loadSound("assets/coin_collect.wav");
}
function setup() {
  createCanvas(700, 400);
  frameRate(30);
  backgr = createSprite(900,-250);
  backgr.addImage(backgr1);
  coin1 = createSprite(200,200);
  coin1.addImage(coin);
  coin1.scale=0.15;
  player = createSprite(100,330); 
  player.addAnimation("player_running",player_running);
  player.scale=0.2;
  st1= createSprite(700,370);
  st1.scale=0.2;
  st1.setCollider("circle",0,0,200);
  ran = int(random(3)); 
  if(ran ==1){
    st1.addImage(stone1);
  }
  else if (ran ==2){
    st1.addImage(stone2);
  }
  else if(ran ==3 ){
          st1.addImage(stone3);
          }

else if(ran ==0){
  st1.addImage(stone4);
}
}
function draw() {
  coins();
   hurdle();
   runner(); 
  if(gamestat == true){
  backgr.velocity.x=0;
  }
  else if(gamestat ==false){
  backgr.scale  = 2;
  backgr.velocity.x=-2-score*0.2;
  if(backgr.position.x <-200){
    backgr.position.x = 850
  }}
  drawSprites();
  if(timer>0 ){
    textSize(30);
        text("Press Space to Jump",200,200);
     }
  if(frameCount % 60 == 0 && timer >0){
   timer--;
 }
  textSize(30);
  text("Score "+score+"",10,30); 
  if(gamestat){
    fill(255,123,240);
        textSize(72); 
    text("Game Over",width/4, height/2);
  }
}

function hurdle(){
st1.velocity.x = -2-score*0.2;
  if(st1.position.x <0){
    ran = int(random(3)); 
  if(ran ==1){
    st1.addImage(stone1);
  }
  else if (ran ==2){
    st1.addImage(stone2);
  }
  else if(ran ==3 ){
          st1.addImage(stone3);
          }

else if(ran ==0){
  st1.addImage(stone4);
}
    
    st1.position.x =700;     
  }
}
function runner(){
     if (keyDown("Space")){
       if(player.position.y <150){
         player.velocity.y=0;
       }
    player.velocity.y=-12;
    }
 else if (player.position.y <330)
{
  player.velocity.y+=0.8;
} else if(player.position.y >330) {
  player.velocity.y=0;
}
  if(player.overlap(st1)){
    st1.velocity.x = 0;
     coin1.velocity.x=0;
     coin1.visible= false;
     player.visible= false;
     st1.visible = false;
    gamestat = true;
  } 
}
function coins(){
  coin1.velocity.x = -2-score*0.2;
  if(coin1.position.x <0){
    coin1.position.x =700; 
  }
  if(player.overlap(coin1)){
    gamesound.play();
coin1.position.x =700; 
    score+=1;   
  }
}


