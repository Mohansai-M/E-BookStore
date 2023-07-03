import Books from "../bookModel.js";
import * as fs from 'file-system';

export const addBook = async (req, res) => {
  const newBook = new Books({
    bookTitle: req.body.bookTitle,
    bookPrice: req.body.bookPrice,
    bookAuthor: req.body.bookAuthor,
    bookIsbn: req.body.bookIsbn,
    bookImage: {
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      buffer: req.file.buffer,
      size: req.file.size,
    },
  });
  newBook
    .save()
    .then((newBook) => {
      res.status(200).json({ Book: "Book added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new Book failed");
    });
};
