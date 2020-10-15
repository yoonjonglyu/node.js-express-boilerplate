const express = require('express');
const cors = require('cors');

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
    //app.use(express.cookieParser(process.env.COOKIE_SECRET));
    //app.use(express.static(path.join(__dirname, 'public')));
    return app;
};

module.exports = expressMiddleWare;