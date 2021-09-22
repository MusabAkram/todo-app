const Todo = require("../../domain/models/mongoose/todo");
const { v1: uuidv1 } = require('uuid');

class TodoService {

    async createTodo({ title, description }) {
        if (!title && !description) {
            new Error('All inputs are required');
        }
        const todoId = uuidv1()

        const todo = await Todo.create({
            title,
            description,
            todoId
        });

        return todo
    }

    async getTodoList() {

        const todoList = await Todo.find();

        return todoList
    }
}

module.exports = new TodoService()