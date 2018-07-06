// 0 = empty
// 1 = player
// 2 - coin
// 3 - bomb
// 4 - wall
// mario start coordinates
var mario_r = 8;
var mario_c = 8;

var coin = 0;
var bomb = 5;
var wall = 0;

var map=[
    [0,0,0,0,0,0,0,0,0,0], // 0
    [0,0,0,0,0,2,0,0,0,0], // 1
    [0,0,0,0,0,0,0,0,0,0], // 2
    [0,0,0,0,0,4,0,0,0,0], // 3
    [0,0,0,0,0,0,0,0,0,0], // 4
    [0,0,0,0,0,3,0,0,0,0], // 5
    [0,0,0,0,0,0,0,0,0,0], // 6
    [0,0,0,0,0,0,0,0,0,0], // 7
    [0,0,0,0,0,0,0,0,1,0], // 8
    [0,0,0,0,0,0,0,0,0,0], // 9
  // 0,1,2,3,4,5,6,7,8,9
];

var div = document.getElementById('map');
var span = document.getElementById('coin');
var span1 = document.getElementById('bomb');

function move(){

    // alert();
    // console.log(event); // это глобальная переменная в момент нажатия клавиши (появления события)
    if(event.keyCode==37 && mario_c > 0 && mario_c <=10) // left
    {   if (map[mario_r][mario_c-1] == 2) {
        coin+=5;
    } else
        if (map[mario_r][mario_c-1] == 3) {
        bomb-=1;
    }
        map[mario_r][mario_c] = 0; // remove from current position
        mario_c--;
        map[mario_r][mario_c] = 1; // set it on new coords
    }
    if(event.keyCode==38 && mario_r > 0 && mario_r <=10) // up
    {   if (map[mario_r-1][mario_c] == 2) {
        coin+=5;
    } else
        if (map[mario_r-1][mario_c] == 3) {
        bomb-=1;
    }
        map[mario_r][mario_c] = 0; // remove from current position
        mario_r--;
        map[mario_r][mario_c] = 1; // set it on new coords
    }
    if(event.keyCode==39 && mario_c < 9 ) // right
    {   if (map[mario_r][mario_c+1] == 2) {
        coin+=5;
    } else
        if (map[mario_r][mario_c+1] == 3) {
        bomb-=1;
    }
        map[mario_r][mario_c] = 0; // remove from current position
        mario_c++;
        map[mario_r][mario_c] = 1; // set it on new coords
    }
    if(event.keyCode==40 && mario_r < 9) // down
    {   if (map[mario_r+1][mario_c] == 2) {
        coin+=5;
    } else
        if (map[mario_r+1][mario_c] == 3) {
        bomb-=1;
    }
        map[mario_r][mario_c] = 0; // remove from current position
        mario_r++;
        map[mario_r][mario_c] = 1; // set it on new coords
    }
    showMap();
};

function showMap(){
    div.innerHTML = '';
    for (var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
            // console.log(map[row][col]);

            if (map[row][col] == 0) {
                div.innerHTML +='<div></div>';
            } else if (map[row][col] == 1) {
                div.innerHTML +='<div class="player"></div>';
            } else if (map[row][col] == 2) {
                div.innerHTML +='<div class="coin"></div>';
            } else if (map[row][col] == 3) {
                div.innerHTML +='<div class="bomb"></div>';
            } else if (map[row][col] == 4) {
                div.innerHTML +='<div class="wall"></div>';
            }
        }
    }
    span.innerHTML = coin;
    span1.innerHTML = bomb;
};


showMap();
