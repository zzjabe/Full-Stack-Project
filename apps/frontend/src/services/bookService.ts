import { bookRepo } from "../repositories/bookRepo";
import type { Book } from "../types/book";

export const bookService = {
  async getBooks(): Promise<Book[]> {
    return bookRepo.findAll();
  },

  async addBook(book: Omit<Book, "id">): Promise<Book> {
    return bookRepo.save(book);
  },

  async updateBook(id: string, updated: Partial<Book>): Promise<Book> {
    const existing = await bookRepo.findById(id);

    if (!existing) {
      throw new Error("Book not found");
    }

    return bookRepo.update(id, updated);
  },

  async deleteBook(id: string): Promise<void> {
    const existing = await bookRepo.findById(id);

    if (!existing) {
      throw new Error("Book not found");
    }

    await bookRepo.remove(id);
  },
};