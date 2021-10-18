const bcrypt = require('bcrypt')

class Password {
    constructor(value) {
        this.value = value
    }
    static hashPassword(password) {
        return bcrypt.hash(password, 10);
    }

    static createFromValue(password) {
        return new Password(bcrypt.hash(password, 10))
    }
}

module.exports = Password