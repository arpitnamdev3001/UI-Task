import React from 'react';

const Sidebar = () => {
   return (
    <>
    <div
      className=" flex-column bg-light vh-100"
      style={{ alignItems: 'center', padding: '1rem' }} 
    >

      <div className="sidebar card" style={{ width: '18rem', marginBottom: '1rem' }}>
        <ul className="list-group list-group-flush">
          <li className="bi bi-house list-group-item" style={{ border: 'none' }}> Home</li>
          <li className="bi bi-people list-group-item" style={{ border: 'none' }}> Connect</li>
          <li className="bi bi-bell-fill list-group-item" style={{ border: 'none' }}> Notification</li>
          <li className="bi bi-chat-dots list-group-item" style={{ border: 'none' }}> Message</li>
        </ul>
      </div>
      <div className="accordion accordion-flush card" style={{ width: '18rem' }}>
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
              My Preferences
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Ratings and Reviews
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Account Settings
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Settings
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              FAQ'S
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              About Us
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              Help
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              Contact Us
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              Privacy Policy
            </button>
          </h2>
        </div>
      </div>
    </div>
</>
   )
};
export default Sidebar;