import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Book = new Schema({
  bookTitle: {
    type: String,
  },
  bookPrice: {
    type: String,
  },
  bookAuthor: {
    type: String,
  },
  bookImage: {
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number,
  },
  bookIsbn: {
    type: String,
  },
  bookGenre: {
    type: String,
  },
});

const Books= mongoose.model("Book", Book);
export default Books;