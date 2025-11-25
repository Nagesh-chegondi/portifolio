"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Portfolio
        </a>
        <div className="flex items-center gap-6">
          <ul className="navbar-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
