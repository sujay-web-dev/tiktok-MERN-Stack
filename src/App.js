import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {

  const [videos, setvideos] = useState([]);

  useEffect (()=> {
    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setvideos(response.data);
      return response;
    }
    fetchPosts();
  },[]);

  // console.log(videos)



  return (
    <div className="app">
      <img className="app_logo" src="logo.png" alt="" />
      <div className="app__videos">
        {/* {videos.map({channel,description,song,likes,messages,shares})} */}

        {videos.map(({url,channel,description,song,likes,messages,shares}) => (
          <Video 
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
          />
        ))}

        
      </div>
    </div>
  );
}

export default App;
