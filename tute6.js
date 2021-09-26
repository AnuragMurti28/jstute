console.log("we are at tute6");
const name = 'Anurag';
const greeting = 'Good Morning';
console.log(greeting + " " + name);

let html;
html = '<h1> this is heading</h1>' + '<p>this is my para</p>';

html = html.concat('this');
console.log(html);
console.log("length of HTML string: ", html.length);
console.log("toLowerCase() of HTML string: ", html.toLowerCase());
console.log("toUpperCase() of HTML string: ", html.toUpperCase());
console.log("original sting not changed: " + html);
console.log("starts from 0 and end noo limit: " +
    html[7]);

console.log(html.indexOf('g'));
console.log("using lastIndexOf", html.lastIndexOf(6));
console.log("using for charAt", html.charAt(6));
console.log(html.endsWith(false));