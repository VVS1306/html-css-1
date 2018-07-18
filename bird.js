class Bird{
    // служит для создания объекта
    constructor (){
        this.top = Math.round((500 - 48)* Math.random());
        this.left = Math.round((500 - 48) * Math.random());
        this.color = "red";
        this.speed = Math.round(Math.random()*4+1);
    }
    //метод выводит текущую птицу в html
    render(){
        this.div = document.createElement('div');
        this.div.setAttribute('class',`bird ${this.color}`);
        this.div.style.top = this.top + 'px';
        this.div.style.left = this.left + 'px';
        document.body.firstElementChild.appendChild(this.div);
        // position. left, top
    }
    fly(){
        var self = this;
        setInterval(function(){
            if(self.left>(250+Math.random()*200) || self.left<Math.random()*200){
                self.speed*=-1;
                if(Math.abs(self.speed)<5){
                    self.speed*=1.5;
                }
            }
            self.left+=self.speed;
            console.log(self.left); // this теряет свой контекст когда он вызывается в новом методе (функция в функции)
            self.div.style.top = self.top + 'px';
            self.div.style.left = self.left + 'px';
        },50);
    }
}


// div -прикрутить координаты
// css - position absolut
