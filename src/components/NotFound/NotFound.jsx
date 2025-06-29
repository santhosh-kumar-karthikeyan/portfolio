import styles from "./NotFound.module.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
          <h2>Try finding something better🥀</h2>
        </section>
        <Link to ="/" >
          <button>Navigate to home</button>
        </Link>
      </main>
    </>
  );
}
