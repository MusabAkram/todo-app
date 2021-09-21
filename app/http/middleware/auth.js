const auth = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        res.send({
            message: "unauthorized",
        }, 401)
    }
    return next()
}
module.exports = auth