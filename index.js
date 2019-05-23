const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
})

const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Listening on port ${port}.`)
})