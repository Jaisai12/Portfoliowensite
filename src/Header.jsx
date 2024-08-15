import React, { useState } from "react";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
import git from "./assets/git.png";
import "./index.css"; // Link your CSS

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="Mainheader">
      <h1 className="Headername">👋 Jaisaikumar Velupula</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-list ${menuOpen ? "open" : ""}`}>
        <ul className="listelements">
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact Details</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/____j__s__k____?igsh=MXEwa3o1NnpmNm9yeQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" className="instaimg" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/velupula-jaisaikumar-37b92425b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="instaimg" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Jaisai12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="GitHub" className="instaimg" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
