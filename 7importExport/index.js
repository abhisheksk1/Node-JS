const oper = require("./oper");


console.log(oper);
console.log(oper.add(5, 5));
console.log(oper.sub(10, 5));

// alternative..
console.log("Alternative....")
const { add, sub, multi } = require("./oper")

console.log(add(5, 5));
console.log(sub(10, 8));
console.log(multi(10, 8));