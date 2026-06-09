for (i = 0; i<18; i++){
    console.log(i)
}




var names = ['Mbappe' , 'Neymar' , 'Olise' , 'Dembele']
var x;


for(x of names){
    console.log(x)
}

var namess = [];
var y = document.getElementById("name_field")
var submit = document.getElementById("submit_button")
var show = document.getElementById("show")

function addName(){
    namess.push(y.value);
    show.innerHTML = namess;
    y.value = "";
}

submit.onclick = addName;