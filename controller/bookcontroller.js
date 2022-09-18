const books = require("../model/bookmodel");

function getAllBooks(req, res) {
  res.send({
    allBooks: books,
  });
}

function getBookById(req, res) {
  const id = req.params.id;

  const foundBook = books.find(function (book) {
    return book.id.toString() == id;
  });

  if (foundBook) res.send({ foundBook });
  else res.send(`there is no book with the id: ${id}`);
}

function getBookByTitle(req, res) {
  const title = req.params.title;

  const foundBook = books.find(function (book) {
    return book.title.toString() == title;
  });

  if (foundBook) res.send({ foundBook });
  else res.send(`there is no book with the title: ${title}`);
}

module.exports = {
  getAllBooks,
  getBookById,
  getBookByTitle
};
