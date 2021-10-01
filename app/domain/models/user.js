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
        this.setAccessToken(accessToken)
    }

    static create(payload) {
        return new User({
            userId: payload.userId,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password,
            accessToken: payload.accessToken
        });
    }

    static setAccessToken(token) {
        this.accessToken = token
    }
}