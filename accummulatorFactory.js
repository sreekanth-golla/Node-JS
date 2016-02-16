console.log('loading accummulatorFactory');

function accummulatorFactory(){
    var result = 0;
    function add(x) {
        result +=x;
    }
    function getResult() {
        return result;
    }
    return {
        add : add,
        getResult: getResult
    }
}

module.exports = accummulatorFactory;