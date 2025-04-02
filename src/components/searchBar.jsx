import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = () => {
     const [input,setInput] =useState("");

     const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users").
        then((response) =>response.json.then())
        .then((json)=> {
            console.log(json);
        });
    }
     const handleChange =(value) => {
        setInput(value)
        fetchData(value)
     }
  return (
    <div className="input-wrapper"> 
      <FaSearch id="search-icon" />
      <input placeholder="search here..." value={input}  onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
}