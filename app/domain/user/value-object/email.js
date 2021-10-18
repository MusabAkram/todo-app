class Email {
    static sanitizeEmail(email) {
        return email.toLowerCase()
    }
}

module.exports = Email