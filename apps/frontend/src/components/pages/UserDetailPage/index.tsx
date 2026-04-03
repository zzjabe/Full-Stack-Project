import { Link, useParams } from "react-router-dom";
import { useUsers } from "../../../hooks/useUser";
import { useBooks } from "../../../hooks/useBook";
import "./index.css";

export default function UserDetailPage() {
  const { userId } = useParams<{ userId: string }>();

  const { users, removeFromReading, removeFromFavourite } = useUsers();
  const { books } = useBooks();

  if (!userId) return <div>Invalid user</div>;

  const user = users.find((u) => u.id === userId);

  if (!user) return <div>Loading user...</div>;
  if (!books || books.length === 0) return <div>Loading books...</div>;

  const readingBooks = books.filter((b) => user.readingList?.includes(b.id));

  const favouriteBooks = books.filter((b) =>
    user.favouriteList?.includes(b.id),
  );

  const handleRemoveFromReading = async (bookId: string) => {
    if (!confirm("Remove this book from Reading List?")) return;
    await removeFromReading(userId, bookId);
  };

  const handleRemoveFromFavourite = async (bookId: string) => {
    if (!confirm("Remove this book from Favourite List?")) return;
    await removeFromFavourite(userId, bookId);
  };

  return (
    <div className="user-detail-page">
      <h1>
        {user.firstName} {user.lastName}
      </h1>

      <p>Category: {user.category}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>

      <section className="list-section">
        <h2>Reading List</h2>

        {readingBooks.length === 0 ? (
          <p>No books in Reading List.</p>
        ) : (
          <ul>
            {readingBooks.map((book) => (
              <li key={book.id} className="book-item">
                <Link to={`/book/${book.id}`}>{book.title}</Link>

                <button
                  className="button-dele"
                  onClick={() => handleRemoveFromReading(book.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="list-section">
        <h2>Favourite List</h2>

        {favouriteBooks.length === 0 ? (
          <p>No books in Favourite List.</p>
        ) : (
          <ul>
            {favouriteBooks.map((book) => (
              <li key={book.id} className="book-item">
                <Link to={`/book/${book.id}`}>{book.title}</Link>

                <button
                  className="button-dele"
                  onClick={() => handleRemoveFromFavourite(book.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
