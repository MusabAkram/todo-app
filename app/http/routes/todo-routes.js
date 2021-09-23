const express = require('express');
const TodoController = require('../controllers/todo-controller');
const AuthMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get("/", AuthMiddleware, TodoController.getTodoList)

router.post("/", AuthMiddleware, TodoController.createTodo)

module.exports = router