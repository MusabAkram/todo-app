const CreateTodoDTO = require("../../application/todo/dto/create-todo-dto");
const TodoService = require("../../application/todo/todo-service");

class TodoController {

    async createTodo(req, res) {
        try {
            const { title, description } = req.body;
            const { userId } = req

            const dto = new CreateTodoDTO({ title, description, userId })

            const todo = await TodoService.createTodo(dto)

            res.status(201).json(todo);
        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

    async getTodoList(req, res) {
        try {
            const { userId } = req

            const todo = await TodoService.getUserTodoList(userId)

            res.status(200).json(todo);

        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

    async updateTodo(req, res) {
        try {
            const { userId } = req
            const payload = req.body
            const { todoId } = req.params

            const todo = await TodoService.updateTodo({ userId, payload, todoId })

            res.status(201).json(todo);
        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

    async deleteTodo(req, res) {
        try {
            const { userId, params: { todoId } } = req


            const todo = await TodoService.deleteTodo({ userId, todoId })

            res.status(201).json(todo);
        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

    async getTodo(req, res) {
        try {
            const { userId, params: { todoId } } = req

            const todo = await TodoService.getTodo({ userId, todoId })

            res.status(201).json(todo);
        } catch (err) {
            return res.status(400).json(err.message)
        }
    }
}

module.exports = new TodoController()