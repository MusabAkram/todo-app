const User = require('../../../domain/user/user')
const { v1: uuidv1 } = require('uuid');

class CreateUserDTO {
    constructor({ firstName, lastName, email, password }) {
        this.user = User.create({ firstName, lastName, email, password, userId: uuidv1() })
    }

    getEmail() {
        return this.user.email
    }

    getUser() {
        return this.user
    }

    getUserId() {
        return this.user.userId
    }

    getPassword() {
        return this.user.password
    }
}

module.exports = CreateUserDTO