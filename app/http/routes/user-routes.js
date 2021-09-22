const express = require('express');
const UserController = require('../controllers/user-controller');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get("/", function (req, res) {
    res.send('Get user!');
})

router.post("/", UserController.createUser)

router.get("/login", UserController.loginUser)

router.get("/:userId", authMiddleware, UserController.getUser)

router.put("/", function (req, res) {
    res.send('Update user!');
})

router.delete("/", function (req, res) {
    res.send('Delete user!');
})

module.exports = router