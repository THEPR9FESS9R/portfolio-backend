const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello World!');
    // res.send('Hello World!')
    res.sendFile(path.resolve('./index.html'));
});

app.listen(80, () => {
});
