const { Sequelize, DataTypes } = require("sequelize");
const TodoModel = require("./todo");
const sequelize = new Sequelize("sqlite::memory:");

const UserModel = sequelize.define("user", {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    accessToken: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

});

UserModel.hasMany(TodoModel, {
    foreignKey: 'userId',
    as: 'todos',
});


module.exports = UserModel