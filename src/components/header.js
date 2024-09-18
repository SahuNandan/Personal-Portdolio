import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import '../assests/styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">Nandan</div>
      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About me</Link></li>
          <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="blogs" smooth={true} duration={500}>Blogs</Link></li>
          <li><Link to="certificates" smooth={true} duration={500}>Certificate</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact me</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </header>
  );
};

export default Header;
