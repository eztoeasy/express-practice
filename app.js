const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
});

// 미들웨어 셋팅
app.use(logger('dev'));

app.get('/', function(request, response){
    response.send('express start');
});

app.use('/admin', admin);

app.listen(port, function(){
    console.log('Express listening on port', port);
});