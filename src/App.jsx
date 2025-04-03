import { useState } from 'react'


import './App.css'
import { SearchBar } from './components/searchBar';
import { SearchResultsList } from './components/searchResultsList';

function App() {
   
     const [results,setResults]= useState([])
     
   return(
    <div className='App'>
       <div className='search-bar-container'>
              <SearchBar  setResults={setResults}/>
              <SearchResultsList />
       </div>
    </div>
   );

}

export default App
