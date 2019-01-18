const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('In the middleware /users!');
    res.send('<h1>The "Users" page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the middleware /!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);