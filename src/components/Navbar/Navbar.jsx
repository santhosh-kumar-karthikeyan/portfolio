import { useState } from "react";
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
        aria-label="Toggle navigation"
      >
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      </button>

      <ul className={`${styles.navlist} ${isOpen ? styles.showMenu : ""}`}>
        <li>
          <a href="/Home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="/Projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="/Tools" onClick={() => setIsOpen(false)}>
            Tools
          </a>
        </li>
        <li>
          <a href="/Certifications" onClick={() => setIsOpen(false)}>
            Certifications
          </a>
        </li>
        <li>
          <a href="/About" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="/Contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
