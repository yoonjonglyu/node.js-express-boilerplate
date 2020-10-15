const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT : process.env.PORT,
    DATABASE_HOST : process.env.DATABASE_URI,
}

module.exports = config;