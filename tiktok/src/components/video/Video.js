import React, { useRef, useState } from 'react'

import VideoFooter from '../videoFooter/VideoFooter'
import VideoSidebar from '../videoSidebar/VideoSidebar'


import './Video.css'

//when the app loads, wewant our dat to be loaded

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}) {

    const [playing, setPlaying] = useState(true)

    const videoRef = useRef(null)


    const onVideoPress = () => {
        //if the video is playing, 
        //pause the video.
        // set the state to tell us that it is now paused

        // ELSE if the video is already paused
        //play the video
        // set the state to tell us that it is now playing
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true)
        }

    }



    return ( 
        <div className = "video" >
            <video className = "video__player"
                autoPlay
                loop 
                onClick = { onVideoPress }
                ref = { videoRef }
                src = { url } >
            </video>

            <VideoFooter 
                channel = { channel }
                description = { description }
                song = { song }
            />

            <VideoSidebar 
                likes = { likes }
                messages = { messages }
                shares = { shares }
            />

  

        </div>
    )
}

export default Video