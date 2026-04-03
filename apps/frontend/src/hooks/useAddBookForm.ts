import { useState } from "react";
import type { Book } from "../types/book";
import type { FormEvent } from "react";

/*
This custom hook manages the Add Book form logic.
It stores all input values using useState, handles validation,
and calls the onAddBook function when the form is submitted.
This separates the form logic from the UI component.
*/

export function useAddBookForm(onAddBook: (data: Omit<Book, "id">) => void){
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState<number | "">("");
  const [classification, setClassification] = useState("New Added");
  const [category, setCategory] = useState("");
  const [cover, setCover] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const defaultCover = "https://covers.openlibrary.org/b/id/10909258-L.jpg";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    if (year === "" || Number.isNaN(Number(year))) {
      setError("Year must be a valid number.");
      return;
    }

    onAddBook({
      title: title.trim(),
      author: author.trim(),
      year,
      classification,
      category: category.trim() || "Uncategorized",
      cover: cover.trim() || defaultCover,
      description: description.trim() || "No description.",
    });

    setTitle("");
    setAuthor("");
    setYear("");
    setClassification("New Added");
    setCategory("");
    setCover("");
    setDescription("");
    setError("");
  };

  return {
    title,
    setTitle,
    author,
    setAuthor,
    year,
    setYear,
    classification,
    setClassification,
    category,
    setCategory,
    cover,
    setCover,
    description,
    setDescription,
    error,
    handleSubmit,
  };

}