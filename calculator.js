var calculator = {
    add: function(x,y){
        return x+y;
    }
};
module.exports = calculator;
//module.exports.add = calculator.add;
/*module.exports = {
    add : calculator.add
};*/
console.log("module.exports"+module.exports); 