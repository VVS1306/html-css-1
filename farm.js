// LEGEND
// 0 - land
// 1 - corn
// 2 - potato
// 3 - tomato

var farm_map = [0,2,2,1,1,3,3,0,0,0];
var farm_div = document.getElementById('farm');

function plantCorn(){
    farm_map[9] = 1;
    showMap();
};
function plantPotato(){
    farm_map[8] = 2;
    showMap();
};
function plantTomato(){
    farm_map[7] = 3;
    showMap();
};
function showMap (){
    // Стираем старое и приклеиваем новое
    farm_div.innerHTML = '';
    for(var i=0;i<farm_map.length;i++){
        if(farm_map[i] == 1){
            farm_div.innerHTML += '<div class="box corn"></div>';
        }else if(farm_map[i] == 2){
            farm_div.innerHTML += '<div class="box potato"></div>';
        }else if(farm_map[i] == 3){
            farm_div.innerHTML += '<div class="box tomato"></div>';
        }else {
            farm_div.innerHTML += '<div class="box"></div>';
        }

    }
}

showMap();
