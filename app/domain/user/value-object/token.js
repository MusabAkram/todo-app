const jwt = require('jsonwebtoken');


class Token {
    static createToken(userId) {
        jwt.sign(
            { userId },
            process.env.TOKEN_SECRET,
            {
                expiresIn: "2h",
            }
        );
    }
}

module.exports = Token