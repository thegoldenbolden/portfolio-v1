import Link from "next/link";
import { useContext, useEffect } from "react";
import CustomImage from "../components/Image";
import Projects from "../components/projects";
import Skills from "../components/skills";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
 const { theme } = useContext(ThemeContext);

 useEffect(() => {
  if (document) {
   const body = document.body;
   body.classList.add(theme);
   body.classList.remove(theme == "dark" ? "light" : "dark");
  }
 }, [theme]);

 return (
  <>
   <Landing />
   <Projects />
   <About />
   <Skills />
  </>
 );
};

function Landing() {
 return (
  <section id="landing">
   <h1>Jacob Bolden </h1>
   <h1>Imagination Meets Reality</h1>
   <p>
    I&apos;m a self-taught fullstack developer with a desire to create digital products that can be enjoyed by everyone.
   </p>
   <div>
    <Link href="#featured">
     <a>View Projects</a>
    </Link>
    <Link href="mailto:jlbolden.pro@gmail.com">
     <a>Contact Me</a>
    </Link>
   </div>
  </section>
 );
}

function About() {
 return (
  <section id="about">
   <h1 className="heading">About Me</h1>
   <div className="about-content">
    <div>
     <p>
      Bonjour, mes copines. my name is Jacob and I graduated from University of Memphis in 2020 with a bachelors in
      health science, but eventually decided to stay true to my younger self and pursue a career in{" "}
      <strong>graphic design</strong> and <strong>web development</strong>.
     </p>
     <p>
      Other than coding, I spend most of my free time, <strong>rewatching</strong> Community and New Girl,{" "}
      <strong>playing</strong> video games and basketball, or <strong>learning</strong> French and Japanese.
     </p>
     <p>
      I&apos;m open to <strong>Job</strong> opportunities where I can contribute, learn, and grow. If you have a good
      opportunity that matches my skills and experience then don&apos;t hesitate to <strong>contact</strong> me. 😀
     </p>
    </div>
    <div>
     <CustomImage src="/avatar.png" height={250} width={250} />
    </div>
   </div>
  </section>
 );
}

export default Home;
