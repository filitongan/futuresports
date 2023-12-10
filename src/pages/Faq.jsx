import Banner from "../components/Banner";
import PlaceholderText from "../components/PlaceholderText";
import "../css/Faq.css";
import { useState } from "react";

export default function Faq() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");

  function handleSearch() {
    setSearchResults(search);
  }

  return (
    <>
      <Banner bannerText="FREQUENTLY ASKED QUESTIONS" page="faq" />
      <div className="search-section">
        <div className="text-section">
          <p>HOW CAN WE HELP</p>
        </div>
        <div className="search-bar">
          <input
            id="searchInput"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            data-testid="faq-search-button"
            id="searchButton"
            type="button"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>

      <div data-testid="placeholder-text">
        <PlaceholderText searchResults={searchResults} />
      </div>
    </>
  );
}
