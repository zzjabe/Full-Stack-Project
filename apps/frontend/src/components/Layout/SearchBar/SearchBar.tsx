import { searchService } from "../../../services/searchService";
import { useSearch } from "../../../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  const { keyword, setKeyword } = useSearch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = keyword.trim();
    if (!searchService.isValidSearch(q)) return;

    navigate(`/search?q=${encodeURIComponent(q)}`);
    setKeyword("");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
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
