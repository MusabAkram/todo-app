const UserModel = require('../models/user')
const User = require('../../../../domain/user/user')

class UserRepository {
    constructor() {
        this.model = UserModel
    }

    create(userEntity) {
        return this.model.create(userEntity)
    }

    async update(userEntity) {
        await this.model.update(userEntity, {
            where: {
                userId: userEntity.userId
            }
        })

        return true
    }

    async findOne(filters) {
        console.log(filters);
        const user = await this.model.findOne({
            where: filters
        })

        if (!user) {
            return false;
        }

        return User.create(user)
    }

    async getById(id) {
        const user = await this.model.findOne({
            where: { userId: id }
        })

        if (!user) return false

        return User.create(user)
    }


    async find(filters) {
        const users = await this.model.findOne({
            where: filters
        })

        if (!users) return false

        return users.map(user => {
            return User.create(user)
        });
    }

    async getAll() {
        const users = await this.model.findAll()

        if (!users) return false

        return users.map(user => {
            return User.create(user)
        });
    }

    async deleteById(id) {
        return this.model.destroy({
            where: { userId: id }
        })
    }
}

module.exports = new UserRepository(UserModel)