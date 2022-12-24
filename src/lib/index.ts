import { Project } from "../types";

export default [
 {
  id: 0,
  name: "",
  description:
   "Hi, I'm a self-taught fullstack developer with a focus on creating beautiful and user-friendly web applications that prioritize the mobile experience.\n" +
   "I have a bachelor's degree in health studies from the University of Memphis, but I decided to stay true to my younger self and pursue a career in the world of design and development. " +
   "Other than coding, I love learning new languages, playing basketball, and rewatching my favorite TV Shows such as New Girl and Community.\n\n" +
   "I am always looking for new opportunities to use my skills and expand my knowledge in the tech industry.\n" +
   "If you have a position that could benefit from my experience and dedication, I would love to hear from you and see how we can work together.\n" +
   "I look forward to hearing from you! 😀",
 },
 {
  id: 1,
  name: "PokéBinder",
  live: "https://pokebinder.vercel.app",
  github: "https://github.com/thegoldenbolden/pokebinder",
  description:
   "PokéBinder is a web application designed to be a one-stop shop for all things related to Pokémon cards. " +
   "Whether you're a seasoned collector or just starting out, you'll find everything you need here to discover, buy, and sell Pokémon cards.\n\n" +
   "With PokéBinder, you can easily search for specific Pokémon cards using a variety of filters, such as card type, Pokémon type, and expansion set. " +
   "You'll also be able to see detailed information about each card, including its rarity, value, and artwork.\n\n" +
   "The site is built using Next, React, and TypeScript. Finally, I used Sass to help write cleaner, more organized styles for the application.",
 },
 {
  id: 2,
  name: "Socialite",
  github: "https://github.com/thegoldenbolden/chatroom",
  description:
   "Socialite is designed to provide a fast and convenient way for people to communicate with each other in real-time. It offers a simple and straightforward way to send text messages to other users. You can join public chat rooms to meet new people and discuss common interests. " +
   "The frontend is built with Next and MUI, while the backend is built using Express and Socket.IO.\n\n" +
   "Currently, there is no live version of Socialite available. However, I am actively working on developing and improving the app, and hope to have a live version available soon.",
 },
 {
  id: 3,
  name: "Versus Zero",
  live: "https://versuszero.vercel.app",
  description:
   "I created Versus Zero as a way for us to gain experience with CRUD (create, read, update, delete) operations. I built the app using Next.js, React, and Prisma. I also used Postgres to store the data for our app.\n\n" +
   "In terms of styling, I used Tailwind to design and layout the app in a visually appealing and responsive way. I was also inspired by the design of Instagram, and tried to incorporate some of the same elements and features in the app.\n\n" +
   "Versus Zero lets users create matchups between two things (for exmaple, 'Spotify vs. Apple Music'), and then vote which option they believe to be better. It's a simple but fun way to engage with other users and share opinions.",
 },
 {
  id: 4,
  name: "Noodleats",
  live: "https://thegoldenbolden.github.io/noodleats/",
  github: "https://github.com/thegoldenbolden/noodleats",
  description:
   "A landing page for a DoorDash / UberEats style delivery company that delivers dishes involving noodles.\nThis project uses Next, Sass, and Tailwind.",
 },
 {
  id: 5,
  name: "Trivia Buddy",
  live: "https://thegoldenbolden.github.io/triviabuddy",
  github: "https://github.com/thegoldenbolden/triviabuddy",
  description:
   "Trivia Buddy is game that allows users to test their knowledge over a wide range of topics. The questions are pulled from OpenTDB's API, which is a public API that provides access to a vast database of trivia questions.\n" +
   "The app is designed to be easy to use, with a simple and intuitive interface that allows users to start playing right away. The game is endless and keeps track of correct answers and questions skipped.\n\n" +
   "The main goal of this app is to provide users with a fun and engaging way to test their knowledge and also pass the time.",
 },
] as Project[];
