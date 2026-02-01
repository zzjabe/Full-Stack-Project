import { Link } from "react-router-dom";
import type { User } from "../../data/users";
import type { Book } from "../../data/books";
import "./index.css";

type Props = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  books: Book[];
  userId: string;
};

export default function UserDetailPage({
  users,
  setUsers,
  books,
  userId,
}: Props) {
  const user = users.find((u) => u.id === userId);

  if (!user) return <div>User not found</div>;

  // 获取书籍详情
  const readingBooks = books.filter((b) => user.readingList.includes(b.id));
  const favouriteBooks = books.filter((b) => user.favouriteList.includes(b.id));

  // 删除书籍函数
  const handleRemoveFromReading = (bookId: string) => {
    if (!confirm("Remove this book from Reading List?")) return;

    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId
          ? { ...u, readingList: u.readingList.filter((id) => id !== bookId) }
          : u,
      ),
    );
  };

  const handleRemoveFromFavourite = (bookId: string) => {
    if (!confirm("Remove this book from Favourite List?")) return;

    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId
          ? {
              ...u,
              favouriteList: u.favouriteList.filter((id) => id !== bookId),
            }
          : u,
      ),
    );
  };

  return (
    <div className="user-detail-page">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>Category: {user.category}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>

      <section className="list-section">
        <h2>📖 Reading List</h2>
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
        <h2>⭐ Favourite List</h2>
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
