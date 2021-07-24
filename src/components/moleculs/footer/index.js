import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="developer">
        <p>Esto Triramdani N &copy; 2021</p>
      </div>
      <div className="social-media">
        <Link href="https://github.com/estotriramdani">
          <a>
            <i className="bi bi-github"></i>
          </a>
        </Link>
        <Link href="https://instagram.com/estotriramdani">
          <a>
            <i className="bi bi-instagram"></i>
          </a>
        </Link>
        <Link href="https://facebook.com/estolagi">
          <a>
            <i className="bi bi-facebook"></i>
          </a>
        </Link>
        <Link href="https://estotriramdani.github.io">
          <a>
            <i className="bi bi-globe"></i>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
