const skills = [
 "Next",
 "React",
 "Javascript",
 "Typescript",
 "Node",
 "HTML5",
 "CSS3",
 "Sass",
 "Tailwind",
 "Figma",
 "Postgres",
 "Prisma",
 "Git",
 "Heroku",
 "Netlify",
 "Vercel",
];

const Skills = () => {
 return (
  <div id="skills" className="flex justify-between py-2 text-sm rounded marquee">
   <div className="flex items-center marquee-inner">
    {[...skills, ...skills, ...skills, ...skills].map((s, i) => {
     return <span key={i}>{s}</span>;
    })}
   </div>
  </div>
 );
};

export default Skills;
