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
        <Video />
        <Video />
      </div>


    </div>
  );
}

export default App;
