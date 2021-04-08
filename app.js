const express = require('express');

const app = express();
const port = 3000;

app.get('/', function(request, response){
    response.send('Hello Express!!!');
});

app.get('/fastcampus', function(request, response){
    response.send('fastcampus get');
});

app.listen(port, function(){
    console.log('Express listening on port', port);
});