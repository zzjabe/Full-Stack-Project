import { useState } from "react";
import { Link } from "react-router-dom";
import type { Book } from "../../data/books";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { New_added as initialBooks } from "../../data/books";
import "./index.css";

function NewAdded() {
  const [books, setBooks] = useState<Book[]>(initialBooks || []);

  const handleAddBook = (
    id: string,
    title: string,
    author: string,
    year: number,
    category: string,
    cover: string,
    description: string
  ) => {
    const newBook: Book = {
      id,
      title,
      author,
      year,
      category,
      cover,
      description,
    };

    setBooks((prev) => [newBook, ...prev]);
  };

  return (
    <div className="new-added-page">
      <h2 className="page-title">New Added Books</h2>

      {books.length === 0 ? (
        <p className="no-books">No books added yet.</p>
      ) : (
        <div className="books-row-grid">
          {books.map((book) => (
            <Link
              to={`/book/${book.id}`}
              className="mini-book-card"
              key={book.id}
            >
              <div className="mini-book-cover">
                <img src={book.cover} alt={book.title} loading="lazy" />
              </div>

              <div className="mini-book-info">
                <div className="mini-book-title" title={book.title}>
                  {book.title}
                </div>
                <div className="mini-book-author">{book.author}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default NewAdded;