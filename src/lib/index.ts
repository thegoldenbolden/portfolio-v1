import { Project } from "../types";

export const projects: Project[] = [
 {
  id: 0,
  name: "",
  description:
   "Hi, I'm a self-taught fullstack developer with a focus on building web applications using a mobile-first approach.\n" +
   "I graduated from University of Memphis with a bachelors in health science but eventually decided to stay true to my younger self and pursue a career in graphic design and web development. " +
   "Other than coding, I enjoy learning new languages, playing basketball and video games, and rewatching New Girl and Community.\n\n" +
   "I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. 😀",
 },
 {
  id: 1,
  name: "PokéBinder",
  site: "https://pokebinder.vercel.app",
  github: "https://github.com/thegoldenbolden/pokebinder",
  description:
   "A web application for users to search for Pokémon cards and find places to buy or sell them.\nThis site was built using Next, Typescript and Sass.",
 },
 {
  id: 2,
  name: "Socialite",
  github: "https://github.com/thegoldenbolden/chatroom",
  description:
   "An app - built with Next, Socket.IO, Tailwind and Sass - where users can join rooms and talk to one another.\nCurrently, there is no live version.",
 },
 {
  id: 3,
  name: "Noodle",
  site: "https://noodlebot.netlify.app",
  description:
   "An app utilizing Next, Prisma, Postgres, and Sass that lets users choose who would win in a hypothetical fight.\nThe source code is currently private.",
 },
 {
  id: 4,
  name: "Noodleats",
  site: "https://thegoldenbolden.github.io/noodleats/",
  github: "https://github.com/thegoldenbolden/noodleats",
  description:
   "A landing page for a DoorDash / UberEats style delivery company that delivers dishes involving noodles.\nThis project uses Next, Sass, and Tailwind.",
 },
 {
  id: 5,
  name: "Trivia Buddy",
  site: "https://thegoldenbolden.github.io/triviabuddy",
  github: "https://github.com/thegoldenbolden/triviabuddy",
  description:
   "Test your knowledge with this as you are given various questions from easy to hard, science to tv shows using OpenTDB's API.",
 },
];
