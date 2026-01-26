import { useParams } from "react-router-dom";
import { New_added, Pop_books } from "../../data/books";
import './index.css'

export default function BookDetailPage() {
  const { id } = useParams();

  const allBooks = [...New_added, ...Pop_books];
  const book = allBooks.find((b) => b.id === id);

  if (!book) {
    return <div style={{ padding: 24 }}>Book not found.</div>;
  }

  return (
    <div className="book-detail-page">
      <div className="detail-card">
        <img className="detail-cover" src={book.cover} alt={book.title} />

        <div className="detail-info">
          <h1>{book.title}</h1>
          <p className="detail-author">by {book.author}</p>
          <p className="detail-year">Published: {book.year}</p>
          <p className="detail-category">Category: {book.category}</p>

          <p className="detail-desc">{book.description}</p>

          <button className="borrow-btn">Borrow this book</button>
        </div>
      </div>
    </div>
  );
}