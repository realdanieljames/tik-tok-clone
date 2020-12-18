import {useState} from 'react';
import Video from './Video'
import './App.css';

function App() {
  const [videos, setVideos] = useState([])
  return (
    <div className="app">

      <div className="app__videos">
        {/* {videos.map(({url, channel, description, song, likes, messages, shares}))} */}
        <Video 
          url='https://www.w3schools.com/tags/movie.mp4'
          channel='danieljames'
          description="WOW this works..."
          song="The sunny song"
          likes={123}
          messages={123}
          shares={123}
        />



{/* {videos.map(({url, channel, description, song, likes, messages, shares}))}
        <Video 
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}


         /> */}
        <Video 
              url='https://www.w3schools.com/html/mov_bbb.mp4'
              channel='bunnyman'
              description="gotta catch em all"
              song="The bunny discover"
              likes={123}
              messages={123}
              shares={123}/>
        <Video />
      </div>


    </div>
  );
}

export default App;
{/* <iframe width="1228" height="541" src="https://www.youtube.com/embed/I3AaW9ZevIU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}