const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    uuid: { type: String, unique: true },
    title: { type: String, default: null },
    description: { type: String, default: null },
    todoId: { type: String, unique: true },
});

module.exports = mongoose.model("todo", todoSchema);