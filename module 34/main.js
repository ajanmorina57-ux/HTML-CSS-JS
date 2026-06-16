function printName(){
    var teksti = document.getElementById("text");

    teksti.innerHTML = "John<br>";
    setTimeout(function(){teksti.innerHTML += "Doe<br>";},3000)
    teksti.innerHTML += "Smith<br>";
}

printName();



var colors = ["red" , "green" , "blue" , "yellow" , "purple"];

function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random() * colors.length)];

}
setInterval(changeBgColor, 500);

