//Odd Number From 1 to 100
console.log("Odd number");
for(let i = 1; i <= 100; i += 2){
    console.log(i)
}

//Even Number from 1 to 100
console.log("Even");
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

//Multiplication table
let n = 5;
for(let i = 1; i <= 10; i++){
    console.log(`${n} * ${i} = ${n * i}`); //Used template literals
}

//Nested Loops
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        // console.log(j);
        process.stdout.write(i + " ");
    }
    console.log();
}

//while Loop
//Print Number From 1 to 5 by using while loop
let j = 1;
while(j <= 5){
    console.log(j);
    j++;
}

//Loops with Array
let fruits = ["mango" , "apple" , "banana" , "litchi" , "orange"];
for(let i = 0 ; i < fruits.length; i++){
    console.log(i , fruits[i]);
}

//Loops with Nested Arrays
let heroes = [
    ["ironman" , "spiderman" , "thor"],
    ["superman" , "wonder womman" , "flash"]
];
for(let i = 0; i < heroes.length; i++){
    console.log(`List #${i}`);
    for(let j = 0; j < heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

//ForOf LOOP
console.log("-------For OF LOOP--------");
fruits = ["mango" , "apple" , "banana" , "litchi" , "orange"];
for(fruit of fruits) {
    console.log(fruit);
}

for(char of "schools") {
    console.log(char);
}

//for Of Loop in Nested Array
heroes = [
    ["ironman" , "spiderman" , "thor"],
    ["superman" , "wonder womman" , "flash"]
];
for(list of heroes) {
    for(hero of list){
        console.log(hero);
    }
}