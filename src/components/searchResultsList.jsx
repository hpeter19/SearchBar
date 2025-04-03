import React from "react";
import "./searchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <div key={id}>
          {result.name}
        </div>
      ))}
    </div>
  );
};
