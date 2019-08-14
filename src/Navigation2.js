

import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './bootstrap.min.css';
import {Link} from 'react-router-dom';
 function Navigation2() {
  return (
 <div>
{/* <nav className="navbar navbar-expand-sm">
  <div className="topLevelMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link">Link 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Link 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={{pathname: `recipe`}}>Add New Recipe</Link>
            </li>
          </ul>
    </div>     
</nav>  */}

<div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
</div>
<div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
</div>
  );
}

export default Navigation2;