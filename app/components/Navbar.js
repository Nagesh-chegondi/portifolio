"use client";

import React from "react";

export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Portfolio</div>
        <ul className="navbar-menu">
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
