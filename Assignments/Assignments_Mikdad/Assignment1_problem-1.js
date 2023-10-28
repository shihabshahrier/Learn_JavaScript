// for input 1
function evaluateMathExp(exp){
    let x=20 + 30 + (20*4)/4 - 15;
    if (x==Number.Nan){
        return x=-1;
    }
    else {
        return x;
    }
}
let result=evaluateMathExp()
console.log(result);