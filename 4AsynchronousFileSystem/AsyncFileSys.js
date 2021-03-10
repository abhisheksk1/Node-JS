const fs = require('fs');

fs.writeFile('read.txt', 'Happy Saraswati Puja TO you and your family:)', (err) => {
    console.log('File is created')
});

//  we pass them a function as an argument - a callback -> that gets 
//  called when that task completes.
//  The callback has an argument that tells you whether the opertion 
//  completed successfully..
//  Now we need to say what to do when fs.writeFile() has completed
// (even if it's nothing), and stating checking for errors.....

//  fs.appendFile('read.txt', '\nplz welcome to the club', (err) => {
//    if (err) {
//        console.log(err);
//    }
//    console.log('File is updated')
//  })

fs.readFile('read.txt', "UTF-8", (err, res) => {
    console.log(res);
})