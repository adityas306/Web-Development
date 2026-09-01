//Array Methods

let arr = [1 , 2, 3, 4, 5];
let student = [
    {
        name: "aman",
        marks:95
    },
    {
        name: "rajat",
        marks: 92
    }
]


// 1. forEach :- loop which accesses all elements
arr.forEach(function(el) {
    console.log(el);
});
arr.forEach((el) => {
    console.log(el);
});


// 2. Map :- creates new array and map all according to callback
let newArr =  arr.map((el) => {
    return el * 2;
});
console.log(newArr);
let gpa = student.map((el) => {
    return el.marks/10;
})
console.log(gpa);


// 3. filter :- creates a new Array of Elements that give true for a given condition
newArr = arr.filter((el) => {
    return el % 2 == 0;
});
console.log(newArr);

// 4. every :- returns true if every element of array gives true for some function. Else returns false.
console.log([1, 2, 3, 4].every((el) => (el % 2 == 0))); //false
console.log([2 , 4].every((el) => (el % 2 == 0))); //true

//check all numbers are Multiple of 10 or not
console.log([10 , 20 ,30 , 40].every((el) => el % 10 == 0));


// 5. some :- returns true if some element of array gives true for some function. Else returns false.
console.log([1 , 2, 3, 4].some((el)=>(el % 2 == 0)));
console.log([1 , 3].some((el)=>(el % 2 == 0)));


// 6. Reduce :- reduces the all element of array.
//Q.Sum of all element of array.
let finalResult = arr.reduce((res , el) => {
    return res + el;
});
console.log(finalResult);

//Q.Max in array Using Reduce Method.
let maximum = arr.reduce((max , el) => {
    if(el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(maximum);

// Q. Min in array using reduce method
let minimum = arr.reduce((min , el) => {
    if(el < min){
        return el;
    }else{
        return min;
    }
});
console.log(minimum);