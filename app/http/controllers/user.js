const User = require("../../domain/models/user");
const UserService = require("../../application/user/user-service");

class UserController {

    async createUser(req, res) {
        const { firstName, lastName, email, password } = req.body;

        const user = await UserService.createUser({ firstName, lastName, email, password })

        res.status(201).json(user);
    } catch(err) {
        throw Error(err)
    }
}

module.exports = new UserController()