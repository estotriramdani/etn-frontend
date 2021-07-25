import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Spinner from '../../atoms/spinner';
import Link from 'next/link';

const NavbarWriter = () => {
  const [isLogout, setIsLogout] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.setItem('currentUser', 'null');
    setIsLogout(true);
    setTimeout(() => {
      router.push('/writer/auth/login');
    }, 1000);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link href="/writer/home">
          <a className="navbar-brand">Home</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">ETN Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/writer/home/my-posts">
                <a className="nav-link">Post</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLogout}>
                {isLogout ? <Spinner /> : ''}
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWriter;
