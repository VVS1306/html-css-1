function showBtnAnimated() {
    // // alert();
    var canvas = document.querySelector('#play-btn').getContext("2d");
    var radius=40;
    var start_angle = 0;
    var color = 255;
    // console.log(canvas);
    // canvas.moveTo(0,0);
    // canvas.lineTo(50,50);
    // canvas.lineTo(0,100);
    // canvas.lineTo(100,0);
    // canvas.lineTo(100,100);
    // canvas.lineTo(50,50);
    // canvas.stroke();


    // var c=document.getElementById("play-btn");
    // var ctx=c.getContext("2d");
    // ctx.beginPath();
    
    // for(var radius=40; radius>=10; radius-=5){
        var timer = setInterval(function(){
            canvas.strokeStyle = "rgb(0, ' + color + ' ,0)";
            for(var angle=0; angle<=2; angle+=0.2){
                canvas.lineWidth=3;
                canvas.beginPath();
                canvas.arc(50,50,radius,(0.0+angle+start_angle)*Math.PI,(0.15+angle+start_angle)*Math.PI);
                // canvas.closePath();
                canvas.stroke();
            }
                radius-=5;
                start_angle += 0.05;
                color-=30;
                if(radius<15) clearInterval(timer);
        },100);
        
        
    // }
    
    
    
   

}

function hideBtnanimated(){
    // .arc() + white() interval
}
// showBtnAnimated();