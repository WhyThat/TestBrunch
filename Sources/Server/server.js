var express  = require('express');
var serverPort = 8080;

var app      = express();  
app.use(express.static('./public'));
app.get('*', function(req, res) {
        res.sendfile('../public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(serverPort);
console.log("App listening on port", serverPort);