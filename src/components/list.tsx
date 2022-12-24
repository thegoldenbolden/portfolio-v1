import { FC } from "react";
import projects from "../lib";
import { ListProps } from "../types";
import Skills from "./skills";

const List: FC<ListProps> = ({ active, isMobile, setActive }) => {
 const updateSlider = (i: number) => {
  const ul = document.getElementsByTagName("ul")?.item(0);
  if (!ul) return;
  const size = i * 20; // Max height for each item.
  ul.style.backgroundSize = `1px ${size * 5}%`; // max items * max size;
 };

 return (
  <>
   <Skills />
   <aside id="projects" className="flex flex-col order-last gap-2">
    <h2 className="text-3xl">Projects</h2>
    <ul className="flex flex-col gap-4 border-l-[.5px] border-dark/25 dark:border-light/25">
     {projects.map((project) => {
      if (project.id == 0) return;
      const isActive = active.id == project.id ? "text-dark dark:text-light" : "";
      return (
       <li
        key={project.name}
        className={`flex items-center gap-2 px-4 ${
         isActive ? "opacity-100" : "opacity-50"
        } hover:opacity-100 focus-within:opacity-100`}
       >
        <span className="text-xs font-bold">0{project.id}.&nbsp;</span>
        <button
         className="text-xl project-list-item"
         onFocus={() => updateSlider(project.id)}
         onMouseEnter={() => updateSlider(project.id)}
         onBlur={() => updateSlider(active.id)}
         onMouseLeave={() => updateSlider(active.id)}
         onClick={() => {
          setActive(project);
          updateSlider(project.id);
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
   </aside>
  </>
 );
};

export default List;
