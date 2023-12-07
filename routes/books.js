const express = require('express');
const router = express.Router();


const Book = require('../models/Book');


router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
    isbn: req.body.isbn
  });

  try {
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    Object.assign(book, req.body);
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
