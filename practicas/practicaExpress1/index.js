const express = require('express');
const app = express();

let PORT = 8080;

app.get('/', (req, res) => res.send('hello world'))
app.listen(PORT, () => console.log('server anda'))