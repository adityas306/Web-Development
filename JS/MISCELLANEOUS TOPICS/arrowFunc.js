//Arrow Functions
const sum = (a , b) => {
    console.log(a + b);
};

const pow = (a , b) => {
    return a ** b;
}

const cube = (n) => {
    return n * n * n;
}

const sq = (n)  => {
    return n * n;
}
const hello = () => {
    console.log("Hello");
}
sum(1 , 1);
console.log(pow(2 , 4));
console.log(cube(6));
hello();
console.log(sq(6));

//Arrow Function implicit returns
const mul = (a , b) => a  * b;
console.log(mul(10 , 2));

const sum1 = (a , b) => a + b;
console.log(sum1(1 , 2));

// This with arrow function

const student = {
    name: "aman",
    marks: 95,
    prop: this, //Global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); //Student
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this); //Window
        } , 2000);
    }
}