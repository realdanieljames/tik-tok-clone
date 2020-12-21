import axios from './axios';
import {useEffect, useState} from 'react';
import Video from './components/video/Video';
import NavigationBar from './components/navigationBar/NavigationBar'

import './App.css';





function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    async function fetchPosts(){
      const response = await axios.get("/v1/posts")
      setVideos(response.data)


      return response;
    }
    fetchPosts();
  },[]);

  

  return (
    <div className="app">

      <div className="app__videos">

      {videos.map(
        ({url, channel, description, song, likes, messages, shares}) =>(

              <Video 
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
        ))}
      </div>

      <div>
        <NavigationBar/>
      </div>


    </div>
  );
}

export default App;
