var vegetables = ['Broccoli','Spinach','Tomato','Cucumber','Carrot'];

console.log(vegetables);
console.log(vegetables[0]);

// array functions

vegetables.push('Onion');
console.log(vegetables);

vegetables.pop();
console.log(vegetables);

vegetables.unshift('Cucumber');
console.log(vegetables);

vegetables.shift();
console.log(vegetables);

vegetables.splice(0,2,'Ajan');
console.log(vegetables);

console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

// destrukturimi i array-ve

var players = ['Messi','Ronaldo','Neymar','Mbappe','Salah','Lewandowski','Kane','Benzema','Haaland','De Bruyne'];
var [p1,p2,p3,p4,p5] = players;
console.log(p1);


var [first,second,...rest] = players;
console.log(first);
console.log(second);
console.log(rest);



var age = [10,15,20,25,30];
var [a1,a2,a3,a4,a5] = age;
console.log((a1+a2+a3+a4+a5)/5);
