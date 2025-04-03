import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login setUser={setUser} /> : <Navigate to="/home" />} />
        <Route path="/home" element={<Home playlist={playlist} setPlaylist={setPlaylist} />} />
        <Route path="/playlist" element={<Playlist playlist={playlist} setPlaylist={setPlaylist} />} />
        <Route path="/profile" element={<Profile username={user} />} />
      </Routes>
    </Router>
  );
};

export default App;

