
import React from 'react';

const Footer = () => {
  return (
    <>
      <hr className="footer-line" />
      <footer className="text-dark text-center py-4 mt-5">
        <p className="mb-0">© {new Date().getFullYear()} Online Course Compare. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
