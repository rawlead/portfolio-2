import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <React.Fragment>
    <nav className="navbar">
      <div className="navbar-item ">
        <Link href="/">
          <a href="!" className="has-text-white"><i className="fab fa-facebook fa-lg" /></a>
        </Link>
      </div>
      <div className="navbar-item">
        <Link href="/about">
          <a href="!" className="has-text-white"><i className="fas fa-envelope fa-lg" /></a>
        </Link>
      </div>
      <div className="navbar-item">
        <Link href="/about">
          <a href="!" className="has-text-white"><i className="fab fa-linkedin fa-lg" /></a>
        </Link>
      </div>
      <div className="navbar-item">
        <Link href="/about">
          <a href="!" className="has-text-white"><i className="fab fa-github fa-lg" /></a>
        </Link>
      </div>
    </nav>

    <style jsx>
      {`
      .navbar {
        display: block;
        left: auto;
        right: auto;
        text-align:center;
        background-color: #0a0a0a;

        min-height: auto;
        }
      .navbar-item {
        display: inline-block;
      }
        .left-bar {
          position: absolute;
          z-index: 100;
          width: 40px;
          top: 0;
          bottom:0;
          background: #0a0a0a;
  
        }
        .right-bar {
          position: absolute;
          z-index: 100;
          width: 40px;
          top: 0;
          right: 0;
          bottom:0;
          background: #0a0a0a;
     
        }
        `}
    </style>
  </React.Fragment>
);
export default Navbar;
