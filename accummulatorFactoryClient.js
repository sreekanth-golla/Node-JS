var factory = require('./accummulatorFactory');

var acc1 = factory();
console.log('Result:'+acc1.getResult());
acc1.add(100);
console.log('Result:'+acc1.getResult());

var acc2 = factory();
console.log('Result:'+acc2.getResult());
acc2.add(100);
console.log('Result:'+acc2.getResult());