import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">My Portfolio</div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? "active" : ""}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#education" onClick={closeMenu}>
          Education
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#certifications" onClick={closeMenu}>
          Certifications
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
