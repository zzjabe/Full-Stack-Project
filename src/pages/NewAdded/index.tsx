import { Link } from "react-router-dom";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import type { Book } from "../../data/books";
import { useState } from "react";
import { initialBooks } from "../../data/books";
import "./index.css";

type bookProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
};

function NewAdded({ books, setBooks }: bookProps) {
  const newAddedBooks = books.filter(
    (book) => book.classification === "New Added",
  );
  const handleAddBook = (
    id: string,
    title: string,
    author: string,
    year: number,
    classification: string,
    category: string,
    cover: string,
    description: string,
  ) => {
    const newBook: Book = {
      id,
      title,
      author,
      year,
      classification,
      category,
      cover,
      description,
    };

    setBooks((prev) => [newBook, ...prev]);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="new-added-page">
      <button
        onClick={() => {
          if (confirm("Reset to initial books?")) {
            localStorage.removeItem("books");
            setBooks(initialBooks);
          }
        }}
      >
        Reset Books
      </button>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide form" : "Add new book"}
      </button>

      {isOpen && <AddBookForm onAddBook={handleAddBook} />}

      {newAddedBooks.length === 0 ? (
        <p className="no-books">No books added yet.</p>
      ) : (
        <div className="books-row-grid">
          {newAddedBooks.map((book) => (
            <div className="mini-book-card" key={book.id}>
              <Link to={`/book/${book.id}`}>
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

              <button
                className="button-dele"
                onClick={() => {
                  if (confirm("Delete this book?")) {
                    setBooks((prev) => prev.filter((b) => b.id !== book.id));
                  }
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewAdded;
