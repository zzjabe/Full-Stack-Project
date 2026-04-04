import type { Book } from "../../../../shared/types/book";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const bookRepo = {
  async findAll(): Promise<Book[]> {
    const res = await fetch(`${BASE_URL}/api/books`);

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  },

  async findById(id: string): Promise<Book | undefined> {
    const books = await this.findAll();
    return books.find((b) => b.id === id);
  },

  async save(book: Omit<Book, "id">): Promise<Book> {
    const res = await fetch(`${BASE_URL}/api/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (!res.ok) {
      throw new Error("Failed to add book");
    }

    return res.json();
  },

  async update(id: string, updated: Partial<Book>): Promise<Book> {
    const res = await fetch(`${BASE_URL}/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated),
    });

    if (!res.ok) {
      throw new Error("Failed to update book");
    }

    return res.json();
  },

  async remove(id: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/api/books/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete book");
    }
  },

  async reset(): Promise<void> {
    throw new Error("Reset is not supported by backend API");
  },
};
