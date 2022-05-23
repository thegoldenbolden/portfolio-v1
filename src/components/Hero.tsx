import Link from "next/link";
import styles from "../styles/Hero.module.scss";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div id={styles.left}>
        <h1>Hi, I'm Jacob</h1>
        <p>Let's build something special.</p>
        <div className={styles.actions}>
          <a
            href="mailto: jlbolden.pro@gmail.com"
            className={`glass ${styles.contact}`}
          >
            Contact Me
          </a>
          <Link href="#projects">
            <a>View Projects</a>
          </Link>
        </div>
        <div className={styles.socials}>
          <a href="https://twitter.com/thagoldenbolden">
            <FiTwitter size={24} color="#fff" />
          </a>
          <a href="https://github.com/thegoldenbolden">
            <FiGithub size={24} color="#fff" />
          </a>
          <a href="https://linkedin/jlbolden9">
            <FiLinkedin size={24} color="#fff" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
