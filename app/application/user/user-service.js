const UserRepository = require('../../infrastructure/database/sql/repository/user-repository');
const { Error } = require("mongoose");
class UserService {
    static async createUser(dto) {

        const oldUser = await UserRepository.findOne({ email: dto.getEmail() });

        if (oldUser) {
            throw new Error('User Already Exist. Please Login');
        }

        const user = UserRepository.create(dto.getUser())

        return user
    }

    static async getUser(userId) {
        const user = UserRepository.findOne({ userId })
        return user
    }


    static async updateUser(dto) {

        const user = await UserRepository.getById(dto.getUserId());

        if (user) {
            user.updateProps(dto.getPayload())

            await UserRepository.update(user)
        }


        return user
    }

    static async deleteUser({ userId }) {
        try {
            await UserRepository.deleteById(userId);

            return true;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = UserService