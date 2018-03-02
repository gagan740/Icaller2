const express   =   require('express');
const mongoose  =   require('mongoose');
const path      =   require('path');
const bodyParser=   require('body-parser');
const router	=	express.Router();
const appRoutes	=	require('./app/routes/api')(router);

const app       =   express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api',appRoutes);

app.use(express.static(__dirname + '/icaller/dist/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/icaller/dist/index.html'));
});

module.exports = app;