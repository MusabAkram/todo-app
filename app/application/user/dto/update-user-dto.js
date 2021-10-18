class UpdateUserDTO {

    constructor({ userId, payload }) {
        this.userId = userId
        this.payload = payload
    }

    getUserId() {
        return this.userId;
    }

    getPayload() {
        return this.payload
    }
}

module.exports = UpdateUserDTO