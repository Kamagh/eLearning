require('dotenv').config();
module.exports = {
    sequelizeConfig: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_DATABASE || 'eLearning_local',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_CONNECTION || 'mysql',
        logging: false,
    },
    authConfig: {
        jwtSecret: process.env.ACCESS_TOKEN_SECRET || 'secret',
        jwtExpire: process.env.JWT_EXP || '3600s',
    },
};
