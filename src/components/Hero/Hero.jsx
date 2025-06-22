import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <main className={styles.hero}>
            <img className={styles.mainImage} src="/assets/me.png" alt="main image" />
            <section>
            <h2>Hi, I am Santhosh Kumar Karthikeyan. </h2>
            <h2>This is a portal to check out the works that I do, the tools the I use, the skills that I have acquired.</h2>
            <h4 className={styles.mutedText}>Btw, ignore the "candid" picture of mine exisiting above, couldn't find a good picture of mine</h4>
            </section>
        </main>
    );
}