import { Fragment, useContext, useEffect } from "react";

import projects from "../lib";
import Project from "../components/projects/project";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
 const { theme } = useContext(ThemeContext);

 useEffect(() => {
  if (document) {
   const body = document.body;
   body.classList.add(theme);
   body.classList.remove(theme == "dark" ? "light" : "dark");
  }
 }, [theme]);

 return (
  <section id="featured">
   <h1 className="heading">All Projects</h1>
   <div className="projects">
    {projects.map((p) => (
     <Fragment key={p.name}>
      <Project project={p} />
     </Fragment>
    ))}
   </div>
  </section>
 );
};

export default Projects;
