import Link from "next/link";
import { Fragment } from "react";

import Project from "./project";
import projects from "../../lib";

const Projects = () => {
 return (
  <section id="featured">
   <h1 className="heading">Featured Projects</h1>
   <div className="projects">
    {projects.slice(0, 3).map((project, i) => {
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
