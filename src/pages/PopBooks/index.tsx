import type { Book } from "../../data/books";
import { Link } from "react-router-dom";
import "./index.css";

type bookProps = {
  books: Book[];
};

function PopBooks({ books }: bookProps) {
  const popBooks = books.filter((book) => book.classification === "Pop Books");
  return (
    <div className="new-added-page">
      <h2 className="page-title">Popular Books</h2>

      <div className="books-row-grid">
        {popBooks.map((book) => (
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
    </div>
  );
}

export default PopBooks;
