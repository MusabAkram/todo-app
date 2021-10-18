const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserRepository = require('../../infrastructure/database/sql/repository/user-repository')

class AuthService {

    static async loginUser(dto) {

        const user = await UserRepository.findOne({ email: dto.getEmail() })

        const isValidPassword = await bcrypt.compare(dto.getPassword(), user.password)

        if (!isValidPassword) {
            throw new Error('Invalid credentials');
        }

        user.accessToken = this.createAccessToken(user.userId)

        UserRepository.update(user)

        return user
    }

    static createAccessToken(userId) {
        jwt.sign(
            { userId },
            process.env.TOKEN_SECRET,
            {
                expiresIn: "2h",
            }
        );
    }

}

module.exports = AuthService