import { useSearchParams, Link } from "react-router-dom";
import { New_added, Pop_books } from "../../data/books";
import "./index.css";

export default function SearchResultPage() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const allBooks = [...New_added, ...Pop_books];

  const results = allBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
  );

  return (
    <div className="search-result-page">
      <h3>Search Results for: "{q}"</h3>

      {results.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="books-row-grid">
          {results.map((book) => (
            <Link
              to={`/book/${book.id}`}
              className="mini-book-card"
              key={book.id}
            >
              <div className="mini-book-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              <div className="mini-book-info">
                <div className="mini-book-title">{book.title}</div>
                <div className="mini-book-author">{book.author}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}