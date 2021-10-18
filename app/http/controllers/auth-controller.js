const AuthService = require("../../application/auth/auth-service")
const LoginUserDTO = require("../../application/auth/dto/login-user-dto")

class AuthController {

    static async loginUser(req, res) {
        try {
            const dto = new LoginUserDTO({ email: req.body.email, password: req.body.password })

            const user = await AuthService.loginUser(dto)

            return res.status(200).json(user)

        } catch (err) {
            return res.status(400).json(err.message)
        }
    }
}

module.exports = AuthController