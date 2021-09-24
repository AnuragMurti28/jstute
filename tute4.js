// Primitive datatypes

// String
var myname = "Anurag";
console.log("This tutorial is practicing by " + myname);
console.log("Data type of name is " + typeof(myname));


// Numbers
let marks = 34;
console.log("Data type of marks is " + typeof(marks));


// boolean
let type = 3 > 5;
console.log("Data type of type is " + typeof(type));

// Undefined
let undef = undefined;
console.log("Data type of undef is " + typeof(undef));

// Arrays
myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type of undef is " + typeof(myarr));

// object literals
let stMarks = {
    anurag: 87,
    harshita: 67,
    shubham: 51,
};

console.log(stMarks);
console.log("data type of stMarks is " + typeof(stMarks));

// functions
function findName() {

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);