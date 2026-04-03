import type { Book } from "../../types/book";
import "./AddBookForm.css";
import { useAddBookForm } from "../../hooks/useAddBookForm";

/*
This component renders the Add Book form UI.
It uses the useAddBookForm custom hook to manage state and validation logic.
*/

type BookProps = {
  onAddBook: (data: Omit<Book, "id">) => void;
};

function AddBookForm({ onAddBook }: BookProps) {

  const {
    title, setTitle,
    author, setAuthor,
    year, setYear,
    classification, setClassification,
    category, setCategory,
    cover, setCover,
    description, setDescription,
    error,
    handleSubmit,
  } = useAddBookForm( onAddBook );

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h2>Add Book</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Author:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) =>
            setYear(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>

      <div className="form-group">
        <label>Classification:</label>
        <select
          value={classification}
          onChange={(e) => setClassification(e.target.value)}
        >
          <option value="New Added">New Added</option>
          <option value="Pop Books">Pop Books</option>
        </select>
      </div>

      <div className="form-group">
        <label>Category:</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Cover URL:</label>
        <input value={cover} onChange={(e) => setCover(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-button">
        Add Book
      </button>
    </form>
  );
}

export default AddBookForm;
