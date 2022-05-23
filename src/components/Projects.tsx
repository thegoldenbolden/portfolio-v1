import styles from "../styles/Projects.module.scss";
import Project from "./Project";

export type P = {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  img?: {
    src: string;
    alt: string;
  };
};

const Projects = () => {
  const projects: P[] = [
    {
      name: "PokéTCG",
      description: "Find prices of any Pokémon card",
      live: "https://poketcgg.netlify.app",
      tags: ["NextJS", "ReactJS", "Netlify"],
      img: {
        src: "pokebinder.png",
        alt: "a screenshot of the poketcg website",
      },
    },
    {
      name: "Pokédex",
      description: "Find all 898 Pokémon using this Pokédex. 🔎",
      repo: "https://github.com/thegoldenbolden/pokedex",
      live: "https://thegoldenbolden.github.io/pokedex",
      tags: ["HTML", "CSS", "Javascript"],
      img: {
        src: "pokedex.png",
        alt: "a screenshot of the pokedex site",
      },
    },
    {
      name: "Trivia",
      description: "Test your brain with this trivia game. 🧠",
      repo: "https://github.com/thegoldenbolden/trivia",
      live: "https://thegoldenbolden.github.io/trivia/",
      tags: ["HTML", "CSS", "Javascript"],
      img: {
        src: "pokedex.png",
        alt: "a screenshot of the trivia site",
      },
    },
    {
      name: "Portfolio",
      description: "The website you're currently on 😀",
      repo: "https://github.com/thegoldenbolden/portfolio",
      live: "https://jacobbolden.com",
      tags: ["NextJS", "ReactJS", "Netlify", "Typescript", "Sass"],
      img: {
        src: "pokedex.png",
        alt: "a screenshot of this site",
      },
    },
    {
      name: "Pasta King",
      description: "A multi-purpose discord bot",
      repo: "https://github.com/thegoldenbolden/pastaking",
      tags: ["Typescript"],
      img: {
        src: "pastaking.png",
        alt: "the bot showing the color of #faca95",
      },
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
