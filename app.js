const loaders = require ('./loaders');
const express = require('express');
const {
    PORT
} = require('./config');

const indexRouter = require('./api/index');

const startServer = async () => {
    const app = express();
    await loaders.init({ expressApp : app});

    /** router */
    
    app.use('/', indexRouter);

    app.listen(PORT, err =>{
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Server Ready`);
    });
};

startServer();