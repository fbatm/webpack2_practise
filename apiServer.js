var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var {apiHandler} = require('./apiHandler');

app.set('host', (process.env.APIHOST || "localhost"));
app.set('port', (process.env.APIPORT || "8881"));

app.use('/api/local/*', (req, res)=>{
    let targetFileName = req.baseUrl.replace('local/', '') + '.json';
    res.sendFile(path.join(__dirname, targetFileName));
})

app.use('/api/ajax/:api', bodyParser.json(), (req, res)=>{
    apiHandler(req, res);
})

app.listen(app.get('port'), app.get('host'),function(error) {
    if (error) {
        console.error(error)
    } else {
        console.log('api server started: http://'+app.get('host')+':' + app.get('port') + '/');
    }
})
