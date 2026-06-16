var words = ["Hello", "Hi" , "Howdy", "Hola", "Bonjour", "Ciao", "Namaste", "Salaam", "Konnichiwa", "G'day"];
var colors = ["red", "blue", "green", "orange", "purple", "pink", "brown", "cyan", "magenta", "yellow"];

var i = 0;

setInterval(function(){
    document.getElementById("text").innerHTML = words[i];
    document.getElementById("text").style.color = colors[i];
    document.querySelector('body').style.background = colors[Math.floor(Math.random() * colors.length)];
    i++;
    if(i >= words.length){
        i = 0;
    }
}, 5000);