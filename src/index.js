import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyD1010RUFfOYkNGEUyF-0rINt-ccHiBs6k';


// First component (it produces html)
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      videos :[],
      selectedVideo : null
    };
  this.videoSearch('learning react');  
  }
  videoSearch(term){
    YTSearch({key:API_KEY , term:term} ,(videos) => {
      this.setState({videos :videos, selectedVideo: videos[0]}); 
    });
  }
  render(){
  const videoSearch=_.debounce((term) => {this.videoSearch(term)},300 )  
  return (<div>
              <SearchBar onVideoSearchChange={videoSearch}/>
              <VideoDetail videos={this.state.selectedVideo}/>
              <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos = { this.state.videos} 
              />
          </div>
         );
  }
}

// Displaying in DOM
ReactDom .render(<App />, document.querySelector('.container'));
