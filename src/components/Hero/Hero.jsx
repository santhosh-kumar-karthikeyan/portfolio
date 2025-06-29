import styles from "./Hero.module.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <section>
        <h4>Hi, I am </h4>
        <h1>Santhosh Kumar Karthikeyan. </h1>
      </section>
      <h3>
        This is a portal to check out the works that I do, the tools the I use,
        the skills that I have acquired. Feel free to contact me on enquiring
        about or debating on something.
      </h3>
      <section className={styles.buttonPool}>
        <a href="https://github.com/santhosh-kumar-karthikeyan" target="_blank">
          <button className={styles.githubButton}>
            <FaGithub size="20" />
            Check out my Github
            <HiExternalLink size="22.5" />
          </button>
        </a>
        <a href="/attachments/resume.pdf" target="_blank">
          <button className={styles.githubButton}>
            <IoDocumentOutline />
            Check out my Resume
            <HiExternalLink size="22.5" />
          </button>
        </a>
      </section>
    </main>
  );
}
