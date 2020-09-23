const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const apiRouter= require('./routes/api');

require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api' , apiRouter);
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});