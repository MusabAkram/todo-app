const Todo = require("../../domain/todo/todo");
const { v1: uuidv1 } = require('uuid');
const TodoRepository = require("../../infrastructure/database/sql/repository/todo-repository");

class TodoService {

    static async createTodo(dto) {

        const todo = await TodoRepository.create(dto.getTodo());

        return todo
    }

    async getUserTodoList(userId) {

        const todoList = await TodoRepository.find({ userId });

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