import { memo, useState } from "react";
import propTypes from "prop-types";
import { Header } from "./Header";
import { ResultCard } from "../commonComponent/ResultCard";
import { search } from "../api/search";

const HomePage = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchString, setSearchString] = useState("");

  const handleSearch = async () => {
    if (searchString.length > 0) {
      const results = await search(searchString, setIsLoading);
      setSearchResult(results);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="search-section">
          <input
            data-testid="input-search"
            type="search"
            aria-label="search"
            className="search-box"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button
            name="searchBtn"
            data-testid="searchBtn"
            className="search-button"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
        <div className="result-section">
          {isLoading ? (
            <div> Fetching Details. Please wait...</div>
          ) : (
            <>
              {searchResult?.length > 0 && <h2>Results: </h2>}
              {searchResult?.map((data, index) => {
                return (
                  <ResultCard
                    data={data}
                    key={`result-${index}`}
                    id={`result-${index}`}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
});

HomePage.propTypes = {
  search: propTypes.func,
  isLoading: propTypes.bool,
};

export { HomePage };
