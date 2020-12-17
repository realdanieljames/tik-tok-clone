import React, {useRef, useState} from 'react'

import VideoFooter from './VideoFooter'
import './Video.css'

function Video() {

    const[playing, setPlaying]= useState(true)

    const videoRef = useRef(null)


    const onVideoPress = ()=> {
        //if the video is playing, 
        //pause the video.
        // set the state to tell us that it is now paused

        // ELSE if the video is already paused
        //play the video
        // set the state to tell us that it is now playing
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true)
        }

    }



    return (
        <div className="video">
            <video 
                className="video__player" 
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="https://www.w3schools.com/tags/movie.ogg">
            </video>
            <VideoFooter/>


        </div>
    )
}

export default Video
