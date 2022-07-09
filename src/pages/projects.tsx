import { Fragment } from "react";

import projects from "../projects";
import Project from "../components/Projects/project";

const Projects = () => {
 return (
  <div id="all-p" className="flex gap-md center center-align">
   <h1 className="ta" style={{ marginTop: "1em", justifySelf: "center", width: "100%" }}>
    All Projects
   </h1>
   {projects.map((p) => (
    <Fragment key={p.name}>
     <Project project={p} />
    </Fragment>
   ))}
  </div>
 );
};

export default Projects;
