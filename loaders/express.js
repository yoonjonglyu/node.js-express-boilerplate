const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const expressMiddleWare = async ({ app }) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    
    app.enable('trust proxy');
    app.use(cors());
    app.use(require('morgan')('dev'));
    app.use(express.json());
    // parse application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));
    // use cookie parser for secure httpOnly cookie
    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.use('/static', express.static(path.join(__dirname, '../','public')));

    return app;
};

module.exports = expressMiddleWare;