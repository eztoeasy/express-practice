const express = require('express');
const router = express.Router();

router.get('/', function(request, response){
    response.send('admin 이후 url');
});

router.get('/products', function(request, response){
    // response.send('admin products');
    response.render('admin/products.html', {
        message : '<h1>태그가 출력됩니다.</h1>',
        online : '~~~~@@'
    });
});

module.exports = router;