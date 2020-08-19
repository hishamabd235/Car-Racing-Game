var hypnoticBall, database;
var position;
var allPlayers
var playerCount = 0,gameState = 0,game,player,form;
function setup(){
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(playerCount === 4){
    gameState = 1
  game.update(1);
  }
  console.log(gameState)
   if(gameState === 1){
     clear();
   game.play();
   }
}



