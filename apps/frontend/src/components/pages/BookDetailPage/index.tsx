import { useParams } from "react-router-dom";
import { useBooks } from "../../../hooks/useBook";
import { useUsers } from "../../../hooks/useUser";
import "./index.css";

export default function BookDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { books, loading } = useBooks();
  const { users, currentUserId, addToReading, addToFavourite, refresh } =
    useUsers();

  if (loading) return <div style={{ padding: 24 }}>Loading...</div>;

  const book = books.find((b) => b.id === id);
  if (!book) return <div style={{ padding: 24 }}>Book not found.</div>;

  const currentUser = users.find((u) => u.id === currentUserId);
  if (!currentUser) return <div>User not found</div>;

  const handleAddToReading = async () => {
    try {
      await addToReading(currentUserId, book.id);
      await refresh();
      alert(`"${book.title}" added to Reading List`);
    } catch (err) {
      console.error(err);
      alert("Failed to add to reading list");
    }
  };

  const handleAddToFavourite = async () => {
    try {
      await addToFavourite(currentUserId, book.id);
      await refresh();
      alert(`"${book.title}" added to Favourite List`);
    } catch (err) {
      console.error(err);
      alert("Failed to add to favourite");
    }
  };

  return (
    <div className="book-detail-page">
      <div className="detail-card">
        <img className="detail-cover" src={book.cover} alt={book.title} />

        <div className="detail-info">
          <h1>{book.title}</h1>
          <p>by {book.author}</p>
          <p>Published: {book.year}</p>
          <p>Classification: {book.classification}</p>
          <p>Category: {book.category}</p>
          <p>{book.description}</p>

          <div className="detail-actions">
            <button onClick={handleAddToReading}>Add to Reading List</button>

            <button onClick={handleAddToFavourite}>Add to Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
}
