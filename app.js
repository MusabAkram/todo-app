const express = require('express');
require('dotenv').config()
require("./app/infrastructure/database/mongo-db").connect();
require("./app/infrastructure/database/mysql-db");

const todoRoutes = require('./app/http/routes/todo-routes')
const userRoutes = require('./app/http/routes/user-routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.send('This is a todo app!');
});

app.use('/todo', todoRoutes)
app.use('/user', userRoutes)

app.listen(process.env.API_PORT, function () {
    console.log(`App listening on port ${process.env.API_PORT}!`);
});