console.log("we are at tute6");
const author = 'Anurag';
const greeting = 'Good Morning';
console.log(greeting + " " + author);

let html;
html = '<h1> this is heading</h1>' + '<p>this is my para</p>';

html = html.concat('this', 'str2');
console.log(html);
console.log("length of HTML string: ", html.length);
console.log("toLowerCase() of HTML string: ", html.toLowerCase());
console.log("toUpperCase() of HTML string: ", html.toUpperCase());
console.log("original sting not changed: " + html);
console.log("starts from 0 and end noo limit: " +
    html[7]);

console.log(html.indexOf('g'));
console.log("using lastIndexOf", html.lastIndexOf('h1'));
console.log("using IndexOf", html.indexOf('h1'));
console.log("using IndexOf for unavailable substring", html.indexOf('strong'));
console.log("using for charAt: ", html.charAt(6));
console.log("using endsWith() function returns boolean if string ends with the passed value(false) in function: ", html.endsWith(false));
console.log("using endsWith() function returns boolean if string ends with the passed value(str2) in function: ", html.endsWith('str2'));
console.log("using includes() function returns boolean if string have substring as passed value(str2) in function: ", html.includes('str2'));
console.log("using includes() function returns boolean if string have substring as passed value(false) in function: ", html.includes(false));
console.log("using substring() function returns the elements at index passed in function if string have substring as passed value(1,9) in function: ", html.substring(1, 9));
let htmlarr = html.split(' ');
console.log("using split() function splits the string from the value that has been passed in split()(htmlarr = html.split(' ')) function as an array: ", htmlarr);
let htmlarr2 = html.split('<');
console.log("using split() function splits the string from the value that has been passed in split()(htmlarr2 = html.split('<')) function as an array: ", htmlarr2);
console.log("using slice() function returns the elements from rrange index passed in function if string have substring as passed value(1,9) in function: ", html.slice(1, 9));

console.log('compare: ', html);
console.log("using replace(1st,2nd) function replaces the frist occurence of 1st value (1st value from 2nd value): ", html.replace('is', 'that'));

console.log("Template Literals");
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myhtml = `Hello ${author}
    <h1> This is Example of Template literals</h1>
    <p>You like ${fruit1} and ${fruit2} </p>
`;
document.body.innerHTML = myhtml;