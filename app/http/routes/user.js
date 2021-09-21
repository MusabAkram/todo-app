const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

router.get("/", function (req, res) {
    res.send('Get user!');
})

router.post("/", UserController.createUser)

router.put("/", function (req, res) {
    res.send('Update user!');
})

router.delete("/", function (req, res) {
    res.send('Delete user!');
})

module.exports = router