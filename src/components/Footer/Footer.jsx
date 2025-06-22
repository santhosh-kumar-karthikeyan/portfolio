import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="/assets/github.png"
            alt="logo of github"
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
          alt="logo of linkedin"
        />
        <a
          className={styles.link}
          target="_blank"
          href="https://www.linkedin.com/in/santhosh-k-kumar"
        >
          Linkedin
        </a>
      </div>
      <section className={styles.iconContainer}>
        <img
          className={styles.icon}
          src="/assets/copyright.svg"
          alt="copyright-icon"
        />
        2025 Santhosh Kumar Karthikeyan
      </section>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="/assets/reddit.png"
            alt="reddit logo"
          />
          <a
            target="_blank"
            className={styles.link}
            href="https://wwww.reddit.com"
          >
            Reddit
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="/assets/instagram.png"
            alt="instagram logo"
          />
          <a
            className={styles.link}
            target="_blank"
            href="https://www.instagram.com/chica_chica_slim_s4ndy"
          >
            Instagram
          </a>
        </div>
    </footer>
  );
}
