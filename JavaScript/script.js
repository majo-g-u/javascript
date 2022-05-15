//console.log("JAVASCRIPT IS LINKED")

var personName = "Majo";
var pets = 1;
var funFact = "can't live wout SODA";

console.log("My name is:" + " " + personName + ".");
console.log("I have" + " " + pets + " " + "pet/s.");
console.log("Fun Fact:" + " " + funFact + ".");

var personName = "His name is Matt";
var pets = 0;
var funFact = "can't live wout lemon";

console.log("His name is:" + " " + personName + ".");
console.log("He has" + " " + pets + " " + "pet/s.");
console.log("Fun Fact:" + " " + funFact + ".");

var one = 64;
var two = "636573";
var three = false;
var four = 64.55;
var five = "Howdy";
var six;

//logs number
console.log(typeof one);

//logs string
console.log(typeof two);

//logs boolean
console.log(typeof three);

//logs number
console.log(typeof four);

//logs string
console.log(typeof five);

//logs undefined
console.log(typeof six);

//LOGICAL OPERATORS
var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = b === e;
var expression2 = e < d;

//use comparison operators so all expressions log as TRUE

console.log(a !== b);
console.log(b === e);
console.log(c > b);
console.log(d > 0);

//use logical operators so all expressions log as TRUE
console.log(expression1 && !expression2);
console.log(expression1 || expression2);

//Conditional Operators
var isSleepy = true;
hungerLevel = 50;
lunchTime = true;
lunchBill = 11;

if (isSleepy) {
  console.log(" i am getting tired");
}

if (hungerLevel > 1) {
  console.log("Im hungry");
} else {
  console.log("Im OK");
}

if (!lunchTime) {
  console.log("time to eat");
} else {
  console.log("eat later");
}

if (lunchBill > 10) {
  console.log("cost 1");
} else if (lunchBill >= 10 && lunchBill < 15) {
  console.log("cost 2");
} else {
  console.log("cost 3");
}

// Conditional statements - Practice
var x = 50;
var expression3 = x < 25;
var expression4 = x > 50;

if (expression3 && expression4) {
  console.log("exp3 : " + expression3);
  console.log("exp4 : " + expression4);
  console.log("True ✅ True ✅");
} else if (expression3) {
  console.log("True ✅ False❌");
} else if (expression4) {
  console.log("False❌ True ✅ ");
} else if (expression3 == false && expression4 == false) {
  console.log("False❌ False❌  ");
}

// ARRAYS
// storing 1 piece of data in varaibles.

var pets =  ['Pichi' , 'Diente' , 'Rufo']
console.log(pets);
var names = ['Majo ', 'Lou ', 'Pato ', 'Lucho ', 'Ara '];
console.log(names);
console.log(names[2]);

var newStudent = 'Jack';

//reassigns value to 'Majo'
names[0] = 'MariaJose ';
console.log(names);

names.push('EXTRA');
console.log('Welcome to class' + ' ' + names);

console.log('Welcome to class' + ' ' + names[0]);
console.log('Welcome to class' + ' ' + names[1]);
console.log('Welcome to class' + ' ' + names[2]);
console.log('Welcome to class' + ' ' + names[3]);
console.log('Welcome to class' + ' ' + names[4]);

console.log(names.length);

console.log('new student ' + newStudent);







