import React, { Component } from 'react';
import _ from 'lodash';
import { API_KEY } from '../keys';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('reactjs');
        
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }
    
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render() {
        const videoSearch = _.debounce(term => this.videoSearch(term), 300);
        
        return (
            <div className="container">
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
    
    onVideoSelect(selectedVideo) {
        this.setState({ selectedVideo });
    }
}

export default App;
