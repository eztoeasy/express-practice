const express = require('express');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

app.get('/', function(request, response){
    response.send('Hello Express!!!');
});

app.use('/admin', admin);

app.listen(port, function(){
    console.log('Express listening on port', port);
});