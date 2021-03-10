const fs = require('fs');

// Asynchronous
//fs.readFile('read.txt', 'UTF-8', (err, res) => {
//    console.log(res);
//})
//console.log("After the data")

// Synchronous

const data = fs.readFileSync('read.txt', 'utf-8');
console.log(data);
console.log("after the data");