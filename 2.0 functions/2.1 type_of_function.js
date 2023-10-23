// 1. Function Declaration
function function1_multi(a, b) {
    return a * b
};

// 2. Function Expression
const function2_multi = function (a, b) { return a * b };

// 3. Function Constructor
const function3_multi = new Function("a", "b", "return a * b");
let x = function3_multi(4, 3);

// 4. Arrow Function
const function4_multi = (a, b) => { return a * b };

// 5. Self Invoking Function
(function () {
    console.log("Hello! I called myself");
})();

console.log(function1_multi(4, 3));
console.log(function2_multi(4, 3));
console.log(function3_multi(4, 3));
console.log(function4_multi(4, 3));

