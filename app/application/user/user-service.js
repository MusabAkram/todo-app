const User = require("../../domain/models/mongoose/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { v1: uuidv1 } = require('uuid');

class UserService {
    async createUser({ firstName, lastName, email, password }) {
        if (!(email && password && firstName && lastName)) {
            throw new Error('All inputs are required');
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            throw new Error('User Already Exist. Please Login');
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const userId = uuidv1()
        const token = jwt.sign(
            { userId },
            process.env.TOKEN_SECRET,
            {
                expiresIn: "2h",
            }
        );

        const user = await User.create({
            userId,
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword,
            accessToken: token
        });

        return user
    }

    async getUser(userId) {
        const user = User.findOne({ userId })
        return user
    }

    async loginUser({ email, password }) {
        const user = await User.findOne({ email })

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign(
            { userId: user.userId },
            process.env.TOKEN_SECRET,
            {
                expiresIn: "2h",
            }
        );

        console.log(token);
        user.update({ accessToken: token })

        return user
    }

    async updateUser({ userId, payload }) {
        const user = User.updateOne({ userId }, { ...payload })

        return user
    }

    async deleteUser({ userId }) {
        const res = User.deleteOne({ userId });

        return res;
    }
}

module.exports = new UserService()