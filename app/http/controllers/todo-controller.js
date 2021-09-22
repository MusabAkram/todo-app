const TodoService = require("../../application/todo/todo-service");

class TodoController {

    async createTodo(req, res) {
        try {
            const { title, description } = req.body;

            const todo = await TodoService.createTodo({ title, description })

            res.status(201).json(todo);
        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

    async getTodoList(req, res) {
        try {
            const todo = await TodoService.getTodoList(req.params.todoId)

            res.status(201).json(todo);
        } catch (err) {
            return res.status(400).json(err.message)
        }
    }
}

module.exports = new TodoController()