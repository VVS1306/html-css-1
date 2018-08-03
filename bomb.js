// bomb component
class Bomb {
    constructor(canvas){
        this.icon_ok = 'images/bomb.png';
        
        this.x = randCoord();
        this.y = randCoord();
        this.direction = 'up';
        this.canvas = canvas;
        // this.segments = [{x: 10, y: 0},{x: 10, y: 24},{x: 10, y: 48}];
    }
    // render to canvas
    render(){
        var image = new Image();
        image.src = this.icon_ok;
        var self = this;
        image.onload = function(){
            self.canvas.drawImage(image,self.x,self.y);
        }
    }
    clear(){
        this.canvas.clearRect(this.x,this.y,24,24);
    }
}