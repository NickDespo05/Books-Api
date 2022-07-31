const db = require("../models");

async function seed() {
    let book1 = await db.Book.create({
        title: "The Shinobi Initiative",
        description:
            "The reality-bending adventures of a clandestine service agency in the year 2166",
        year: 2014,
        quantity: 10,
        imageURL: "https://imgur.com/LEqsHy5.jpeg",
    });
    let book2 = await db.Book.create({
        title: "Tess the Wonder Dog",
        description: "The tale of a dog who gets super powers",
        year: 2007,
        quantity: 3,
        imageURL: "https://imgur.com/cEJmGKV.jpg",
    });
    let book3 = await db.Book.create({
        title: "The Annals of Arathrae",
        description:
            "This anthology tells the intertwined narratives of six fairy tales.",
        year: 2016,
        quantity: 8,
        imageURL: "https://imgur.com/VGyUtrr.jpeg",
    });
    let book4 = await db.Book.create({
        title: "Wâˆ€RP",
        description:
            "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        year: 2010,
        quantity: 4,
        imageURL: "https://imgur.com/qYLKtPH.jpeg",
    });

    Book.push(book1.id);
    Book.push(book2.id);
    Book.push(book3.id);
    Book.push(book4.id);

    await Book.save();
    process.exit();
}

// seed();
