import { useState } from 'react'


import './App.css'
import { SearchBar } from './components/searchBar';

function App() {
   return(
    <div className='App'>
       <div className='search-bar-container'>
              <SearchBar />
             <div>Search results</div>
       </div>
    </div>
   );

}

export default App
