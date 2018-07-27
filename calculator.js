const KEY ='d9ba4ba90088bec472b4704f4a4ea44b';
const URL ='http://data.fixer.io/api/';
var date = '2018-07-26';
var base = 'EUR';
var eur_to_mdl = 0;

var select = document.getElementById('val');

function load(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",URL + date + '?access_key=' + KEY + '&base=' + base);
    xhr.onload = function(){
        // convert JSON -> Object
        var data = JSON.parse(xhr.responseText);
        // alert(xhr.responseText);
        // console.log(data.rates.MDL);
        eur_to_mdl = data.rates.MDL;

        // downloade list of values select
        var rates = Object.keys (data.rates);
        for (var i=0;i<rates.length;i++){
            // rates[i];
            var option = document.createElement('option');
            option.innerText = rates[i];
            select.appendChild(option);
           
        }
    }
    xhr.send();
        
}
function convert(){
    var cur1 = document.getElementById('cur1');
    var cur2 = document.getElementById('cur2');
    cur2.value = eur_to_mdl * cur1.value;
    // alert(currency.value);
}

load();

