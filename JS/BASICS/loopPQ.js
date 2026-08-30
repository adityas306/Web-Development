//1 Write a JS program to delete all occurrences of element ‘num’ in a given array.
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num  =  2;
console.log(arr);
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == num){
        arr.splice(i , 1);
    }
}
console.log(arr);

//2 Write a JS program to find the no of digits in a number
num = 287152;
let numCopy = num;
count = 0;
while(numCopy != 0){
    numCopy = Math.floor(numCopy / 10);
    count++;
}
console.log("No. of Digits in NUmber " , count);

//3 Write a JS program to find the sum of digits in a number
sum = 0;
while(num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("sum of Digits " , sum);

//4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
let n = 5;
let fact = 1;
for(let i = 1; i <= n; i++){
    fact *= i;
}
console.log("Factorial of Number is " , fact);

//5. Find the largest number in an array with only positive numbers.
let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
let largest = arr1[0];
for(let i = 1; i < arr1.length; i++){
    if(largest < arr1[i]){
        largest = arr1[i];
    }
}
console.log("Largest Number in an Array is " , largest);