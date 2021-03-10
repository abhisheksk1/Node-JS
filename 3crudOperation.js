// Challenge time

// 1: Create a folder named it thapa
// 2: create a file in it named bio.txt and data into it..
// 3: Add more data into the file at the end of the existing data..
// 4: Read the data without getting the buffer data at first..
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder...

const fs = require('fs');

//  fs.mkdirSync('thapa');

//  fs.writeFileSync('thapa/bio.txt', 'Hi, my name is abhisek pandey');

//  fs.appendFileSync('thapa/bio.txt', ' welcome to my home');

const data = fs.readFileSync('thapa/bio.txt');
//  console.log(data);

const org_data = data.toString();
//  console.log(org_data);

//  fs.renameSync('thapa/bio.txt', 'thapa/mybio.txt');

//   fs.unlinkSync('thapa/mybio.txt');

fs.rmdirSync('thapa');