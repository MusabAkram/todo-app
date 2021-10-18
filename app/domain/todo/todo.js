
class Todo {
    constructor({
        todoId,

    }) {
        this.todoId = todoId

    }

    static async create(payload) {
        const todo = new Todo({
            todoId: payload.todoId,
            userId: payload.userId,
            title: payload.title,
            description: payload.description
        });

        return todo
    }



    static updateProps(props) {

    }

}

module.exports = Todo;