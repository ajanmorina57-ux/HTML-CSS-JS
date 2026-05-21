function showmessage(){
    alert('This is my first function')
}

showmessage();

function shuma(number1,number2){
    return number1 + number2
}

console.log(shuma(32,42))


function toCelsius(Fahrenheit){
    return (5/9)* (Fahrenheit - 32);
}

var result = toCelsius(54);





console.log("Fahrenheit in celcius is"+result+"degrees");


function calculator(number1,number2){
    console.log(number1 + number2);
    console.log(number1 - number2);
    console.log(number1 * number2);
    console.log(number1 / number2);
}

calculator(30,10);




function digitalschool(){
    var shkolla = 'Digital school';
    alert(shkolla)
}


digitalschool();


function siperfaqja_e_trekendeshit(baza,lartesia){
    return baza * lartesia * 0.5
}

console.log('siperfaqja e trekendshit eshte : '+ siperfaqja_e_trekendeshit(5,7))

var porsche ={
    type:'carrera 4s',
    kilometra:220.200,
    color:'black',
    motor:'3.0',
    fuel_type:'gas'
    
    get getkilometra(){
        return this.kilometra
    },
    set setkilometra(){
        this.kilometra = this.kilometra;
    }
}


var bundesliga = {
    first_place:function bayern(){
        alert("MIA SAN MIAAAA")
    },
    second_place:'Dortmund',
    third_place:'Leipzig',
    fourth_place:'VFB Stuttgart'

}


alert(bundesliga.second_place);
alert(porsche.type);
bundesliga.first_place();
console.log(porsche.kilometra)
porsche.setkilometra = 120;
console.log(porsche.getkilometra)



