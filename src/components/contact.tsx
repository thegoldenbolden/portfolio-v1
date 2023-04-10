import Link from "next/link";
import { useState } from "react";
import { InstagramSquare, LinkedInSquare, TwitterSquare, Pdf } from "./icons";

export default function Contact() {
 const [name, setName] = useState<string>("");
 const [email, setEmail] = useState<string>("");
 const [message, setMessage] = useState<string>("");
 const [subject, setSubject] = useState<string>("");

 const handleChange = (value: string, set: React.Dispatch<React.SetStateAction<string>>) => {
  set(value);
 };

 return (
  <div className="z-10 max-w-full sm:min-w-[680px] flex flex-col gap-4 p-4">
   <div className="flex flex-col gap-2">
    <h2 className="text-3xl font-bold text-center">Get in touch with me</h2>
    <div className="flex flex-wrap gap-2 text-sm font-bold justify-evenly">
     <a
      href="https://twitter.com/thagoldenbolden"
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-2 opacity-75 hover:opacity-100 focus:opacity-100"
     >
      <TwitterSquare className="opacity-100 w-7 h-7" />
      Twitter
     </a>
     <a
      href="https://linkedin.com/in/jbolden9"
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-2 opacity-75 hover:opacity-100 focus:opacity-100"
     >
      <LinkedInSquare className="opacity-100 w-7 h-7" />
      LinkedIn
     </a>
     <a
      href="https://instagram.com/thegoldenbolden"
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-2 opacity-75 hover:opacity-100 focus:opacity-100"
     >
      <InstagramSquare className="opacity-100 w-7 h-7" />
      Instagram
     </a>
     <Link
      href="resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-2 opacity-75 hover:opacity-100 focus:opacity-100"
     >
      <Pdf className="opacity-100 w-7 h-7" />
      Resume
     </Link>
    </div>
   </div>
   <div className="flex flex-wrap gap-4">
    <div className="grow text-input">
     <label htmlFor="name">Name</label>
     <input
      id="name"
      name="name"
      required={true}
      type="name"
      value={name}
      placeholder="Name"
      onChange={(e) => handleChange(e.target.value, setName)}
     />
    </div>
    <div className="grow text-input">
     <label htmlFor="email">Email</label>
     <input
      id="email"
      name="email"
      required={true}
      type="email"
      value={email}
      placeholder="Email"
      onChange={(e) => handleChange(e.target.value, setEmail)}
     />
    </div>
   </div>
   <div className="text-input">
    <label htmlFor="subject">Subject</label>
    <input
     id="subject"
     name="subject"
     type="text"
     value={subject}
     placeholder="Subject"
     onChange={(e) => handleChange(e.target.value, setSubject)}
    />
   </div>
   <div className="text-input">
    <label htmlFor="message">Message</label>
    <textarea
     id="message"
     name="message"
     className="min-h-[100px]"
     required={true}
     value={message}
     placeholder="Message"
     onChange={(e) => handleChange(e.target.value, setMessage)}
    />
   </div>
   <p className="text-base">
    Visit{" "}
    <Link className="text-orange-600 hover:underline focus:underline" href="https://jacobbolden.com/contact">
     current version
    </Link>{" "}
    of my portfolio to send a message
   </p>
  </div>
 );
}
