import { useEffect, useState } from "react";
import { bookService } from "../services/bookService";
import { activityService } from "../services/activityService";
import type { Book } from "../../../../shared/types/book";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    try {
      const data = await bookService.getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Failed to load books:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function addBook(data: Omit<Book, "id">) {
    try {
      const newBook = await bookService.addBook(data);

      await activityService.addActivity({
        action: "ADD_BOOK",
        bookTitle: newBook.title,
        classification: newBook.classification,
      });

      await refresh();
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  }

  async function deleteBook(id: string) {
    try {
      const book = books.find((b) => b.id === id);

      if (book) {
        await activityService.addActivity({
          action: "DELETE_BOOK",
          bookTitle: book.title,
        });
      }

      await bookService.deleteBook(id);
      await refresh();
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  }

  return {
    books,
    loading,
    addBook,
    deleteBook,
    refresh,
  };
}
