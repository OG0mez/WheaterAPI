const app = require('./app');
const {promisify} = require('util');
const {PORT} = process.env;
const startServer = async()=>{
    await promisify(app.listen).bind(app)(PORT);
    console.log(`sever runing on port: ${PORT}`);
}

startServer();