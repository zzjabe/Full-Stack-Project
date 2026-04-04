import { Link } from "react-router-dom";
import type { Book } from "../../../../../shared/types/book";
import "./BookList.css";

type BookListProps = {
  books: Book[];
  onDelete: (id: string) => void;
};

function BookList({ books, onDelete }: BookListProps) {
  if (!books || books.length === 0) {
    return <p className="no-books">No books added yet.</p>;
  }

  return (
    <div className="books-row-grid">
      {books.map((book) => (
        <div className="mini-book-card" key={book.id}>
          <Link to={`/book/${book.id}`}>
            <div className="mini-book-cover">
              <img src={book.cover} alt={book.title} loading="lazy" />
            </div>

            <div className="mini-book-info">
              <div className="mini-book-title">{book.title}</div>
              <div className="mini-book-author">{book.author}</div>
            </div>
          </Link>

          <button className="button-dele" onClick={() => onDelete(book.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
