import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import { Book } from "./models/bookModel.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to MERN Stack tutorial");
});

// Route to save a new book
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({
          message: "Send all required fields: title, author, publishYear",
        });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to mongodb successfully");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
