const UserService = require("../../application/user/user-service");
const { v1: uuidv1 } = require('uuid');

class UserController {

    async createUser(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;
            const uuid = uuidv1()
            const user = await UserService.createUser({ firstName, lastName, email, password, uuid })

            res.status(201).json(user);
        } catch (err) {
            return res.status(400).json(err.message)
        }
    }

    async getUser(req, res) {
        const user = await UserService.getUser(req.params.userId)

        return res.status(200).json(user)
    }

    async loginUser(req, res) {
        try {
            const user = await UserService.loginUser({ email: req.params.email, password: req.params.password })

            return res.status(200).json(user)

        } catch (error) {
            return res.status(400).json(err.message)
        }
    }

    async updateUser(req, res) {
        try {
            const payload = req.body
            const { userId } = req.params

            const user = await UserService.updateUser({ userId, payload })

            return res.status(204).json(user)
        } catch (error) {

        }
    }

    async deleteUser(req, res) {
        try {
            const { userId } = req.params

            await UserService.deleteUser({ userId })

            return res.status(204).json({
                message: "Record deleted successfully!"
            })
        } catch (error) {

        }
    }

}

module.exports = new UserController()