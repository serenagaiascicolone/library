const fs = require('node:fs/promises');
// const { validationResult } = require('express-validator');
const {nanoid} = require('nanoid');
const {HttpError} = require('../model/errors');

module.exports.getbooks = async (req, res, next) => {
  let books;

	try {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);

    const file = await fs.readFile('./mock-db/books.json', 'utf8');
    const data = JSON.parse(file);
    if (!data.books) {
      throw new Error('Cannot find books.');
    }
    books = data.books;
	} catch (err) {
    console.log(err)
		const error = new HttpError(
      'Something went wrong.',
			500
      );
      return next(err);
  }
  res.json({ books });
};

module.exports.getbook = async (req, res, next) => {
	const id = req.params.id;

	let book;
  try {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);

    const file = await fs.readFile('./mock-db/books.json', 'utf8');
    const data = JSON.parse(file);
    if (!data.books) {
      throw new Error('Something went wrong with retrieving books.');
    }
    book = data.books.find(book => id === book.id);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a book.',
      500
    );
    return next(error);
  }

  if (!book) {
    const error = new HttpError(
      'Could not find book for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ book });
};

module.exports.addbook = async (req, res, next) => {
  console.log(req.body)

  let newbook = {
    title: req.body.title,
    author: req.body.author,
    valutation: req.body.valutation,
    description: req.body.description,
    id: nanoid()
  }

  try {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);

    const file = await fs.readFile('./mock-db/books.json', 'utf8');
    let data = JSON.parse(file);
    let newbooks = [newbook, ...data.books];
    let newbookList = {
      books: newbooks
    }
    await fs.writeFile('./mock-db/books.json', JSON.stringify(newbookList));
  } catch (err) {
    const error = new HttpError(
      'Creating book failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ book: newbook });

};

module.exports.editbook = async (req, res, next) => {
	const { title, author, valutation, description} = req.body;
  const bookId = req.params.id;

  let updatedbook;
  try {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);
    
    const file = await fs.readFile('./mock-db/books.json', 'utf8');
    let data = JSON.parse(file);
    let newbooks = data.books.map(book => {
      if(book.id == bookId) {
        updatedbook = {
          ...book,
          title,
          author,
          valutation,
          description
        }
        return updatedbook
      }
      return book
    });
    let newbookList = {
      books: newbooks
    }
    await fs.writeFile('./mock-db/books.json', JSON.stringify(newbookList));
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update book.',
      500
    );
    return next(error);
  }

  res.status(200).json({ book: updatedbook });
};

module.exports.deletebook = async (req, res, next) => {
	const bookId = req.params.id;

  try {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);
    const file = await fs.readFile('./mock-db/books.json', 'utf8');
    let data = JSON.parse(file);
    let newbooks = data.books.filter(book => book.id !== bookId);
    let newbookList = {
      books: newbooks
    }
    await fs.writeFile('./mock-db/books.json', JSON.stringify(newbookList));
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete book.',
      500
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted book.' });
};