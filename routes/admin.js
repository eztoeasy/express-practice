const express = require('express');
const router = express.Router();

router.get('/', function(request, response){
    response.send('admin 이후 url');
});

router.get('/products', function(request, response){
    // response.send('admin products');
    response.render('admin/products.html', {
        message : 'hello!!',
        online : '~~~~@@'
    });
});

module.exports = router;