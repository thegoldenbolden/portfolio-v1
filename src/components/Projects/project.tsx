import Image from "next/image";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

import { Project } from "../../projects";
import CustomImage from "../Image";

const Project = ({ project }: { project: Project }) => {
 return (
  <div className="flex column card">
   {project.banner && (
    <span
     {...(project.banner.color && {
      style: {
       color: project.banner.color[0],
       background: project.banner.color[1],
       outlineColor: project.banner.color[1],
      },
     })}
     className="banner"
    >
     {project.banner.name}
    </span>
   )}
   {project.image && (
    <div className="site-wrapper">
     <CustomImage
      src={`/projects/preview/${project.image}.webp`}
      alt={`a screenshot of the site "${project.name}"`}
      layout="fill"
      objectFit="cover"
     />
    </div>
   )}
   <div className="details">
    {project.image && (
     <div className="lg-wrapper">
      <CustomImage
       src={`/projects/logos/${project.image}.png`}
       alt={`the logo for the site "${project.name}"`}
       layout="fill"
       objectFit="cover"
      />
     </div>
    )}
    <div className="content">
     <div id="title" className="flex center-align between">
      <h2>{project.name}</h2>
      <div className="flex gap-sm bl-align">
       {project.live && (
        <a href={project.live} rel="noreferrer nopener">
         <VscLinkExternal size={24} />
        </a>
       )}
       {project.repo && (
        <a href={project.repo} rel="noreferrer nopener">
         <VscGithubAlt size={24} />
        </a>
       )}
      </div>
     </div>
     <p className="flex">{project.description}</p>
     <div id="tags" className="flex center-align gap-sm">
      {project.tags.map((tag: string) => {
       return (
        <span id="tag" key={tag}>
         {tag}
        </span>
       );
      })}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Project;
