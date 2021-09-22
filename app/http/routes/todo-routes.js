const express = require('express');
const TodoController = require('../controllers/todo-controller');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get("/", TodoController.getTodoList)

router.post("/", authMiddleware, TodoController.createTodo)

module.exports = router