import NewAdded from "../NewAdded";
import PopBooks from "../PopBooks";
import type { Book } from "../../data/books";

type Props = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
};

function Home({ books, setBooks }: Props) {
  return (
    <>
      <h2>Welcome</h2>
      <p>Welcome to Code and Coffee's Library</p>

      <NewAdded books={books} setBooks={setBooks} />
      <PopBooks books={books} />
    </>
  );
}

export default Home;