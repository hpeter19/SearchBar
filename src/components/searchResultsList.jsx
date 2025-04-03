import React from "react";
import "./searchResultsList.css";
import { SearchResults } from "./SearchResults";  // Assuming SearchResults is in the same folder

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResults key={id} result={result} />;
      })}
    </div>
  );
};
