const express = require("express");
const path = require("path");
const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
  allowHTTP1: true,
  key: fs.readFileSync(path.resolve("./certs/localhost.key")),
  cert: fs.readFileSync(path.resolve("./certs/localhost.crt"))
});

// server.on('request', (req, res) => {
//   // detects if it is a HTTPS request or HTTP/2
//   const { socket: { alpnProtocol } } = req.httpVersion === '2.0' ?
//     req.stream.session : req;
//   res.writeHead(200, { 'content-type': 'application/json' });
//   res.end(JSON.stringify({
//     alpnProtocol,
//     httpVersion: req.httpVersion
//   }));
// });

server.on("error", err => console.error(err));

server.on("stream", (stream, headers) => {
  // stream is a Duplex
  console.log("hit");
  stream.respond({
    "content-type": "text/html",
    ":status": 200
  });
  let readStream = fs.createReadStream(path.resolve("./index.html"));
  readStream.pipe(stream);
  // stream.end('<h1>Hello World</h1>');
});
const port = 8089;
// const ip = '0.0.0.0';
// console.log(`https://${ip}:${port}`);
server.listen(port);

// const app = express();

// app.get('/', (req, res) => {
//     console.log('Hello World!');
//     // res.send('Hello World!')
//     res.sendFile(path.resolve('./index.html'));
// });

// app.listen(80, () => {
// });
