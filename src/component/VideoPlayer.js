import React from 'react';
import './VideoPlayer.css'; // Optional: import your CSS for styling

const VideoPlayer = () => {
    return (
        <div className="video-container">
            <video 
                src={`${process.env.PUBLIC_URL}/AboutMe.mp4`} // Replace with your video file name
                muted
                autoPlay
                loop
                playsInline
                className="video-player"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
