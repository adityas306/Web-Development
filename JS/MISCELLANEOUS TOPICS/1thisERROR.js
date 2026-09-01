//This KeyWord in JS
const student = {
    name: "Aditya",
    age:  23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}
console.log(student);
student.age = 25;
student.getAvg()
console.log(student);

//Error Handelling BY using Try and Catch
// let a = 10;
try{
    console.log(a);
}catch(err) {
    console.log("caught an error... a is not defined");
    // console.log(err);
}
