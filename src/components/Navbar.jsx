import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
  <h1>Vignesh</h1>

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  <ul className={menuOpen ? "nav-links active" : "nav-links"}>
    <li onClick={() => setMenuOpen(false)}>
      <a href="#home">Home</a>
    </li>

    <li onClick={() => setMenuOpen(false)}>
      <a href="#about">About</a>
    </li>

    <li onClick={() => setMenuOpen(false)}>
      <a href="#skills">Skills</a>
    </li>

    <li onClick={() => setMenuOpen(false)}>
      <a href="#projects">Projects</a>
    </li>

    <li onClick={() => setMenuOpen(false)}>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;