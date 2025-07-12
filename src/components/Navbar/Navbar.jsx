import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img className={styles.logoText} src="/logo/dark1.png" alt="logo" />
      </a>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation">
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      </button>

      <ul className={`${styles.navlist} ${isOpen ? styles.showMenu : ""}`}>
        <li>
          <Link to="/Home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Tools" onClick={() => setIsOpen(false)}>
            Tools
          </Link>
        </li>
        <li>
          <Link to="/Certifications" onClick={() => setIsOpen(false)}>
            Certifications
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
