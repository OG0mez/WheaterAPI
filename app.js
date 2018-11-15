const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');


app.use(bodyParser.json());
app.use(express.static('public'))
routes(app);



module.exports  = app;