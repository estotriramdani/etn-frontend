import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const showNavMenu = () => {
    document.querySelector('.nav-menu').classList.toggle('showNav');
  };
  const showCategoryOnMobile = () => {
    showNavMenu();
    scrollTo(top);
    document
      .querySelector('.category-list')
      .classList.toggle('showCategoryOnMobile');
  };
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <p className="logo">ETN News</p>
      </div>
      <div className="nav-menu">
        <Link href="/">
          <a className="nav-item" onClick={showNavMenu}>
            <i className="bi bi-house-door-fill"></i> &nbsp;Home
          </a>
        </Link>
        <a
          className="nav-item category-button"
          classList="navbar"
          onClick={() => showCategoryOnMobile()}
        >
          <i className="bi bi-book-fill"></i> &nbsp;Category
        </a>
        <Link href="/writer/home">
          <a className="nav-item">
            <i className="bi bi-pencil"></i> &nbsp;WriterCorner
          </a>
        </Link>
      </div>
      <button className="hamburger" onClick={() => showNavMenu()}>
        <i className="bi bi-list"></i>
      </button>
    </div>
  );
};

export default Navbar;
