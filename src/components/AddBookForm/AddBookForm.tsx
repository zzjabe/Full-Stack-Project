import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Book } from "../../data/books";
import './AddBookForm.css'

type Props = {
    books: Book[];
    onAddBook: (
        id: string, 
        title: string, 
        author: string, 
        year: number, 
        category: string, 
        cover: string, 
        description: string
    ) => void;
};

function AddBookForm({ books, onAddBook }: Props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

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

        const yearNum = parseInt(year.trim(), 10);
        if (year.trim() === "" || isNaN(yearNum)) {
            setError("Year must be a valid integer.");
            return;
        }

        const newId = uuidv4();

        onAddBook(
            newId,
            title.trim(),
            author.trim(),
            yearNum,
            category.trim(),
            cover.trim(),
            description.trim()
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
                <label htmlFor="title">Title *:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="author">Author *:</label>
                <input
                    id="author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="year">Year *:</label>
                <input
                    id="year"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    step="1"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category (optional):</label>
                <input
                    id="category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Fiction, Science, History..."
                />
            </div>

            <div className="form-group">
                <label htmlFor="cover">Cover URL (optional):</label>
                <input
                    id="cover"
                    type="url"
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                    placeholder="https://example.com/book-cover.jpg"
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description (optional):</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Brief description of the book..."
                />
            </div>

            <button type="submit" className="submit-button">Add Book</button>
        </form>
    );
}

export default AddBookForm;