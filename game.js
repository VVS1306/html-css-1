var canvas;




function startGame(){
    canvas = document.getElementById('map').getContext('2d')
    var snake = new Snake(canvas);
        snake.render();
        
}

function addBomb(){
    var bomb = new Bomb(canvas);
    bomb.render();
    setTimeout(function(){bomb.clear();},1000);
    
}


///////////////// Helpers //////////////////////
function randCoord () {
   return Math.floor(Math.random()*500)
}
///////////////// Helpers //////////////////////



startGame();
addBomb();