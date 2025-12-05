"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchResult from "./SearchResult";

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const router = useRouter();
  const { theme } = useTheme();

  const handleChange = (e) => {
    setTerm(e.target.value);
    doSearch(e.target.value);
  };

  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });
    setSearchResult(found);
  }, 500);

  const handleCloseSearchResult = (event) => {
    event.preventDefault();
    router.push(event.target.href);
    setTerm("");
  };

  return (
    <>
      <div className="lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <SearchIcon className="h-4 w-4" />
          <input
            type="text"
            value={term}
            placeholder="Search..."
            onChange={handleChange}
            className="flex-1 focus:border-none focus:outline-none"
          />
        </button>
      </div>
      {term && term.trim().length > 0 && (
        <SearchResult
          results={searchResult}
          term={term}
          onCloseSearchResult={handleCloseSearchResult}
        />
      )}
    </>
  );
};

export default Search;
