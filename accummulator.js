var y=0;
var accummulator = {
    add: function(x) {
        y +=x;
    },
    subtract: function(x) {
        y -=x;
    },
    multiply: function(x) {
        y *=x;
    },
    divide: function(x) {
        y /=x;
    }
};

function getResult() {
    return y;
};

module.exports = {
    add: accummulator.add,
    subtract: accummulator.subtract,
    multiply: accummulator.multiply,
    divide: accummulator.divide,
    getResult: getResult
}