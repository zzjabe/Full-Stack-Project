import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = keyword.trim();
    if (!q) return;

    navigate(`/search?q=${encodeURIComponent(q)}`);
    setKeyword("");
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search books or authors..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}