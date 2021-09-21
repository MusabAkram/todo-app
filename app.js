const express = require('express');
require('dotenv').config()
require("./app/infrastructure/config/database").connect();
const taskRoutes = require('./app/http/routes/task')
const userRoutes = require('./app/http/routes/user')
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/task', taskRoutes)
app.use('/user', userRoutes)

app.listen(process.env.API_PORT, function () {
    console.log(`App listening on port ${process.env.API_PORT}!`);
});