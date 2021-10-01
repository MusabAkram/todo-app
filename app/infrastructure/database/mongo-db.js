const mongoose = require("mongoose");
const db = require('../config/database')

exports.connect = () => {
    // Connecting to the database
    mongoose
        .connect(db.MONGO_HOST)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};