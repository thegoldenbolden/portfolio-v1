import type { NextPage } from "next";
import Head from "next/head";
import React, { Dispatch, useEffect, SetStateAction, useState, Fragment } from "react";

import useMobile from "../hooks/useMobile";
import Skills from "../components/skills";
import Socials from "../components/socials";

type Project = {
 id: string;
 name: string;
 description: string;
 site?: string;
 github?: string;
};

const projects: Project[] = [
 {
  id: "pokebinder",
  name: "PokéBinder",
  site: "https://pokebinder.vercel.app",
  github: "https://github.com/thegoldenbolden/pokebinder",
  description:
   "A web application for users to search for Pokémon cards and find places to buy or sell them.\nThis site was built using Next, Typescript and Sass.",
 },
 {
  id: "socialite",
  name: "Socialite",
  github: "https://github.com/thegoldenbolden/chatroom",
  description:
   "An app - built with Next, Socket.IO, Tailwind and Sass - where users can join rooms and talk to one another.\nCurrently, there is no live version.",
 },
 {
  id: "noodle",
  name: "Noodle",
  site: "https://noodlebot.netlify.app",
  description:
   "An app utilizing Next, Prisma, Postgres, and Sass that lets users choose who would win in a hypothetical fight.\nThe source code is currently private.",
 },
 {
  id: "noodleats",
  name: "Noodleats",
  site: "https://thegoldenbolden.github.io/noodleats/",
  github: "https://github.com/thegoldenbolden/noodleats",
  description:
   "A landing page for a DoorDash / UberEats style delivery company that delivers dishes involving noodles.\nThis project uses Next, Sass, and Tailwind.",
 },
];

const about: Project = {
 id: "about",
 name: "",
 description:
  "Hi, I'm a self-taught fullstack developer with a focus on building web applications using a mobile-first approach.\nI'm passionate about creating digital products that can be enjoyed by everyone.",
};

const Home: NextPage = () => {
 const [current, setCurrent] = useState<Project>(about);
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
   const px = e.pageX - offsetWidth / 2;
   const py = e.pageY - offsetHeight / 2;

   // change color of all sides
   let one = `0px 1px 10px rgba(${px % 360}, 30, 30, 0.809)`;
   let two = `0px -1px 10px rgb(59, ${py % 360}, 88)`;
   let three = `-1px 0px 10px rgb(24, 132, ${px + ((offsetWidth * 2) % 360)})`;
   let four = `1px 0px 10px rgb(${py + ((offsetWidth * 2) % 360)}, 72, 213)`;

   div.style.rotate = `${(px + py) % 360}deg`;
   div.style.top = py + "px";
   div.style.left = px + "px";
   div.style.boxShadow = `${one}, ${two}, ${three}, ${four}`;
   div.style.cursor = "none";
  };

  window.addEventListener("pointermove", handleMouseMove);
  return () => {
   window.removeEventListener("pointermove", handleMouseMove);
  };
 }, [isMobile, prefersReduced]);

 // Add animation based on user preference.
 useEffect(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  setPrefersReduced(reduce.matches);
  reduce.onchange = (e) => {
   setPrefersReduced(e.matches);
  };

  return () => {
   reduce.onchange = null;
  };
 }, []);

 return (
  <>
   <Head>
    <title>Jacob | Web Developer</title>
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
   <div className="container flex flex-col justify-between">
    <header className="w-full p-2 order-last sticky shadow shadow-black sm:shadow-none sm:static z-[10] sm:z-0 sm:bg-transparent bg-primary bottom-0 sm:order-first">
     <Socials />
    </header>
    <main className="p-2">
     <p>Welcome, I&apos;m Jacob</p>
     <div className="flex flex-wrap justify-between gap-8 md:gap-16">
      <Content content={current} setContent={setCurrent} />
      <Showcase content={current} setContent={setCurrent} />
     </div>
    </main>
    <footer className="flex flex-col items-center w-full p-2">
     <p>Designed & Built by Jacob Bolden</p>
     <a
      title="Contact Me"
      className="text-md gradient-text sm:project"
      href="mailto:jlbolden9@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
     >
      {"jlbolden9@gmail.com".split("").map((r, i) => {
       return <span key={i}>{r}</span>;
      })}
     </a>
    </footer>
    {!isMobile && !prefersReduced && (
     <div id="mouse" className="fixed bg-transparent mouse w-[50px] h-[50px] rounded-full"></div>
    )}
   </div>
  </>
 );
};

function Content({ content, setContent }: { content: Project; setContent: Dispatch<SetStateAction<Project>> }) {
 const { name, description, site, github } = content;
 const hdClassName = name == "" ? "text-white" : "text-white/25 hover:text-white focus:text-white";

 return (
  <div className="flex relative flex-col gap-4 text-base w-full min-h-[40vh] md:max-w-[50%] lg:max-w-[60%]">
   <h2 className="text-2xl sm:text-3xl sm:w-max">
    <span
     role="button"
     tabIndex={0}
     className={hdClassName}
     onClick={(e) => {
      setContent(about);
      const ul = document.getElementsByTagName("ul")?.item(0);
      if (ul) {
       ul.style.backgroundSize = "1px 0px";
      }
     }}
    >
     About
    </span>
    {name && (
     <>
      <span className="hidden text-white/25 sm:inline"> / Projects</span>
      <span className="text-white"> / {name}</span>
     </>
    )}
   </h2>
   <div className="text-lg sm:text-xl">
    {description.split("\n").map((description, i) => {
     return (
      <Fragment key={i}>
       {(i + 1) % 2 == 0 && <br />}
       <p>{description}</p>
      </Fragment>
     );
    })}
   </div>
   <div className="flex flex-wrap gap-2">
    {site && (
     <a
      href={site}
      target="_blank"
      rel="noreferrer noopener"
      className="border-b-2 border-b-solid border-b-white/25 hover:border-b-white"
     >
      View Site
     </a>
    )}
    {github && (
     <a
      href={github}
      target="_blank"
      rel="noreferrer noopener"
      className="border-b-2 border-b-solid border-b-white/25 hover:border-b-white"
     >
      View Code
     </a>
    )}
   </div>
  </div>
 );
}

function Showcase({ content, setContent }: { content: Project; setContent: Dispatch<SetStateAction<Project>> }) {
 return (
  <div className="flex flex-col sm:flex-shrink gap-4 text-base w-full md:w-[40%] lg:w-[30%]">
   <h2 className="text-2xl sm:text-3xl">Featured / Projects</h2>
   <div className="flex flex-col justify-between flex-grow gap-4 items-between text-md xs:text-lg md:text-lg">
    <div className="flex flex-wrap justify-between gap-2">
     <ul className="flex flex-col ml-2 flex-grow border-white/25 border-l-[.5px] justify-between">
      {projects.map((project, i) => {
       let active = content.name == project.name ? " text-white" : "";

       return (
        <li
         className={`min-h-[25%] w-max flex flex-row items-center px-4 gap-2 text-white/25 hover:text-white focus-within:text-white focus:text-white`}
         key={project.name}
        >
         <span className={"font-sans text-sm font-bold " + active}>0{i + 1}.&nbsp;</span>
         <button
          className="self-end text-white sm:project"
          onClick={() => {
           setContent(project);
           window.scrollTo(0, 0);
           const ul = document.getElementsByTagName("ul")?.item(0);
           if (!ul) return;
           const size = (i + 1) * 25;
           ul.style.backgroundSize = `1px ${size * 4}%`;
          }}
         >
          {project.name.split("").map((l, i) => {
           return <span key={i}>{l == " " ? <>&nbsp;</> : l}</span>;
          })}
         </button>
        </li>
       );
      })}
     </ul>
     <Skills />
    </div>
    <div className="flex flex-wrap w-full gap-4 rounded">
     <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      title="View Resume"
      className="flex-grow p-2 text-center border-2 border-solid rounded border-white/25 hover:border-white focus:border-white"
     >
      Resume
     </a>
     <a
      title="Contact Me"
      className="flex-grow p-2 text-center border-2 border-solid rounded border-white/25 hover:border-white focus:border-white"
      href="mailto:jlbolden9@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
     >
      Contact
     </a>
    </div>
   </div>
  </div>
 );
}

export default Home;
