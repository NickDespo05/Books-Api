require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

app.set("view engine", "jsx");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Home");
});

app.use("/books", require("./controllers/books_controller"));

app.listen(3000, () => {
    console.log("port is 3000");
});
