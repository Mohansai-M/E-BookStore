import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Book = new Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  author: {
    type: String,
  },
  image: {
    type: String,
  },
  isbn: {
    type: String,
  },
});

const Books= mongoose.model("Book", Book);
export default Books;