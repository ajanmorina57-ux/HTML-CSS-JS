var horsepower = 300
var input = document.getElementById("input_id");
var button = document.getElementById("button_id");
var text = document.getElementById("text_id");
var input_horsepower = document.getElementById("input_horsepower");
var button_horsepower = document.getElementById("button_horsepower");
var text_horsepower = document.getElementById("text_horsepower");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var result = document.getElementById("result");

if(horsepower > 200){
    console.log("This car can enter the racetrack");
}
else{
    console.log("This car cannot enter the racetrack");
}

button.onclick = function(){
    text.innerHTML = input.value;
}

button_horsepower.onclick = function(){
    if(input_horsepower.value > 200){
        text_horsepower.innerHTML = "This car can enter the racetrack";
    }
    else if(input_horsepower.value > 200){
        text_horsepower.innerHTML = "This car can enter the racetrack,just barely";
    }

    else{
        text_horsepower.innerHTML = "This car cannot enter the racetrack";
    }
}

add.onclick = function(){
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}

subtract.onclick = function(){
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
}

multiply.onclick = function(){
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
}

divide.onclick = function(){
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
}







