function conversion(){
    'use strict';
    var celcius = 100;
    var fahrenheit;
    fahrenheit = ((celcius*9)/5)+32;
    alert(celcius + " degrees celcius is " + fahrenheit + " degrees fahrenheit");
}
function init(){
    'use strict';
    document.getElementById('form').onsubmit = conversion;
}
window.onload = init