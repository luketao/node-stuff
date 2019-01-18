const express = require('express');

const Router = express.Router();

// /admin/add-product => GET
Router.get('/add-product', (req, res, next) => {
    console.log('In the middleware 2!');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
});

// /admin/add-product => POST
Router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = Router;