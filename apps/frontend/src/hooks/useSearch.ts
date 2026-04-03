import { useState } from "react";

/**
 * useSearch
 * Manages search keyword state for search UI components.
 * Presentation logic only.
 */
export function useSearch() {
  const [keyword, setKeyword] = useState("");

  return {
    keyword,
    setKeyword,
  };
}