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
 SiHeroku,
 SiPostgresql,
 SiNetlify,
 SiVercel,
 SiFigma,
 SiPrisma,
} from "react-icons/si";

const Skills = () => {
 return (
  <section id="skills">
   <h1 className="heading">{"Skills & Tools"}</h1>
   <ul>
    <li>
     <SiHtml5 />
     <span>HTML5</span>
    </li>
    <li>
     <SiCss3 />
     <span>CSS3</span>
    </li>
    <li>
     <SiSass />
     <span>Sass</span>
    </li>
    <li>
     <SiNodedotjs />
     <span>Node.js</span>
    </li>
    <li>
     <SiTypescript />
     <span>Typescript</span>
    </li>
    <li>
     <SiJavascript />
     <span>Javascript</span>
    </li>
    <li>
     <SiReact />
     <span>React</span>
    </li>
    <li>
     <SiNextdotjs />
     <span>Next</span>
    </li>
    <li>
     <SiGit />
     <span>Git</span>
    </li>
    <li>
     <SiGithub />
     <span>Github</span>
    </li>
    <li>
     <SiPrisma />
     <span>Prisma</span>
    </li>
    <li>
     <SiPostgresql />
     <span>Postgres</span>
    </li>
    <li>
     <SiHeroku />
     <span>Heroku</span>
    </li>
    <li>
     <SiNetlify />
     <span>Netlify</span>
    </li>
    <li>
     <SiVercel />
     <span>Vercel</span>
    </li>
    <li>
     <SiFigma />
     <span>Figma</span>
    </li>
   </ul>
  </section>
 );
};

export default Skills;
