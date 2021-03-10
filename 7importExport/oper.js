const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const multi = (a, b) => {
    return a * b;
};



//module.exports.add = add;
//module.exports.sub = sub;
//module.exports.multi = multi;


// Alternative of above 3 line
module.exports = { add, sub, multi };