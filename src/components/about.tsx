import { Fragment, FC } from "react";
import projects from "../lib";
import { AboutProps } from "../types";

const About: FC<AboutProps> = ({ active, setActive }) => {
 const { name, description, live, github } = active;

 return (
  <>
   <p className="order-first py-2 text-2xl">Welcome, I&apos;m Jacob</p>
   <div className="flex flex-col order-2 gap-2 md:order-3">
    <h2 className="text-3xl">
     <button
      className={`${active.id === 0 ? "opacity-100" : "opacity-50 hover:opacity-100 focus:opacity-100"}`}
      onClick={(e) => {
       setActive(projects[0]);
       const ul = document.getElementsByTagName("ul")?.item(0);
       if (ul) {
        ul.style.backgroundSize = "1px 0px";
       }
      }}
     >
      About
     </button>
     {name && <span> / {name}</span>}
    </h2>
    <div className="text-xl">
     <div>
      {description.split("\n").map((description, i) => {
       return (
        <Fragment key={i}>
         {(i + 1) % 2 == 0 && <br />}
         <p>{description}</p>
        </Fragment>
       );
      })}
     </div>
     <div className="flex flex-wrap justify-end gap-2 mt-4">
      {live && (
       <a href={live} target="_blank" rel="noreferrer noopener" className="btn-primary">
        View Site
       </a>
      )}
      {github && (
       <a href={github} target="_blank" rel="noreferrer noopener" className="btn-primary">
        View Code
       </a>
      )}
     </div>
    </div>
   </div>
  </>
 );
};

export default About;
