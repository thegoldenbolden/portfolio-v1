import Link from "next/link";
import Projects from "../components/Projects";
import Skills from "../components/skills";

const Home = () => {
 return (
  <>
   <section id="hero" className="flex column">
    <div id="content">
     <h1>Jacob Bolden </h1>
     <h1>I make ideas a reality.</h1>
     <p>
      I'm a self-taught fullstack developer with a desire to create digital products that can be enjoyed by everyone.
     </p>
     <div className="flex gap-md">
      <a href="mailto: jlbolden.pro@gmail.com" className={`glass contact`}>
       Contact Me
      </a>
      <Link href="#featured">
       <a>View Projects</a>
      </Link>
     </div>
    </div>
   </section>
   <Skills />
   <Projects />
  </>
 );
};

export default Home;
