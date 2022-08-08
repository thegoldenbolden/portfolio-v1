import Image from "next/image";
import { VscGithubAlt, VscLinkExternal, VscFolder } from "react-icons/vsc";

import { Project } from "../../lib";
import CustomImage from "../Image";

const Project = ({ project }: { project: Project }) => {
 return (
  <div className="project">
   <div className="project-head">
    <div>
     <VscFolder size={24} />
     <h2>{project.name}</h2>
    </div>
    <div>
     {project.live && (
      <a href={project.live} aria-label="view site" rel="noreferrer nopener">
       <VscLinkExternal size={24} />
      </a>
     )}
     {project.repo && (
      <a href={project.repo} aria-label="view source code" rel="noreferrer nopener">
       <VscGithubAlt size={24} />
      </a>
     )}
    </div>
   </div>
   <div className="description">
    <p>{project.description}</p>
    {project.image && (
     <CustomImage src={`/projects/${project.image}.webp`} alt={`a screenshot of the site "${project.name}"`} />
    )}
   </div>
   <ul className="tags">
    {project.tags.map((tag: string) => (
     <li key={tag}>{tag}</li>
    ))}
   </ul>
  </div>
 );
};

export default Project;
