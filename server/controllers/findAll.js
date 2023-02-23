import Books from "../bookModel.js";

export const findAll = async (req, res) => {
  try {
    Books.find(function (err, books) {
      if (err) {
        console.log(err);
      } else {
        res.json(books);
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
