function function1_multi( a, b){
    return a * b
};

//////////////////////

const function2_multi = function (a ,b) {return a * b};

////////////////////

const function3_multi = new Function("a", "b", "return a * b");

let x = function3_multi(4, 3);

console.log(function1_multi(4,3))
console.log(function2_multi(4,3))
console.log(function3_multi(4,3))

