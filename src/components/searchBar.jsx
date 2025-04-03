import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())  // Fixed: response.json() instead of response.json.then()
      .then((json) => {
       const results=json.filter((user) =>{
           return(
           value &&
            user && 
            user.name 
            && user.name.toLowerCase().includes(value)
              );
           });
          setResults(results);
      })
      .catch((error) => {  // Added error handling
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper"> 
      <FaSearch id="search-icon" />
      <input 
        placeholder="Search here..." 
        value={input}  
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};