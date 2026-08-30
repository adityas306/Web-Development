//Function Defination
function hello() {
    console.log("Hello");
}
//Function Calling.
hello();

//Create a function to roll a dice and always display the value of this dice(1 to 6)
function rollDice() {
    let ran = Math.floor(Math.random() * 6) + 1;
    console.log(ran);
}
rollDice();

//Function with Argument
function printInfo(name , age) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("Anamika" , 22);
printInfo("Harshit");

function average(a , b  , c) {
    console.log((a + b + c)/3);
}
average(21, 34 , 21);

//Return Keyword in Function
function isAdult(age) {
    if(age >= 18) {
        return "adult";
    } else {
        return "Not Adult";
    }
    console.log("This is UNreachable Code");
}
console.log(isAdult(36));

//1. Create a Function that Returns Sum of numbers from 1 to n
function sumN(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumN(10));

//2. Create a Function that returns the concatenation of all Strings in an Array.
let str = ["hi" , "hello" , "bye" , "!"];
function concat(str) {
    let result = " ";
    for(let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
console.log(concat(str));

//Scopes in JS

// 1. Function Scope
let sum = 54; //Global Scope
function calcSum(a, b) {
    let sum = a + b; //Function Scope
    console.log(sum);
}
console.log(sum);
calcSum(12 , 13);

// 2. Block Scope
{
    let a = 25;
    const b = 10;
    var c = 15;
}
console.log(c);

// 3. Lexical Scope
let greet = "hello"; //Global Scope
function changeGreet() {
    let greet = "namaste";
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical Scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();

//Function Expressions
let sum1 = function(a , b) {
    return a + b;
}
let hello1 = function() {
    console.log("hello");
}
console.log(sum1(1 , 2));
hello1();

//Higher Order Function
function multipleGreet(func , count) {
    for(let i = 1; i <= count; i++) {
        func();
    }
}
let greet1 = function() {
    console.log("hello");
}
multipleGreet(greet1 , 10);
multipleGreet(function() {console.log("namaste")} , 10);

//Higher Order Function (returns a functions)
function oddEvenTest(request) {
    if(request == "odd"){
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    }else if(request == "even") {
        console.log(n % 2 == 0);
    }else {
        console.log("Wrong Request");
    }
}
let request = "odd";
let func = oddEvenTest(request);
func(3);

//Methods in JS
const calculator = {
    num: 55,
    add: function(a , b) {
        return a + b;
    },
    sub: function(a , b) {
        return a - b;
    },
    mul: function(a , b) {
        return a * b;
    },
    div: function(a , b) {
        return a / b;
    }
};
console.log(calculator.add(10 , 20));

//Methods ShortHand
const CalCulator = {
    add(a , b) {
        return a + b;
    },
    sub(a , b) {
        return a - b;
    }
}
console.log(CalCulator.add(19 , 21));