import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <ul className="col-md-4 list-group">
            {videos.map(video => (
                <VideoListItem 
                    onVideoSelect={onVideoSelect}
                    key={video.id.videoId} 
                    video={video} />
            ))}
        </ul>
    );
};

export default VideoList;
