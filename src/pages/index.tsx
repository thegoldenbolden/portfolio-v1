import type { NextPage } from "next";
import Head from "next/head";
import React, { Dispatch, useEffect, SetStateAction, useState, Fragment } from "react";
import { TbExternalLink, TbBrandGithub } from "react-icons/tb";

import useMobile from "../hooks/useMobile";
import Skills from "../components/skills";
import Socials from "../components/socials";

type Project = {
 id: string;
 name: string;
 description: string;
 site?: string;
 github?: string;
 tags?: string[];
};

const projects: Project[] = [
 {
  id: "pokebinder",
  name: "PokéBinder",
  site: "https://pokebinder.vercel.app",
  github: "https://github.com/thegoldenbolden/pokebinder",
  description: "A web application for users to search for Pokémon cards and find places to buy or sell them.",
  tags: ["Typescript", "Next", "Sass"],
 },
 {
  id: "socialite",
  name: "Socialite",
  github: "https://github.com/thegoldenbolden/chatroom",
  tags: ["Next", "Socket.IO", "Tailwind", "Sass"],
  description:
   "An app using Socket.IO and Next.js to create a chat app where users can join rooms and talk to one another.",
 },
 {
  id: "bigbrain",
  name: "Big Brain",
  site: "https://thegoldenbolden.github.io/triviabuddy/",
  github: "https://github.com/thegoldenbolden/trivia",
  description: "A trivia app.",
  tags: ["HTML5", "Javascript", "CSS3"],
 },
 {
  id: "noodleats",
  name: "Noodleats",
  site: "https://thegoldenbolden.github.io/noodleats/",
  github: "https://github.com/thegoldenbolden/noodleats",
  tags: ["Next", "Tailwind", "Sass"],
  description:
   "A landing page for an Ubereats and DoorDash style delivery company that primarily delivers dishes invovling noodles.",
 },
];

const about: Project = {
 id: "about",
 name: "",
 description:
  "My name is Jacob Bolden, I'm a fullstack developer with a focus on building web applications using a mobile-first approach.\nI'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",
};

const Home: NextPage = () => {
 const [current, setCurrent] = useState<Project>(about);
 const [prefersReduced, setPrefersReduced] = useState(false);
 const isMobile = useMobile();

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
   const one = `0px 1px 10px rgba(${px % 360}, 30, 30, 0.809)`;
   const two = `0px -1px 10px rgb(59, ${py % 360}, 88)`;
   const three = `-1px 0px 10px rgb(24, 132, ${px + ((offsetWidth * 2) % 360)})`;
   const four = `1px 0px 10px rgb(${py + ((offsetWidth * 2) % 360)}, 72, 213)`;

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
    <title>Jacob Bolden</title>
    <meta name="description" content="Jacob Bolden | Web Developer" />
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <div className="container flex flex-col justify-between">
    <header className="w-full p-2 order-last sticky shadow shadow-black sm:shadow-none sm:static z-[10] sm:z-0 sm:bg-transparent bg-primary bottom-0 sm:order-first">
     <Socials />
    </header>
    <main className="p-2">
     <div className="flex flex-wrap justify-between gap-16">
      <Content content={current} setContent={setCurrent} />
      <Showcase content={current} setContent={setCurrent} />
     </div>
    </main>
    <footer className="w-full p-2 text-center">Designed & Built by Jacob Bolden</footer>
    {!isMobile && !prefersReduced && (
     <div id="mouse" className="fixed bg-transparent mouse w-[50px] h-[50px] rounded-full"></div>
    )}
   </div>
  </>
 );
};

function Content({ content, setContent }: { content: Project; setContent: Dispatch<SetStateAction<Project>> }) {
 const { name, description, tags, site, github } = content;
 const hdClassName = name == "" ? "text-complement" : "text-complement/25 hover:text-complement focus:text-complement";

 return (
  <div className="flex relative flex-col gap-4 text-base w-full min-h-[50vh] sm:min-h-min lg:max-w-[60%]">
   <h2 className="text-xl xs:text-2xl sm:w-max">
    <span role="button" tabIndex={0} className={hdClassName} onClick={(e) => setContent(about)}>
     Developer
    </span>
    {name && (
     <>
      <span className="hidden text-complement/25 sm:inline"> / Projects</span>
      <span className="text-complement"> / {name}</span>
     </>
    )}
   </h2>
   <div className="text-md xs:text-lg md:text-xl">
    {description.split("\n").map((description, i) => {
     return (
      <Fragment key={i}>
       {(i + 1) % 2 == 0 && <br key={i} />}
       <p key={i}>{description}</p>
      </Fragment>
     );
    })}
   </div>
   <div className="flex flex-wrap items-end flex-grow gap-2 p-2 flex-between">
    {tags && (
     <div className="flex flex-wrap items-center flex-grow gap-2">
      {tags.map((tag) => (
       <span key={tag}>{tag}</span>
      ))}
     </div>
    )}
    {(site || github) && (
     <div className="flex flex-wrap items-center justify-end gap-2 text-2xl sm:text-3xl">
      {site && (
       <a href={site} target="_blank" rel="noreferrer noopener" className="hover:text-blue-200">
        <TbExternalLink />
       </a>
      )}
      {github && (
       <a href={github} target="_blank" rel="noreferrer noopener" className="hover:text-blue-200">
        <TbBrandGithub />
       </a>
      )}
     </div>
    )}
   </div>
  </div>
 );
}

function Showcase({ content, setContent }: { content: Project; setContent: Dispatch<SetStateAction<Project>> }) {
 return (
  <div className="flex flex-col sm:flex-shrink gap-4 text-base w-full lg:w-[30%]">
   <h2 className="text-xl xs:text-2xl">Featured / Projects</h2>
   <div className="flex flex-col justify-between flex-grow gap-4 text-md xs:text-lg items-between md:text-xl">
    <div className="flex flex-wrap justify-between gap-2">
     <ul className="flex flex-col ml-2 flex-grow border-white/25 border-l-[.5px] justify-between">
      {projects.map((project, i) => {
       let active = content.name == project.name ? " text-white" : "";
       return (
        <li className={`flex flex-row items-center justify-between gap-2 px-4`} key={project.name}>
         <div className="flex flex-row justify-between gap-2 text-white/25 hover:text-white focus-within:text-white focus:text-white">
          <span className={"font-sans text-sm font-bold " + active}>0{i + 1}.&nbsp;</span>
          <button
           className="sm:project text-complement"
           onClick={() => {
            setContent(project);
            window.scrollTo(0, 0);
           }}
          >
           {project.name.split("").map((l, i) => {
            if (l == " ") {
             return <span key={i}>&nbsp;</span>;
            }
            return <span key={i}>{l}</span>;
           })}
          </button>
         </div>
        </li>
       );
      })}
     </ul>
     <Skills />
    </div>
    <button className="w-full p-2 rounded btn">
     <span>View Resume</span>
    </button>
   </div>
  </div>
 );
}

export default Home;
