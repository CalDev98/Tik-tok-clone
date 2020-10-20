import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, likes, channel, description, messages, shares, song }) {
    const [playing, setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            ></video>
            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
            
        </div>
    )
}

export default Video
