//                Node.js Core Module
// consider modules to be the same as JS libraries.
// A set of functions you want to include in your application..

// Node.js has a set of built-in modules which you can use without any installation..


const fs = require('fs'); //
fs.writeFileSync('read.txt', "Hi, I'M Abhishek "); //create a new file and adding data to it

fs.appendFileSync("read.txt", "How are You ?") // append the read.txt file

// Node.js includes an additional data type called Buffer
//(not available in Browser's JS)
//Buffer is mainly used used to store binary data
// While reading from a file or receving packets over the network....


const buf_data = fs.readFileSync('read.txt');
console.log(buf_data); //<Buffer 48 69 2c 20 49 27 4d 20 41 62 68 69 73 68 65 6b 20 48 6f 77 20 61 72 65 20 59 6f 75 20 3f>


org_data = buf_data.toString();
console.log(org_data);




///            RENAME THE FILE
fs.renameSync('read.txt', 'readWrite.txt');