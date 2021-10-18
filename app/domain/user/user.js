const Email = require('./value-object/email')
const Password = require('./value-object/password')
const Token = require('./value-object/token')

class User {
    constructor({
        userId,
        firstName,
        lastName,
        email,
        password,
        accessToken
    }) {
        this.userId = userId
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.accessToken = accessToken
    }

    static create(payload) {
        const user = new User({
            userId: payload.userId,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: Email.sanitizeEmail(payload.email),
            password: Password.hashPassword(payload.password),
            accessToken: payload.accessToken
        });

        return user
    }

    static setPassword(password) {
        this.password = Password.hashPassword(password)
    }

    static setAccessToken(token) {
        this.accessToken = token
    }

    static updateProps(props) {
        this.userId = props.userId || this.userId
        this.firstName = props.firstName || this.firstName
        this.lastName = props.lastName || this.lastName
        this.accessToken = props.accessToken || this.accessToken
    }

}

module.exports = User;