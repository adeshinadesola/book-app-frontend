/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/books/search?query=${searchQuery}`);
  };

  const spanStyle = {
    marginLeft: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
         <Link className="navbar-brand" to="/"> {/*http://localhost:3000*/}
            <img
              src="./learnon.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span style={spanStyle}>Learn on</span>
            </Link>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;