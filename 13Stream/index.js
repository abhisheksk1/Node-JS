// Streams are the objects that let u read data from a source or write data to a 
// destination in contionous fashion..

// Streaming means listening to music or watching video in "real time", instead of
// downloading a file to computer and watching it later.

// Readable:- Stream which is used for read operation.
// Writable:- Stream which is used for write operation.
// Duplex:- Stream which can be used for both read and write operation.
// Transform:- A type of duplex stream where the output is computed based on input.

// Each type of stream is an EventEmitter instance and throws several events at
// different instances of time. for eg:- some of the commonly used events are_..

// data:- This event is fired when there is data is available to read.
// end:- This event is fired when there is no more data to read.
// error:- This event is fired when there is an error receiving or writing data.
// finish:- This event is fired when all the data has been flushed out to underlying system..


const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt", (err, data) => {
    //    if (err) return console.log(err);
    //    res.end(data.toString());
    // });

    // 2nd way (i.e streaming way)
    // Read from a stream
    // Create a Readable Stream
    // Handle Stream Events ---> data, end and error

    const rstream = fs.createReadStream("input.txt");

    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on('end', () => {
        res.end();
    });
    rstream.on("error", () => {
        console.log(err);
        res.end("File Not Found..")
    });

    // 3rd way
    rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");