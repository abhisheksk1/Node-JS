const os = require('os');

console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory); // in bytes

console.log(`${freeMemory / 1024 / 1024 / 1024}`); // in GB

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`); // totalMemory

console.log(os.hostname()); //HostName

console.log(os.platform()); // Platform

console.log(os.type()); // Type of OS Module