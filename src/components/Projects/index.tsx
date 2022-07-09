import Link from "next/link";
import { Fragment } from "react";

import Project from "../Projects/project";
import projects from "../../projects";

const Projects = () => {
 return (
  <section id="featured" className="flex column gap-md center-align">
   <h1 style={{ alignSelf: "flex-start" }}>Featured Projects</h1>
   <div id="projects" className="flex center-align center gap-md">
    {projects.map((project) => {
     if (!project.banner) return;
     return (
      <Fragment key={project.name}>
       <Project project={project} />
      </Fragment>
     );
    })}
   </div>
   <Link href="/projects">
    <a id="all">View All Projects</a>
   </Link>
  </section>
 );
};

export default Projects;
