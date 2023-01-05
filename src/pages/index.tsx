import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import useMobile from "../hooks/useMobile";
import Socials from "../components/socials";
import About from "../components/about";
import { Project } from "../types";
import projects from "../lib";
import ProjectsList from "../components/list";
import Contact from "../components/contact";

const Home: NextPage = () => {
 const [active, setActive] = useState<Project>(projects[0]);
 const [prefersReduced, setPrefersReduced] = useState(false);
 const isMobile = useMobile();

 // Add mouse styling depending on user device and animation preference.
 useEffect(() => {
  if (isMobile) return;
  if (prefersReduced) return;

  const handleMouseMove = (e: any) => {
   const div = document.getElementById("mouse");
   if (!div) return;
   const { offsetHeight, offsetWidth } = div;
   // position cursor in center of square
   const px = e.x - offsetWidth / 2;
   const py = e.y - offsetHeight / 2;

   const color_1 = `hsl(${(px - py) % 360}, 80%, 73%)`;
   const color_2 = `hsl(${(py - px) % 360}, 80%, 73%)`;
   const shadow = "5px";
   // change color of all sides
   let one = `0px 1px ${shadow} ${color_1}`;
   let two = `0px -1px ${shadow} ${color_2}`;

   div.style.top = py + "px";
   div.style.left = px + "px";
   div.style.boxShadow = `${one}, ${two}`;

   const footer = document.getElementById("footer");
   if (!footer) return;
   footer.style.backgroundImage = `linear-gradient(to right, ${color_1}, ${color_2})`;

   const skills = document.getElementById("skills");
   if (!skills) return;
   skills.style.boxShadow = div.style.boxShadow;
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => {
   window.removeEventListener("mousemove", handleMouseMove);
  };
 }, [isMobile, prefersReduced]);

 // Add animation based on user preference.
 useEffect(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  setPrefersReduced(reduce.matches);
  reduce.onchange = (e) => setPrefersReduced(e.matches);

  return () => {
   reduce.onchange = null;
  };
 }, []);

 return (
  <>
   <Head>
    <title>Jacob Bolden</title>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f8d07a" />
    <meta name="msapplication-TileColor" content="#f8d07a" />
    <meta name="theme-color" content="#ffffff" />
    <meta
     name="description"
     content="Jacob Bolden is a enthusiastic individual with a strong foundation in web development. With a passion for creating innovative and user-friendly websites, they are constantly learning and improving their skills. Whether you need a simple website or a more complex web application, Jacob is ready to take on the challenge and deliver high-quality results."
    />
   </Head>
   <div className="container flex flex-col gap-8">
    <a
     id="skip"
     href="#projects"
     className="fixed z-10 p-2 text-center min-w-screen bg-theme color-theme -top-full focus:top-0"
    >
     Skip to Projects
    </a>
    <a
     id="skip"
     href="#contact"
     className="fixed z-10 p-2 text-center min-w-screen bg-theme color-theme -top-full focus:top-0"
    >
     Skip to Contact
    </a>
    <header className="flex justify-between w-full gap-4 p-4 sm:justify-end">
     <Socials />
    </header>
    <main className="grid grow grid-cols-1 gap-4 p-4 md:grid-cols-[1fr_300px] grid-rows-[min-content_1fr]">
     <About active={active} setActive={setActive} />
     <ProjectsList isMobile={isMobile} active={active} setActive={setActive} />
    </main>
   </div>
   <section
    id="contact"
    className="flex items-center justify-center p-4 mt-8 mb-16 border-t-solid border-t-px 3xl:items-start"
   >
    <Contact />
   </section>
   <footer className="fixed bottom-0 z-[1000] shadow shadow-dark bg-dark w-full block p-2 text-center">
    <span id="footer" className="gradient-text">
     Designed & Built by Jacob Bolden
    </span>
   </footer>
   {!isMobile && !prefersReduced && <div id="mouse" className="mouse" />}
  </>
 );
};

export default Home;
