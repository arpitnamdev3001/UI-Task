import React from 'react';
import './Post.css';

const Post = ({ user, content, image, likes, comments }) => {
  return (
    <div className="card mt-3" style={{backgroundColor: "#f8f9fa", border: "none", padding: "0 2em 2em 2em"}}>
      <div className="card-body">
      <h4>Post Filter</h4><br />
      <div class="heading-container">
      <p className='underline-heading' style={{color: "red"}}>All</p>
      <p>My Preference</p>
      <p>Friends</p>
      </div><br />
        <h5 className="card-title">Megan James</h5>
        <h6 className="card-subtitle mb-2 text-muted">Sheikh Zayed Road · 5 mins ago</h6>
        <img
          src="/UI-Task/images/Frame-146.png"
          alt="Post"
          className="img-fluid rounded"
        /><span>Likes: 8013290</span>
          <span style={{marginLeft: "20px"}}>Comments: 342</span>
        
      </div>
      <div className='icon-row'>
      <i class="bi bi-heart icon"></i>
      <i class="bi bi-chat-left-text-fill"></i>
      <i class="bi bi-send"></i>
      <i class="bi bi-chat-square-fill"></i>
        
      </div>
    </div>
  )
};

export default Post;
