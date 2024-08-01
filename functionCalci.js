function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function calculator(a, b, operation) {
    return operation(a, b);
}


console.log(calculator(3, 5, sum))            //8
console.log(calculator(33, 5, sub))           //28
console.log(calculator(13, 5, mul))           //65
console.log(calculator(30, 5, div))           //6