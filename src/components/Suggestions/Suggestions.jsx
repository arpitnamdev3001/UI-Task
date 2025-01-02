import React from "react";


const Suggestions = () => {
  const suggestions = [
    { name: 'Dianne Russell', location: 'Sheikh Zayed Road', img: './images/profile.png' },
    { name: 'Jacob Jones', location: 'Sheikh Zayed Road', img: './images/Group 74.png' },
    { name: 'Annette Black', location: 'Sheikh Zayed Road', img: './images/profile.png' },
    { name: 'Courtney Henry', location: 'Sheikh Zayed Road', img: './images/Group 74.png' },
    { name: 'Cody Fisher', location: 'Sheikh Zayed Road', img: './images/profile.png' },
    { name: 'Wade Warren', location: 'Sheikh Zayed Road', img: './images/Group 74.png' },
  ];

  return (
    <div className="second-div card" style={{ width: '18rem', marginTop: "16px" }}>
      <p style={{fontSize: "15px"}}>Suggestions</p>
      {suggestions.map((user, index) => (
        <div key={index} className="friend-card bs-body-font-family">
          <img src={user.img} alt={`${user.name}'s Profile`} style={{borderRadius: "50%" }} />
          <p className="friend-name" style={{ marginTop: "5px", marginRight: "10px" }}>
            {user.name}
            <br />
            <span className="friend-address">{user.location}</span>
          </p>
          <p style={{marginTop: "10px", color: "red", fontSize: "smaller"}}>Request</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions
