import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useBooks } from "../../../hooks/useBook";
import { useSearch } from "../../../hooks/useSearch";
import { searchService } from "../../../services/searchService";
import "./index.css";

export default function SearchResultPage() {
  const { books } = useBooks();

  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const canSearch = searchService.isValidSearch(q);

  const { setKeyword } = useSearch();
  useEffect(() => {
    setKeyword(q);
  }, [q, setKeyword]);

  const results = canSearch
    ? books.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q),
      )
    : [];

  return (
    <div className="search-result-page">
      <h3>Search Results for: "{q}"</h3>

      {!canSearch ? (
        <p>Please type at least 2 characters.</p>
      ) : results.length === 0 ? (
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