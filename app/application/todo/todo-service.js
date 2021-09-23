const Todo = require("../../domain/models/mongoose/todo");
const { v1: uuidv1 } = require('uuid');

class TodoService {

    async createTodo({ title, description, userId }) {
        if (!title && !description) {
            new Error('All inputs are required');
        }
        const todoId = uuidv1()

        const todo = await Todo.create({
            title,
            description,
            todoId,
            userId
        });

        return todo
    }

    async getTodoList(userId) {

        const todoList = await Todo.find({ userId });

        return todoList
    }

    async updateTodo({ userId, payload, todoId }) {
        const todo = Todo.updateOne({ userId, todoId }, { ...payload })

        return todo
    }

    async deleteTodo({ userId, todoId }) {
        const res = Todo.deleteOne({ userId, todoId });

        return res;
    }

    async getTodo({ userId, todoId }) {
        const res = Todo.findOne({ userId, todoId });

        return res;
    }
}

module.exports = new TodoService()