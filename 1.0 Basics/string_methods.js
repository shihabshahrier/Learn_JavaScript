let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // slice(start, end)
console.log(part);

let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(-12, -6); // slice(start, end)
console.log(part2);

let part3 = text.slice(-12); // slice(start) // if end is not given, it will slice till the end
console.log(part3);


let text3 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // replace(old, new)
console.log(newText);

let newText2 = text.replace(/MICROSOFT/i, "W3Schools"); // replace(old, new) // i is used to ignore case
console.log(newText2);

let text4 = "Please visit Microsoft and Microsoft!";
let newText3 = text.replace(/Microsoft/g, "W3Schools"); // replace(old, new) // g is used to replace all
console.log(newText3);

let text5 = "Cats and dogs are the best friends of human. Cats are cute.";
text6 = text.replaceAll("Cats", "Dogs"); // replaceAll(old, new)
text7 = text.replaceAll(/Cats/g, "Dogs"); // replaceAll(old, new) // g is used to replace all

console.log(text6);
console.log(text7);

let text8 = "Hello World!"; // string
let text9 = text8.toUpperCase(); // toUpperCase()
console.log(text9);

let text10 = "Hello World!"; // string
let text11 = text10.toLowerCase(); // toLowerCase()
console.log(text11);

let text12 = "Hello World!"; // string
let text13 = text12.concat(" ", "Have a nice day!"); // concat()
console.log(text13);


let text14 = "Hello World!"; // string
let text15 = text14.trim(); // trim() // removes whitespace from both sides of a string
console.log(text15);

let text114 = "    Hello World!"; // string
let text115 = text114.trimStart(); // trimStart() // removes whitespace from the beginning of a string
console.log(text115);

let text116 = "Hello World!    "; // string
let text117 = text116.trimEnd(); // trimEnd() // removes whitespace from the end of a string
console.log(text117);


let text16 = "Hello World!"; // string
let text17 = text16.startsWith("Hello"); // startsWith() // returns true if the string starts with the specified value, otherwise false
console.log(text17);

let text18 = "Hello World!"; // string
let text19 = text18.endsWith("World!"); // endsWith() // returns true if the string ends with the specified value, otherwise false
console.log(text19);

let text20 = "Hello World!"; // string
let text21 = text20.includes("World"); // includes() // returns true if the string contains the specified value, otherwise false
console.log(text21);

let text22 = "Hello World!"; // string
let text23 = text22.search("World"); // search() // returns the position of the first occurrence of a specified text in a string
console.log(text23);

let text24 = "Hello World!"; // string
let text25 = text24.indexOf("World"); // indexOf() // returns the position of the first occurrence of a specified value in a string
console.log(text25);








