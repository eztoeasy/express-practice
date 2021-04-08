const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
});

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/uploads', express.static('uploads'));

app.use(function(request, response, next){
    app.locals.isLogin = true;
    next();
});

app.get('/', function(request, response){
    response.send('express start');
});

app.use('/admin', admin);

app.use(function(request, response, _){
    response.status(400).render('common/404.html');
});

app.use(function(request, response, _){
    response.status(500).render('common/500.html');
});


app.listen(port, function(){
    console.log('Express listening on port', port);
});