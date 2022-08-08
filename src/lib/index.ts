export type Project = {
 name: string;
 description: string;
 tags: string[];
 repo?: string;
 live?: string;
 image?: string;
};

export default [
 {
  name: "PokéBinder",
  description: "Search for prices for any Pokémon card",
  live: "https://pokebinder.vercel.app",
  repo: "https://github.com/thegoldenbolden/pokebinder",
  repo: "https://github.com/thegoldenbolden/pokebinder",
  tags: ["Next", "Typescript", "Sass"],
  image: "pokebinder",
 },
 {
  name: "Todos Buddy",
  description: "A basic todo app",
  live: "https://todosbuddy.netlify.com",
  repo: "https://github.com/thegoldenbolden/todo-app",
  tags: ["Next", "Typescript", "Sass"],
  image: "todo",
 },
 {
  name: "Portfolio",
  description: "The website you are currently on.",
  repo: "https://github.com/thegoldenbolden/portfolio",
  live: "https://jacobbolden.com",
  tags: ["Next", "Typescript", "Sass"],
  image: "portfolio_v2",
 },

 {
  name: "Portfolio V1",
  description: "The 1st version of my portfolio.",
  repo: "https://github.com/thegoldenbolden/portfolio/tree/v1",
  tags: ["Next", "Typescript", "CSS"],
  image: "portfolio_v1",
 },

 {
  name: "Trivia Buddy",
  description: "A trivia game using OpenTDB api.",
  tags: ["Javascript", "HTML5", "CSS"],
  image: "trivia",
  repo: "https://github.com/thegoldenbolden/trivia",
  live: "https://thegoldenbolden.github.io/trivia",
 },

 {
  description: "A pokedex using PokéAPI.",
  name: "Pokédex",
  tags: ["Javascript", "HTML5", "CSS"],
  repo: "https://github.com/thegoldenbolden/pokedex",
  live: "https://thegoldenbolden.github.io/pokedex",
  image: "pokedex",
 },
] as Project[];
