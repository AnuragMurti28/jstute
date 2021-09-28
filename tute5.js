// type conversion and type coercion
console.log("welcome to tute5");
let myVar;
myVar = String(34);
// console.log("type of " + myVar, (typeof myVar));
let booleanVar = String(true);
console.log("type of " + booleanVar + ": ", (typeof booleanVar));
let date = new Date();
console.log(date, (typeof date));
console.log("Date is converted into string");

let date2 = String(new Date());
console.log("date2 : " + date2, typeof(date2));

let arr = [1, 4, 12, 6, 7, 9, 3, 23];
console.log("arr :", arr, " type of arr: ", typeof(arr));
console.log("length function with array arr: ", arr.length);

let arr2 = String([1, 4, 12, 6, 7, 9, 3, 23]);
console.log("array converted: ", arr2, " type of arr2: ", typeof(arr2));
console.log("length function with array converted to string arr2: ", arr2.length);

const members = {
    standard: 11,
    Name: "Anurag",
    roll_number: 1,
};

// toString to convert into string
console.log("members object: ", members);
console.log("type of 'Name' in 'members' object: ", typeof(members.Name));
console.log("type of 'standard' in 'members' object: ", typeof(members.standard));
console.log("type of 'roll_number' in 'members' object: ", typeof(members.roll_number));

console.log("convert 'members' object into string using toString()");
const members1 = members.toString();
console.log("members.toString(): ", members, " converted into string");

// To Number() change into number.
let string = "2345";
let string2 = Number("669m8");
console.log("type of 'string' : ", string, " is ", typeof(string));
console.log("using 'Number()' function for 'string' variable ", Number(string));
console.log("using 'Number()' function ", Number("34f65"));
console.log("string2: ", string2);
console.log("using 'Number()' function for 'string2' ", Number(string2));
string3 = Number(true);
console.log("string3: ", string3);
string4 = Number(false);
console.log("string4: ", string4);
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("array2: ", array2);
console.log("array2 converted into number: ", Number(array2));

// ParseInt() and ParseFloat()
console.log("using parseInt() function");
let number5 = '34';
console.log("numbers5: ", number5, " type of number5: ", typeof(numbers5));
console.log('using parseInt function for number5: ', parseInt(number5));

// parseFloat() function
console.log("using parseFloat() function");
let number6 = '38.3543';
console.log("numbers6: ", number6, " type of number6: ", typeof(numbers6));
console.log('using parseFloat function number6: ', parseFloat(number6));

console.log("using number.toFixed() function for number6: ", parseFloat(number6).toFixed(7));

// Type Coercion
let mystr = "689";
let mynum = 453;
console.log("adding string + number: '689'+ 453: ", mystr + mynum);
console.log("adding string + number: 453 +'689': ", mynum + mystr);

console.log("changing string 'mystr' into number then adding Number(mystr) + mynum: ", Number(mystr) + mynum);