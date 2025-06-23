import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="/assets/github.png"
            alt="GitHub logo"
          />
          <a
            className={styles.link}
            target="_blank"
            href="https://www.github.com/santhosh-kumar-karthikeyan"
          >
            Github
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="/assets/linkedin.png"
            alt="LinkedIn logo"
          />
          <a
            className={styles.link}
            target="_blank"
            href="https://www.linkedin.com/in/santhosh-k-kumar"
          >
            LinkedIn
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="/assets/reddit.png"
            alt="Reddit logo"
          />
          <a
            className={styles.link}
            target="_blank"
            href="https://www.reddit.com"
          >
            Reddit
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="/assets/instagram.png"
            alt="Instagram logo"
          />
          <a
            className={styles.link}
            target="_blank"
            href="https://www.instagram.com/"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        <img
          className={styles.icon}
          src="/assets/copyright.svg"
          alt="copyright"
        />
        <span>2025 Santhosh Kumar Karthikeyan</span>
      </div>
    </footer>
  );
}
