(function () {
    Calculator(100, 200);
})();

function Calculator(x, y) {
    console.log(add(x, y));
    console.log(subtract(x, y));
    console.log(multiply(x, y));
    console.log(divide(x, y));
}

function add(x, y) {
    return x+y;
}
function subtract(x, y) {
    return x-y;
}
function multiply(x, y) {
    return x*y;
}
function divide(x, y) {
    return x/y;
}