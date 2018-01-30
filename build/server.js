var express = require('express');
var app = express();
var server = require('http').Server(app);
var compression = require('compression');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var {apiHandler} = require('./apiHandler');

// compress all responses
app.use(compression());
//setting various HTTP headers
app.use(helmet());

app.use('/src', express.static('src'));
app.use('/api/ajax/:api', bodyParser.json(), (req, res)=>{
    apiHandler(req, res);
})

server.listen('8887', ()=>{
    console.log('server start');
});