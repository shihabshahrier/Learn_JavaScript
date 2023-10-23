for (let i = 0; i <= 10; i++) { // for loop
    console.log(i);
}

for (let i = 0; i <= 10; console.log(i++)) { } // for loop // same as above


let lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // for each loop
for (let i of lst) { // for each loop
    console.log(i);
}

for (let i in lst) { // for each loop
    console.log(lst[i]);
}

let obj = { "name": "John", "age": 30, "city": "New York" }; // for each loop
for (let i in obj) { // for each loop
    console.log(obj[i]);
}








