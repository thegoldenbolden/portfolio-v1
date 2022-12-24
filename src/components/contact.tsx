import { useState, FormEventHandler } from "react";
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";
import { InstagramSquare, LinkedInSquare, TwitterSquare } from "./icons";

export default function Contact() {
 const [name, setName] = useState<string>("");
 const [email, setEmail] = useState<string>("");
 const [subject, setSubject] = useState<string>("");
 const [message, setMessage] = useState<string>("");
 const [error, setError] = useState<string | null>("");
 const [submitting, setSubmitting] = useState<boolean>(false);
 const [response, setResponse] = useState<string>("");

 const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();

  setSubmitting(true);
  const response = await fetch("/api/contact", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ email, name, subject, message }),
  }).catch((err) => err);

  const res = await response.json();

  if (!res.ok) {
   setError(res.message);
  } else {
   setResponse(res.message);
  }
  setSubmitting(false);
 };

 const handleChange = (value: string, set: React.Dispatch<React.SetStateAction<string>>) => {
  error !== null && setError(null);
  set(value);
 };

 return (
  <form className="z-10 max-w-full sm:min-w-[680px] flex flex-col gap-4 p-4" onSubmit={handleSubmit} method="POST">
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
    </div>
   </div>
   {error && <span className="text-red-500">{error}</span>}
   {response && <span className="text-green-500">{response}</span>}
   <div className="flex flex-wrap gap-2">
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
     placeholder="Enter your message"
     onChange={(e) => handleChange(e.target.value, setMessage)}
    />
   </div>
   <button
    className="send border-solid border-2 border-transparent hover:text-dark focus:text-dark hover:border-accent focus:border-accent transition-colors hover:bg-transparent focus:bg-transparent self-end w-full sm:w-[200px] max-w-full flex items-center justify-center px-8 py-2 bg-teal-500 text-light"
    disabled={submitting}
    type="submit"
   >
    {submitting ? <svg className="spinner" viewBox="25 25 50 50"></svg> : "Send"}
   </button>
  </form>
 );
}
