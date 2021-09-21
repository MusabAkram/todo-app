const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send('This is not the task you want but a task you need!');
})

module.exports = router