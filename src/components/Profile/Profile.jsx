import React from 'react'; 
import './Profile.css';

const Profile = () => {
    return (
        <div className="container" style={{maxWidth: "-webkit-fill-available"}}>
            <div className="first-div card">
        <div className="profile-card">
      <div className="profile-image">
        <img src="/images/Group 74.png" alt="Profile Picture" />
      </div>
      <div className="profile-info">
        <h2>Rick Grimes</h2>
        <p>Sheikh Zyed Road</p>
        <div className="stats">
          <span>124 Friends</span>
          <span>32 Followers</span>
        </div>
        <div className="input-bar">
          <input type="text" placeholder="What's on your mind, user?" />
        </div>
      </div>
      {/* <div className="action-bar">
        <div className="icons">
          <img src="https://via.placeholder.com/24" alt="Post Icon" />
          <img src="https://via.placeholder.com/24" alt="Travel Icon" />
          <img src="https://via.placeholder.com/24" alt="Camera Icon" />
          <img src="https://via.placeholder.com/24" alt="Location Icon" />
          <img src="https://via.placeholder.com/24" alt="Luggage Icon" />
        </div>
        <button>Next to me</button>
      </div> */}
    </div>
    </div>
    <div className="second-div card" style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ border: "none" }}>Create Post</li>
          <li className="list-group-item" style={{ border: "none"}}>Explore Community</li>
          <li className="list-group-item" style={{border: "none"}}>Travel Post</li>
        </ul>
      </div>
    </div>
    )
}

export default Profile