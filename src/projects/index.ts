export type Project = {
 name: string;
 description: string;
 tags: string[];
 repo?: string;
 live?: string;
 banner?: {
  name: "featured" | "upcoming";
  color?: string[];
 };
 image?: string;
};

export default [
 {
  name: "PokéBinder",
  description: "Find prices of any Pokémon card",
  live: "https://pokebinder.vercel.app",
  tags: ["Next", "Typescript", "Sass"],
  banner: { name: "featured" },
  image: "pokebinder",
 },
 {
  name: "Portfolio V2",
  description: "The website you are currently on.",
  repo: "https://github.com/thegoldenbolden/portfolio",
  live: "https://jacobbolden.com",
  tags: ["Next", "Typescript", "Sass"],
  banner: { name: "featured" },
  image: "portfolio_v2",
 },
 {
  name: "Noodle",
  description: "A web app for the Noodle discord bot.",
  tags: [],
  banner: {
   name: "upcoming",
   color: ["gray", "black"],
  },
  image: "noodle",
 },
 {
  name: "Portfolio V1",
  description: "The 1st version of my portfolio.",
  repo: "https://github.com/thegoldenbolden/portfolio/tree/v1",
  tags: ["Next", "Typescript"],
  image: "portfolio_v1",
 },
 {
  name: "Trivia",
  description: "A trivia game using OpenTDB api.",
  tags: ["JavaScript", "HTML5", "CSS"],
  image: "trivia",
  repo: "https://github.com/thegoldenbolden/trivia",
  live: "https://thegoldenbolden.github.io/trivia",
 },
 {
  description: "A pokedex using PokéAPI.",
  name: "Pokédex",
  tags: ["JavaScript", "HTML5", "CSS"],
  repo: "https://github.com/thegoldenbolden/pokedex",
  live: "https://thegoldenbolden.github.io/pokedex",
  image: "pokedex",
 },
] as Project[];
