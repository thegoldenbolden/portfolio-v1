import { FC } from "react";
import { projects } from "../lib";
import { ShowcaseProps } from "../types";
import Skills from "./skills";

const Showcase: FC<ShowcaseProps> = ({ content, isMobile, setContent }) => {
 const updateSlider = (i: number) => {
  const ul = document.getElementsByTagName("ul")?.item(0);
  if (!ul) return;
  const size = i * 20; // Max height for each item.
  ul.style.backgroundSize = `1px ${size * 5}%`; // max items * max size;
 };

 return (
  <aside id="showcase" className="flex flex-col gap-4 text-base w-full md:w-[40%] lg:w-[30%]">
   <Skills />
   <h2 className="text-2xl sm:text-3xl">Projects</h2>
   <ul className="flex flex-col ml-2 gap-4 text-md xs:text-lg md:text-lg flex-grow border-dark/25 dark:border-light/25 border-l-[.5px] justify-evenly">
    {projects.map((project) => {
     if (project.id == 0) return;
     let active = content.id == project.id ? "text-dark dark:text-light" : "";
     return (
      <li
       className={`flex flex-row items-center px-4 gap-2 text-dark/25 dark:text-light/25 hover:text-dark dark:hover:text-light focus-within:text-dark dark:focus-within:text-light`}
       key={project.name}
      >
       <span className={"font-sans text-sm font-bold " + active}>0{project.id}.&nbsp;</span>
       <button
        className={`text-dark w-full text-start dark:text-light ${!isMobile ? "sm:project" : ""}`}
        onFocus={() => updateSlider(project.id)}
        onMouseEnter={() => updateSlider(project.id)}
        onBlur={() => updateSlider(content.id)}
        onMouseLeave={() => updateSlider(content.id)}
        onClick={() => {
         setContent(project);
         updateSlider(project.id);
         window.scrollTo({ top: 0, behavior: "smooth" });
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
   <div className="flex flex-wrap w-full gap-4 rounded">
    <a
     href="/resume.pdf"
     target="_blank"
     rel="noopener noreferrer"
     title="View Resume"
     className="flex-grow p-2 text-center border-2 border-solid rounded border-dark/25 dark:border-light/25 hover:border-dark dark:hover:border-light focus:border-dark dark:focus:border-light"
    >
     Resume
    </a>
    <a
     title="Contact Me"
     className="flex-grow p-2 text-center border-2 border-solid rounded border-dark/25 dark:border-light/25 hover:border-dark dark:hover:border-light focus:border-dark dark:focus:border-light"
     href="mailto:jlbolden9@gmail.com"
     target="_blank"
     rel="noopener noreferrer"
    >
     Contact
    </a>
   </div>
  </aside>
 );
};

export default Showcase;
