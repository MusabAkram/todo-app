const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const TodoModel = sequelize.define("todo", {
    todoId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        foreignKey: true,
        allowNull: false,
    },
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
});



module.exports = TodoModel