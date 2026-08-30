//Object Literal
const post =  {
    username: "@adityas",
    content: "This is my First Post",
    likes: 150,
    reposts: 5,
    tags: ["@aditya" , "@saditya"]
};
console.log(post);
console.log(post["prop"])

//Get Values
const Student = {
    name: "Aditya",
    marks: 94.4,
    age: 20,
    city: "Delhi"
};
console.log(Student["name"]);
console.log(Student.name);

// Add/Update Values
Student.city = "Mumbai";
// Student["city"] = "Mumbai"
Student.gender =  "Male";
console.log(Student);

//Delete Values
delete Student.age;
console.log(Student);

//Nested Objects - Objects Of Objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
}
console.log(classInfo);
console.log(classInfo.karan.grade);
classInfo.karan.grade = 'B';
console.log(classInfo.karan);

//Array Of Objects
const classInfos = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "shradha",
        grade: "A",
        city: "Pune"
    },
    {
        name: "Karan",
        grade: "O",
        city: "Mumbai"
    }
];
console.log(classInfos);
classInfos[1].city = "Gurgaon";
console.log(classInfos);

//Generate Random NUmber
let num = Math.random();
num = num * 10;
num = Math.floor(num);
num += 1;
console.log(num); 
//OR
let random = Math.floor(Math.random() * 10) +  1;
console.log(random);

//Generate Random Number From 1 to 100
random = Math.floor(Math.random() * 100) + 1;
console.log(random);

//Generate a Random Number From 1 to 5
random = Math.floor(Math.random() * 5) + 1
console.log(random);

