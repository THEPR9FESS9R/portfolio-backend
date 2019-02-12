const express = require('express');
const path = require('path');
const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync(path.resolve('./certs/localhost.key')),
    cert: fs.readFileSync(path.resolve('./certs/localhost.crt'))
  });
  server.on('error', (err) => console.error(err));
  
  server.on('stream', (stream, headers) => {
    // stream is a Duplex
    console.log('hit');
    stream.respond({
      'content-type': 'text/html',
      ':status': 200
    });
    let readStream = fs.createReadStream(path.resolve('./index.html'));
    readStream.pipe(stream);
    // stream.end('<h1>Hello World</h1>');
  });
  
  console.log('https://localhost:8089');
  server.listen(8089, '127.0.0.1');

// const app = express();

// app.get('/', (req, res) => {
//     console.log('Hello World!');
//     // res.send('Hello World!')
//     res.sendFile(path.resolve('./index.html'));
// });

// app.listen(80, () => {
// });
