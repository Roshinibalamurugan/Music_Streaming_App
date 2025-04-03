import React, { useRef, useEffect, useState } from "react";
import "../styles.css";

const MusicPlayer = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setIsPlaying(false);
    }
  }, [song]); // Load new song when it changes

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <img src={song.image} alt={song.title} />
      <p className="now-playing">{isPlaying ? `Now Playing: ${song.title}` : song.title}</p>
      <audio ref={audioRef} src={song.src} />
      <button onClick={togglePlay}>{isPlaying ? "Pause ⏸" : "Play ▶"}</button>
    </div>
  );
};

export default MusicPlayer;
