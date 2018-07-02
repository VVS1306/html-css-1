var slider = [
    {
        title: "My first slide!",
        url: "https://abnews.ru/wp-content/uploads/2016/07/%D1%81%D0%BE%D1%87%D0%B8-fotki.yandex.ru-_-600x400.jpg"
    },
    {
        title: "The second slide!",
        url: "http://towncentrevet.ca/wp-content/uploads/2015/09/liver5.jpg"
    },
    {
        title: "The last slide!",
        url: "https://i.obozrevatel.com/2017/4/11/donbass_arena_foto.jpg?size=600x400"
    }
];

function showSlide (index){
    //console.log(slider[index]);
    var div = document.body.children[0];
    div.innerHTML += `
    <div>
        <h2>${slider[index].title}</h2>
        <img src="${slider[index].url}">
    </div>
    `;
}
function showCarusel(){
    // clear
    var div = document.body.children[0];
    div.innerHTML = '';
    for( var i=0; i<3; i++)
    showSlide(i);
}
function prev(){
    // push,pop,shift,unshift - при помощи них вытаскиваеться последний элемент масива и вставляет его вместо первого
    slider.push(slider.shift());
showCarusel();
}
function next(){
    slider.unshift(slider.pop());
showCarusel();
}
/////////////////////////////////////////////
// showSlide(2);
showCarusel();
setInterval(next, 3000);


// JavaScript

// setTimeout (f, interval) - учтановить выполнение один раз
// setInterval (f, interval) - Установить выполнение непрерывно (указывается в милисекундах)

// clearInterval (id)
// clearInterval (id)
