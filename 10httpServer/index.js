// The http.createServer() method includes request and response paramater
// which is supplied by Node.js

// The request object can be used to get information about a current HTTP request..
// e.g.. url, request header, and data

// The response object can be used to send a response for a current HTTp request..

// if the response from the htttp server is supposed to be displayed as html,
// u should include an http header with the correct content type..

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if (req.url == "/") {
        res.end('Hello from the Home side..');
    } else if (req.url == "/about") {
        res.end('Hello from the About US side..');
    } else if (req.url == "/contact") {
        res.end('Hello from the Contact US side..');
    } else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
            console.log(data);
            const objData = JSON.parse(data);
            res.end(objData[2].name);
        });
        res.end('Hello from the userAPI side..');
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Page doesn't exist, 404 error</h1>");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to the port number 8000");
});