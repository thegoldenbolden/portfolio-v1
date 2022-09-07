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
  description: "Search for prices for any Pokémon card using an api.",
  live: "https://pokebinder.vercel.app",
  repo: "https://github.com/thegoldenbolden/pokebinder",
  tags: ["Next", "Typescript", "Sass"],
  image: "pokebinder.png",
 },
 {
  name: "Noodle",
  description: "A web app that uses social logins to create and vote on hypothetical matchups and more.",
  live: "https://noodlebot.netlify.app",
  tags: ["Next", "Prisma", "Postgres"],
  image: "noodle.png",
 },
 {
  name: "Todos Buddy",
  description: "A todo app to keep track of your daily needs.",
  live: "https://todosbuddy.netlify.com",
  repo: "https://github.com/thegoldenbolden/todo-app",
  tags: ["Next", "Typescript", "Sass"],
  image: "todos.png",
 },
 {
  name: "Trivia Buddy",
  description: "A trivia game using OpenTDB api.",
  tags: ["Javascript", "HTML5", "CSS"],
  image: "trivia.png",
  repo: "https://github.com/thegoldenbolden/trivia",
  live: "https://thegoldenbolden.github.io/trivia",
 },
] as Project[];
