const jwt = require('jsonwebtoken')
const authMiddleware = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        res.send({
            message: "unauthorized",
        }, 401)
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(401);
        req.userId = user.userId
        return next()
    })
}
module.exports = authMiddleware