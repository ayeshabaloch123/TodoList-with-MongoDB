const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const todo = new Schema({
    title: String,
    list: Array
});

module.exports = mongoose.model('Todo', todo); 