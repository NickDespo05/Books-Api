const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.Book.find()

        .then((foundBooks) => {
            res.send(`The Books are ${foundBooks}`);
        })
        .catch((err) => {
            console.log(err);
            res.send("Error");
        });
});

//getting book by id
router.get("/:id", (req, res) => {
    db.Book.findById(req.params.id)
        .then((foundBook) => {
            res.send(foundBook);
        })
        .catch((err) => {
            console.log(err);
            res.send("Error something went wrong! (ID)");
        });
});

//posting new book by id
router.post("/", (req, res) => {
    db.Book.create(req.body)
        .then(() => {
            res.redirect("/books");
        })
        .catch((err) => {
            console.log(err);
            res.send("Error something went wrong! (POST)");
        });
});

//updating (PUT) the book info
router.put("/:id", (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id)
        .then((UpdatedBook) => {
            res.redirect("/books");
            console.log(UpdatedBook);
        })
        .catch((err) => {
            console.log(err);
            res.send("Error something went wrong! (PUT)");
        });
});

//DELETE book
router.delete("/:id", (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/books");
        })
        .catch((err) => {
            console.log(err);
            res.send("There was an error! (DELETE)");
        });
});

module.exports = router;
