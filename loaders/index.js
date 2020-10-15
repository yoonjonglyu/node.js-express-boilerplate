const expressLoader = require('./express');

const init  = async ({ expressApp }) => {
    await expressLoader({ app : expressApp });
    console.log('Express Intialize');
}

exports.init = init;