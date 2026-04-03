import { useState } from "react";
import AddBookForm from "../../AddBookForm/AddBookForm";
import BookList from "../../BookList/BookList";
import { useBooks } from "../../../hooks/useBook";
import "./index.css";

function PopBooks() {
  const { books, addBook, deleteBook } = useBooks();
  const [isOpen, setIsOpen] = useState(false);

  const popBooks = books.filter(
    (book) => book.classification === "Pop Books"
  );

  return (
    <div className="new-added-page">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Hide form" : "Add Book"}
      </button>

      {isOpen && <AddBookForm onAddBook={addBook} />}

      <BookList books={popBooks} onDelete={deleteBook} />
    </div>
  );
}

export default PopBooks;