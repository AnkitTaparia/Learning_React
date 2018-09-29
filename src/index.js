import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyD1010RUFfOYkNGEUyF-0rINt-ccHiBs6k';


// First component (it produces html)
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={videos :[]};

    YTSearch({key:API_KEY , term:'surfboards'} ,(videos) => {
      this.setState({videos}); 
    });
  }
  render(){
  return (<div>
              <SearchBar />
              <VideoDetail videos={this.state.videos[0]}/>
              <VideoList videos = { this.state.videos} />
          </div>
         );
  }
}

// Displaying in DOM
ReactDom .render(<App />, document.querySelector('.container'));
