// Spread
let arr = [1, 2, 3, 4, 5];
console.log(Math.min(...arr));
console.log(...arr);
console.log(..."itz me Aditya");

//Spread with Array Literals
let newArr = [...arr];
let chars  = [..."hello"];
console.log(newArr , chars);

let even = [1, 3, 5, 7, 9];
let odd = [2, 4, 6, 8, 10];
let nums  = [...even , ...odd];
console.log(nums);

//Spread with Object Literals
const data = {
    email: "google@gmail.com",
    password: "abcd"
};
const dataCopy = {...data , id: 123 , country: "India"};
console.log(dataCopy);

let arr1 = [1, 2, 3, 4, 5];
let obj1 = {...arr1};
console.log(obj1);

// Rest :- Allows a function to take an indefinite number of arguments and bundle them in an array.
function sum(...args) {
    return args.reduce((add , el) => add + el);
}
console.log(sum( 1, 2, 5));

//Destructing :- Storing values of array into multiple variables
let names = ["tony" , "bruce" , "steve" , "peter"];
let[winner , runnerUp , ...others] = names;
console.log(winner , runnerUp , others);

//Destructing (objects)
const Student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi" , "english" , "math" , "science"],
    username: "karan@123",
    password:"abcd"
};
let{username: user , password: secret , city:place = "Mumbai"} = Student;
console.log(user , secret , place);