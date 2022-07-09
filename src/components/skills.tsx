import {
 SiHtml5,
 SiCss3,
 SiSass,
 SiNodedotjs,
 SiTypescript,
 SiJavascript,
 SiReact,
 SiNextdotjs,
 SiGit,
 SiGithub,
 SiVisualstudio,
 SiHeroku,
 SiPostgresql,
 SiNetlify,
 SiVercel,
 SiFigma,
} from "react-icons/si";

const Skills = () => {
 return (
  <section id="skills">
   <h1>{"Skills & Tools"}</h1>
   <div className="flex center-align padding-md">
    <ul className="flex center-align center">
     <li className="flex center-align column padding-md">
      <SiHtml5 size={48} />
      <span>HTML5</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiCss3 size={48} />
      <span>CSS3</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiSass size={48} />
      <span>Sass</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiNodedotjs size={48} />
      <span>Node.js</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiTypescript size={48} />
      <span>Typescript</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiJavascript size={48} />
      <span>Javascript</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiReact size={48} />
      <span>React</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiNextdotjs size={48} />
      <span>Next</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiGit size={48} />
      <span>Git</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiGithub size={48} />
      <span>Github</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiVisualstudio size={48} />
      <span>VS Code</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiPostgresql size={48} />
      <span>Postgres</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiHeroku size={48} />
      <span>Heroku</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiNetlify size={48} />
      <span>Netlify</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiVercel size={48} />
      <span>Vercel</span>
     </li>
     <li className="flex center-align column padding-md">
      <SiFigma size={48} />
      <span>Figma</span>
     </li>
    </ul>
   </div>
  </section>
 );
};

export default Skills;
