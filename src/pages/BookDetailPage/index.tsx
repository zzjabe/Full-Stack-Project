import { useParams } from "react-router-dom";
import type { Book } from "../../data/books";
import type { User } from "../../data/users";
import "./index.css";

type Props = {
  books: Book[];
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  currentUserId: string;
};

export default function BookDetailPage({
  books,
  users,
  setUsers,
  currentUserId,
}: Props) {
  const { id } = useParams<{ id: string }>();

  const book = books.find((b) => b.id === id);
  if (!book) return <div style={{ padding: 24 }}>Book not found.</div>;

  const currentUser = users.find((u) => u.id === currentUserId);
  if (!currentUser) return <div>User not found</div>;

  const handleBorrow = () => {
    alert(`You borrowed "${book.title}"`);
  };

  const handleAddToReading = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === currentUserId
          ? {
              ...u,
              readingList: u.readingList.includes(book.id)
                ? u.readingList
                : [...u.readingList, book.id],
            }
          : u,
      ),
    );
    alert(`"${book.title}" added to Reading List`);
  };

  const handleAddToFavourite = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === currentUserId
          ? {
              ...u,
              favouriteList: u.favouriteList.includes(book.id)
                ? u.favouriteList
                : [...u.favouriteList, book.id],
            }
          : u,
      ),
    );
    alert(`"${book.title}" added to Favourite List`);
  };

  return (
    <div className="book-detail-page">
      <div className="detail-card">
        <img className="detail-cover" src={book.cover} alt={book.title} />

        <div className="detail-info">
          <h1>{book.title}</h1>
          <p className="detail-author">by {book.author}</p>
          <p className="detail-year">Published: {book.year}</p>
          <p className="detail-classification">
            Classification: {book.classification}
          </p>
          <p className="detail-category">Category: {book.category}</p>
          <p className="detail-desc">{book.description}</p>

          <div className="detail-actions">
            <button className="borrow-btn" onClick={handleBorrow}>
              Borrow this book
            </button>
            <button onClick={handleAddToReading}>Add to Reading List</button>
            <button onClick={handleAddToFavourite}>Add to Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
}
