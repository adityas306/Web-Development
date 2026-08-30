let msg = "     hello       ";
//trims whitespaces from both ends of String and returns new one
let newMsg = msg.trim(); 
console.log("after trim : " , newMsg);
//Convert whole string into upperCase and return it
newMsg = newMsg.toUpperCase();
console.log("after uppercase : " , newMsg);
//Method Chaining
newMsg = msg.trim().toUpperCase();
console.log("after Method Chaining :" , newMsg);

//Returns a part of the Original String as a new String 
console.log("slice method : " , msg.slice(4 , 8));

//Returns the First index of occurence of some value in String or gives -1 if not found
console.log("index method : " , msg.indexOf('e'));

msg = "IloveCoding";

//Searches a value in the String and returns a new String with the value replaced 
newMsg = msg.replace("love" , "do");
console.log("Replace Method " , newMsg);

//Returns a String with the number  of copies of a String
newMsg = msg.repeat(3);
console.log("Repeat Method " , newMsg);