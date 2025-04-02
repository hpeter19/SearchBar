import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = () => {
     const [input,setInput] =useState("");

  return (
    <div className="input-wrapper"> 
      <FaSearch id="search-icon" />
      <input placeholder="search here..." value={input}  onChange={(e) => setInput(e.target.value)}/>
    </div>
  );
}