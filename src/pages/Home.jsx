
import React, { useState, useRef } from "react";
import MusicPlayer from "../components/MusicPlayer";
import Navbar from "../components/Navbar";
import "../styles.css";

const songs = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Song ${i + 1}`,
  src: `/music/song${i + 1}.mp3`,
  image: `/images/image.jpg`,
}));

const Home = ({ playlist, setPlaylist }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const togglePlay = (song) => {
    if (currentSong?.id === song.id) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      setCurrentSong(song);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const addToPlaylist = (song) => {
    if (!playlist.find((s) => s.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>All Songs</h2>
      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className={`song-card ${currentSong?.id === song.id ? "playing" : ""}`}>
            <img src={song.image} alt={song.title} />
            <p>{song.title}</p>
            <button onClick={() => togglePlay(song)}>
              {currentSong?.id === song.id && !audioRef.current?.paused ? "Pause" : "Play"}
            </button>
            <button onClick={() => addToPlaylist(song)}>Add to Playlist</button>
          </div>
        ))}
      </div>

      {currentSong && (
        <div className="music-player">
          <h3>Now Playing: {currentSong.title}</h3>
          <audio ref={audioRef} src={currentSong.src} controls autoPlay />
        </div>
      )}
    </div>
  );
};

export default Home;
