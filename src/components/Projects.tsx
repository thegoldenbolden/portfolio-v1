import styles from "../styles/Projects.module.scss";
import Project from "./Project";

export type P = {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  img?: string;
};

const Projects = () => {
  const projects: P[] = [
    {
      name: "PokéTCG",
      description: "Find prices of any Pokémon card",
      live: "https://poketcgg.netlify.app",
      img: "pokebinder.png",
      tags: ["NextJS", "ReactJS", "Netlify"],
    },
    {
      name: "Pokédex",
      description: "Find all 898 Pokémon using this Pokédex. 🔎",
      repo: "https://github.com/thegoldenbolden/pokedex",
      live: "https://thegoldenbolden.github.io/pokedex",
      img: "pokedex.png",
      tags: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Trivia",
      description: "Test your brain with this trivia game. 🧠",
      repo: "https://github.com/thegoldenbolden/trivia",
      live: "https://thegoldenbolden.github.io/trivia/",
      img: "trivia.png",
      tags: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Portfolio",
      description: "The website you're currently on 😀",
      repo: "https://github.com/thegoldenbolden/portfolio",
      live: "https://jacobbolden.com",
      img: "portfolio_v1.png",
      tags: ["NextJS", "ReactJS", "Netlify", "Typescript", "Sass"],
    },
    {
      name: "Pasta King",
      description: "A multi-purpose discord bot",
      repo: "https://github.com/thegoldenbolden/pastaking",
      img: "pastaking.png",
      tags: ["Typescript"],
    },
  ];

  return (
    <div id="projects" className={styles.projects}>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;
