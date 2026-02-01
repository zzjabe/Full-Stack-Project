import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddBookForm.css";

type bookProps = {
  onAddBook: (
    id: string,
    title: string,
    author: string,
    year: number,
    classification: string,
    category: string,
    cover: string,
    description: string,
  ) => void;
};

function AddBookForm({ onAddBook }: bookProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState<number | "">("");
  const [classification, setClassification] = useState("New Added");
  const [category, setCategory] = useState("");
  const [cover, setCover] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const defaultCover = "https://covers.openlibrary.org/b/id/10909258-L.jpg";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (title.trim() === "") {
      setError("Title is required.");
      return;
    }

    if (author.trim() === "") {
      setError("Author is required.");
      return;
    }

    if (year === "" || isNaN(year)) {
      setError("Year must be a valid number.");
      return;
    }

    const newId = uuidv4();

    onAddBook(
      newId,
      title.trim(),
      author.trim(),
      year,
      classification,
      category.trim() || "Uncategorized",
      cover.trim() || defaultCover,
      description.trim() || "No description.",
    );

    setTitle("");
    setAuthor("");
    setYear("");
    setCategory("");
    setCover("");
    setDescription("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h2>Add New Book</h2>

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
