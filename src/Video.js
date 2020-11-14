import React, { useRef, useState } from "react";
import Videofooter from "./Videofooter";
import "./Video.css";
import Videosidebar from "./Videosidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setplaying] = useState(false);
  const videoref = useRef(null);

  const onvideopress = () => {
    if (playing) {
      videoref.current.pause();
      setplaying(false);
    } else {
      videoref.current.play();
      setplaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onvideopress}
        ref={videoref}
        src={url}
      ></video>
      <Videofooter channel={channel} description={description} song={song} />
      <Videosidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
