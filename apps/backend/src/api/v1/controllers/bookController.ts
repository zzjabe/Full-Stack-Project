import { Request, Response } from "express";
import * as bookService from "../services/bookService";

export const getBooks = async (_req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Failed to add book" });
  }
};

export const editBook = async (req: Request, res: Response) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Failed to update book" });
  }
};

export const removeBook = async (req: Request, res: Response) => {
  try {
    await bookService.deleteBook(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book" });
  }
};