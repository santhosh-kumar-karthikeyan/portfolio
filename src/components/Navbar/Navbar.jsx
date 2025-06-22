import styles from "./Navbar.module.css";

export default function Navbar() {
    return (<nav className={styles.navbar}>
        <a href="/" className={styles.logoText}>Santhosh Kumar</a>
        <ul className={styles.navlist}>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Tools">Tools</a></li>
            <li><a href="/Certifications">Certifications</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
        </ul>
    </nav>)
}