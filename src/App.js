import React from 'react';
import './App.css';
import ComicList from './Components/ComicList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
        <div className="header" >My Comics page</div>
        <p>
          This is a comic page where you can find the most recent comics from <a className="App-link"
          href="https://comicvine.gamespot.com"
          target="_blank"
          rel="noopener noreferrer">Comic Vine</a>
        </p>
        </div>
        <div className="body-container">
          <ComicList />
        </div>
      </header>
    </div>
  );
}

export default App;
