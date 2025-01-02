import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src="/UI-Task/images/Group 220.png" alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex" role="search">
        {/* <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span> */}
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search here"
            aria-label="Search"
          />
          <img src="/UI-Task/images/Group 73.png" alt="Logo" style={{marginLeft: "30px", width: "40px"}} />
        </form>
      </div>
    </div>
  </nav>
  );
};

export default Header;
