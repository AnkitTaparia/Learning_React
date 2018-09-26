import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyD1010RUFfOYkNGEUyF-0rINt-ccHiBs6k';
// First component (it produces html)
const App = () => {
  return (<div>
              <SearchBar />
          </div>);
}

// Displaying in DOM
ReactDom .render(<App />, document.querySelector('.container'));
