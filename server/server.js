const _express = require('express');
const _path = require('path');

const publicPath = _path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = _express();

app.use(_express.static(publicPath));

app.listen(port, () => {
    console.log('Start up at port ', port);
});