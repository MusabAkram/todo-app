const express = require('express');
const TodoController = require('../controllers/todo-controller');
const AuthMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get("/", AuthMiddleware, TodoController.getTodoList)

router.post("/", AuthMiddleware, TodoController.createTodo)

router.put("/:todoId", AuthMiddleware, TodoController.updateTodo)

router.get("/:todoId", AuthMiddleware, TodoController.getTodo)

router.delete("/:todoId", AuthMiddleware, TodoController.deleteTodo)

module.exports = router