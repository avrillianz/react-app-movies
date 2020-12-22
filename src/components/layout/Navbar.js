import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../home/SearchForm';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              App Movie
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <SearchForm />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
