let cars = ["toyota" , "BMW" , "Ferrari"];
let cars1 = [];

//Assigning Values by accessing INDEX
cars1[0] = "Lamborgini";
cars1[1] = "Mahindra";
cars1[2] = "Tata";


//Add to end
cars.push("Mercedes")
cars.push("Aditya")
//delete from end and return it
console.log(cars.pop());

//add to start
cars.shift("Rolls Royles");
cars.shift("We are");
//delete from start and return it
console.log(cars.unshift());

//indexOf - Returns index of Something
console.log(cars.indexOf("BMW"));

//includes - Search for a Value
console.log(cars.includes("BMW"));
console.log(cars.includes("Mahindra"));

//concat - merge 2 array
console.log(cars.concat(cars1));

//reverse - reverse an array
console.log(cars.reverse())

//slice - copies a portion of an array
console.log(cars.slice(2 , 4))
console.log(cars.slice(-2)) // 2 elements from last

//splice - removes / replaces / add elements in place
//splice(start , deleteCount , items0..........itemsN)
let color = ['r' , 'y' , 'b' , 'a' , 'p' , 'w'];
console.log(color.splice(4));
console.log(color.splice(0 , 1));
console.log(color.splice(0 , 1 , 'black' ,  'grey'))   

//sort - Sort an Array
console.log(cars.sort());

//Array References
let arr = ['a' ,'b'];
let  arrCopy = arr;
console.log(arrCopy.push('c'));
console.log(arr);
console.log(arr == arrCopy);

//Constant Array :- We cann't modify constant arrays
const arrays = [1 , 2, 3, 4, 5];

