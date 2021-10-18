const Todo = require('../../../domain/todo/todo')
const { v1: uuidv1 } = require('uuid');

class CreateTodoDTO {
    constructor({ title, description, userId }) {
        this.todo = Todo.create({ title, description, userId, todoId: uuidv1() })
    }

    getTodoId() {
        return this.todo.todoId
    }

    getTodo() {
        return this.todo
    }

    getUserId() {
        return this.todo.userId
    }
}

module.exports = CreateTodoDTO