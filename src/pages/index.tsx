import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import useMobile from "../hooks/useMobile";
import Socials from "../components/socials";
import Content from "../components/content";
import { Project } from "../types";
import { projects } from "../lib";
import Showcase from "../components/showcase";

const Home: NextPage = () => {
 const [current, setCurrent] = useState<Project>(projects[0]);
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

   const email = document.getElementById("email");
   if (!email) return;
   email.style.backgroundImage = `linear-gradient(to right, ${color_1}, ${color_2})`;

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
     content="Jacob Bolden is a web developer who specializes in making responsive and accessible websites."
    />
   </Head>
   <div className="container py-4">
    <header className="w-full p-2 order-last shadow shadow-dark dark:shadow-light bg-light dark:bg-dark z-[10] sticky bottom-0 sm:static sm:shadow-none sm:z-0 sm:bg-transparent sm:order-first">
     <a
      id="skip"
      className="fixed left-0 z-10 w-full py-2 text-center duration-200 ease-in-out -top-full bg-dark text-light dark:bg-light dark:text-dark focus:top-0"
      href="#showcase"
     >
      Skip to Projects
     </a>
     <Socials />
    </header>
    <main className="flex-grow p-2 justify-self-center">
     <div className="flex flex-wrap justify-between h-full gap-8 md:gap-16">
      <Content content={current} setContent={setCurrent} />
      <Showcase isMobile={isMobile} content={current} setContent={setCurrent} />
     </div>
    </main>
    <footer className="flex flex-col items-center w-full p-2 text-center">
     <p>Designed & Built by Jacob Bolden</p>
     <a
      title="Contact Me"
      className="text-md gradient-text"
      href="mailto:jlbolden9@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      id="email"
     >
      jlbolden9@gmail.com
     </a>
    </footer>
   </div>
   {!isMobile && !prefersReduced && <div id="mouse" className="mouse" />}
  </>
 );
};

export default Home;
