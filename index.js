let emoji = require('node-emoji');
let http = require('http');

http.createServer((request, response) => {

    let thing = emoji.random().emoji;
    response.write(thing);
    response.end();
}).listen(8001);