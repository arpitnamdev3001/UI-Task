import React, { useState } from "react";
import './Sidebar.css';

const Sidebar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  
  };

  const content = [
    {title: "Home", icon: "bi bi-house"},
    {title: "Connect", icon: "bi bi-people"},
    {title: "Notification", icon: "bi bi-bell-fill"},
    {title: "Message", icon: "bi bi-chat-dots"},
  ];

  const Settings = [
    {title: "My Preferences"},
    {title: "Ratings and Reviews"},
    {title: "Account Settings"},
    {title: "Settings"},
    {title: "FAQ's"},
    {title: "About Us"},
    {title: "Help"},
    {title: "Contact Us"},
    {title: "Privacy Policy"},
    ];

   return (
    <>
    <div
      className=" flex-column bg-light vh-100"
      style={{ alignItems: 'center', padding: '1rem' }} 
    >

<div className="sidebar card" style={{ width: '18rem', marginBottom: '1rem' }}>
      {content.map((text, index) => (
        <ul  className="list-group" style={{border: "none"}}>
        <li 
        key={index}
        className={`list-group-item ${activeIndex === index ? "highlighted" : ""} `}
        onClick={() => handleClick(index)}
        style={{ cursor: "pointer", border: "none" }}
        > <i className={`${text.icon}`} style={{marginRight: "10px"}}></i> 
        {text.title}
        </li>
      </ul>
        
      ))}
        
      </div>

      <div className="accordion accordion-flush card" style={{ width: '18rem' }}>
        {Settings.map((setting, index) => (
          <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              {setting.title}
            </button>
          </h2>
        </div>

        ))}
        
      </div>
    </div>
</>
   )
};
export default Sidebar;
