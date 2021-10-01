import UserModel from '../models/user'

class UserRepository {
    constructor() {
        this.model = UserModel
    }

    static async create(userEntity) {
        return this.model.create(userEntity)
    }

    // static async update() {
    //     return this.model.update({
    //         ...payload
    //     })
    // }

    // static async get(id) {
    //     return this.model.fetchById(id)
    // }

    // static async getAll() {
    //     return this.model.fetchAll()
    // }

    // static async delete(id) {
    //     return this.model.delete(id)
    // }
}

module.exports = UserRepository