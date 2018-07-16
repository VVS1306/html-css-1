class Bird{
    // служит для создания объекта
    constructor (){
        this.top = Math.round(500 * Math.random());
        this.left = Math.round(500 * Math.random());
        this.color = "red";
    }
    //метод выводит текущую птицу в html
    render(){
        this.div = document.createElement('div');
        this.div.setAttribute('class',`bird ${this.color}`);
        document.body.firstElementChild.appendChild(this.div);
        // position. left, top
    }
}

var b = new Bird();
    b.render();
// div -прикрутить координаты
// css - position absolut
