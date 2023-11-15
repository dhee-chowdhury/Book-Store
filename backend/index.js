import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import booksRoutes from "./routes/booksRoutes.js";

const app = express();

// middleware for parsing request body
app.use(express.json());
app.use(cors());

// app.use(cors({
//   origin: 'https://book-store-psi-seven.vercel.app/',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-type']
// }))

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to MERN Stack tutorial");
});

app.use("/books", booksRoutes);

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
