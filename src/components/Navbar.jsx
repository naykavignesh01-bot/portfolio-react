import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Vignesh</h2>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;