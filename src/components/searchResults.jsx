import React from "react";
import "./searchResults.css"

export const SearchResults = ({result}) =>{
  return <div className="search-result" onClick={(e) => alert(`you clicked on ${result.name}`)}> {result.name}</div>
}