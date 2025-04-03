
import React from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

const Profile = ({ username = "Guest" }) => {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-card">
          <img 
            src="https://tse1.explicit.bing.net/th?id=OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3&rs=1&pid=ImgDetMain" 
            alt="User Avatar" 
            className="profile-pic"
          />
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Member Since:</strong> 2024</p>
          <p><strong>Favorite Genre:</strong> Pop / Rock</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
