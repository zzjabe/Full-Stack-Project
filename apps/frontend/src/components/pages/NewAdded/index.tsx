import { useState } from "react";
import AddBookForm from "../../AddBookForm/AddBookForm";
import BookList from "../../BookList/BookList";
import { useBooks } from "../../../hooks/useBook";
import "./index.css";

function NewAdded() {
  const { books, addBook, deleteBook } = useBooks();
  const [isOpen, setIsOpen] = useState(false);

  const newAddedBooks = books.filter(
    (book) => book.classification === "New Added"
  );

  return (
    <div className="new-added-page">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Hide form" : "Add Book"}
      </button>

      {isOpen && <AddBookForm onAddBook={addBook} />}

      <BookList books={newAddedBooks} onDelete={deleteBook} />
    </div>
  );
}

export default NewAdded;