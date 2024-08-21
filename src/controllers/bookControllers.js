import Book from "../models/bookModel.js";
import User from "../models/userModel.js";
import Page from "../models/pageModel.js";
import { Router } from "express";

const router = Router();

//Eliminar libro
export const deleteBook = async (req, res) => {

  res.json({message:"Libro elminado"})
 

 

     /* const bookFound = await Book.findByIdAndDelete(req.params.id);
    bookFound?console.log(bookFound):null
   if (!bookFound) {
      res.json({ message: "No se han encontrado libros" });
    } else {
      res.json({ message: "Libro eliminado" });
    } */
  };

//Crear libro
export const createBook = async (req, res) => {
  const { values, imageBook } = req.body;
  const { title, description, genre } = values;
  console.log(req.user);
  try {
    const isMatch = await Book.findOne({ title });
    const userFound = await User.findById(req.user.id);
    console.log(isMatch);

    if (isMatch) {
      res.send("LIbro ya registrado");
    } else {
      const newBook = new Book({
        title,
        published:false,
        description,
        genre,
        comments:[],
        dataUser: {
          userName: userFound.userName,
          lastName: userFound.lastName,
          userId: userFound._id,
        },
        rating:0,
        numVotes:0,
        reCountVotes:0,
        idUserVote:[],
        idUserComments:[],
        imageUrl: imageBook,
      });
      newBook.save();
      res.json({ newBook });
      userFound.books.push(newBook._id); 
      userFound.save();
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllBooks = async (req, res) => {
  const booksFound = await Book.find();
  if (booksFound.length < 1) {
    res.json({ message: "No se han encontrado libros" });
  } else {
    res.json({ booksFound });
  }
};

export const getBook = async (req, res) => {
  const bookFound = await Book.findById(req.params.id);

  if (!bookFound) {
    res.json({ message: "No se han encontrado libros" });
  } else {
    res.json(bookFound);
  }
};

export const editBook = async (req, res) => {
  console.log(req.body);
  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updateBook) {
    res.json({ message: "Libro no encontrado" });
  } else {
    res.json(updateBook);
  }
};

export const booksUser = async (req, res) => {
  const booksFound = await Book.find({ userId: req.user.id }).populate();

  if (booksFound.length < 1) {
    res.json({ message: "Usuario sin libros" });
  } else {
    res.json({ booksFound });
  }
};

export const savePages = async (req, res) => {
  const { chapter, text } = await req.body;
  res.send(newPage);
  const newPage =  new Page({
    chapter: chapter,
    text: text,
  });

  newPage();
};
