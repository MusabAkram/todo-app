const CreateUserDTO = require("../../application/user/dto/create-user-dto");
const UpdateUserDTO = require("../../application/user/dto/update-user-dto");
const UserService = require("../../application/user/user-service");
class UserController {

    static async createUser(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;

            const dto = new CreateUserDTO({ firstName, lastName, email, password })

            const user = await UserService.createUser(dto)

            return res.status(201).json(user);

        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

    static async getUser(req, res) {
        const { userId } = req

        const user = await UserService.getUser(userId)

        return res.status(200).json(user)
    }

    static async updateUser(req, res) {
        try {
            const payload = req.body
            const { userId } = req

            const dto = new UpdateUserDTO({ userId, payload })

            const user = await UserService.updateUser(dto)

            return res.status(204).json(user)

        } catch (error) {
            return res.status(err.status).json(err.message)
        }
    }

    static async deleteUser(req, res) {
        try {
            const { userId } = req

            await UserService.deleteUser({ userId })

            return res.status(204).json({
                message: "Record deleted successfully!"
            })

        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

}

module.exports = UserController