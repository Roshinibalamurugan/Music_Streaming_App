import React, { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import Navbar from "../components/Navbar";
import "../styles.css";

const Playlist = ({ playlist, setPlaylist }) => {
  const [currentSong, setCurrentSong] = useState(null);

  const removeFromPlaylist = (songId) => {
    setPlaylist(playlist.filter((song) => song.id !== songId));
  };

  return (
    <div>
      <Navbar />
      <h2>Your Playlist</h2>
      <div className="song-list">
        {playlist.length === 0 ? (
          <p>No songs in playlist</p>
        ) : (
          playlist.map((song) => (
            <div
              key={song.id}
              className={`song-card ${currentSong?.id === song.id ? "playing" : ""}`}
            >
              <img src={song.image} alt={song.title} />
              <p>{song.title}</p>
              <button onClick={() => setCurrentSong(song)}>
                {currentSong?.id === song.id ? "Now Playing 🎶" : "Play "}
              </button>
              <button onClick={() => removeFromPlaylist(song.id)}>Remove </button>
            </div>
          ))
        )}
      </div>
      {currentSong && <MusicPlayer song={currentSong} />}
    </div>
  );
};

export default Playlist;
