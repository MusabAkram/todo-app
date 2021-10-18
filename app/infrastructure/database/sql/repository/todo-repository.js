const TodoModel = require('../models/todo')
class TodoRepository {
    constructor() {
        this.model = TodoModel
    }

    static create(userEntity) {
        return this.model.create(userEntity)
    }

    static update(payload) {
        return this.model.update(payload, {
            where: {
                userId: payload.userId
            }
        })
    }

    static getById(id) {
        return this.model.findOne({
            where: { todoId: id }
        })
    }

    static find(filters) {
        return this.model.findOne({
            where: filters
        })
    }

    static getAll() {
        return this.model.findAll()
    }

    static deleteById(todoId, userId) {
        return this.model.destroy({
            where: { userId: userId, todoId: todoId }
        })
    }
}

module.exports = TodoRepository