import BookList from "../../BookList/BookList";
import { useBooks } from "../../../hooks/useBook";

function Home() {
  const { books, deleteBook } = useBooks();

  const handleDelete = (id: string) => {
    if (confirm("Delete this book?")) {
      deleteBook(id);
    }
  };

  return (
    <>
      <h2>Welcome</h2>
      <p>Welcome to Code and Coffee's Library</p>

      <BookList books={books} onDelete={handleDelete} />
    </>
  );
}

export default Home;
