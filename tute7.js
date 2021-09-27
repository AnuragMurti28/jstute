console.log("we are in tute7.js and let discuss arrays and ojects");
const marks = [81, 54, 68, 78, 77, 88];
const fruits = ['Orange', 'Apple', 'Pineapple', 'Banana'];
const mixed = ['str', 89, [35, 68]];
const arr = new Array(23, 46, 'Peach', 87);
console.log('arr: ', arr);
console.log('mixed: ', mixed);
console.log('fruits: ', fruits);
console.log('marks: ', marks);
console.log('fruits[1]: ', fruits[1]);

console.log("modify array using index assigning arr[1]= 334");
arr[1] = 334;
console.log("arr after changing arr[1] element: ", arr);
console.log("assigning value of array to a variable");
let marks3 = marks[3];
console.log("assigned value of marks[3] to marks3: ", marks3);

console.log("arr.length is property: not method", arr.length);
console.log("isArray() is method returns boolean if passed value(Pineapple) is an array or not: ", Array.isArray('Pineapple'));
console.log("isArray() is method returns boolean if passed value(marks) is an array or not: ", Array.isArray(marks));
console.log("isArray() is method returns boolean if passed value(arr) is an array or not: ", Array.isArray(arr));

let value = marks.indexOf(77);
console.log("indexof(77) returns the index of the value passed: ", value);
console.log("value = marks.indexof(77): ", value);
console.log("unshift() inserts element in starting of array");
marks.unshift(1009);
console.log("marks[] after unshift(1009): ", marks);
console.log("push() insert element in last of array");
fruits.push('Papaya');
console.log("fruits[] after push(Papaya): ", fruits);