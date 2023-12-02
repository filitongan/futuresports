import Banner from "../components/Banner";
import PlaceholderText from "../components/PlaceholderText";
import "../css/Faq.css";

export default function Faq() {
  return (
    <>
      <Banner bannerText="FREQUENTLY ASKED QUESTIONS" page="faq" />
      <div className="search-section">
        <div className="text-section">
          <p>HOW CAN WE HELP</p>
        </div>
        <div className="search-bar">
          <input id="searchInput" type="text" placeholder="Search..." />
          <button id="searchButton" type="submit">
            SEARCH
          </button>
        </div>
      </div>
      <PlaceholderText />
    </>
  );
}
