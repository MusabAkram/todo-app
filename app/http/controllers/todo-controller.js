const TodoService = require("../../application/todo/todo-service");

class TodoController {

    async createTodo(req, res) {
        try {
            const { title, description } = req.body;
            const userId = req.params

            const todo = await TodoService.createTodo({ title, description, userId })

            res.status(201).json(todo);
        } catch (err) {
            return res.status(err.status).json(err.message)
        }
    }

    async getTodoList(req, res) {
        try {
            const { userId } = req.params
            const todo = await TodoService.getTodoList(userId)

            res.status(201).json(todo);
        } catch (err) {
            return res.status(err.status).json(err.message)
        }
    }
    async updateTodo(req, res) {
        try {
            const todo = await TodoService.updateTodo({})

            res.status(201).json(todo);
        } catch (err) {
            return res.status(err.status).json(err.message)
        }
    }
    async deleteTodo(req, res) {
        try {
            const todo = await TodoService.deleteTodo(req.params.todoId)

            res.status(201).json(todo);
        } catch (err) {
            return res.status(err.status).json(err.message)
        }
    }
}

module.exports = new TodoController()