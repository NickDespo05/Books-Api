const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    descriprion: String,
    year: Number,
    quantity: Number,
    imageURL: String,
});

module.exports = mongoose.model("Book", bookSchema);
