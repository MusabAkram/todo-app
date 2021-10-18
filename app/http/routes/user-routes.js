const express = require('express');
const UserController = require('../controllers/user-controller');
const AuthMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get("/", function (req, res) {
    res.send('Get user!');
})

router.post("/", UserController.createUser)

router.get("/:userId", AuthMiddleware, UserController.getUser)

router.put("/", AuthMiddleware, UserController.updateUser)

router.delete("/", function (req, res) {
    res.send('Delete user!');
})

module.exports = router