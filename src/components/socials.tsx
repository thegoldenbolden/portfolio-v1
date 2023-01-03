import {
 TbBrandLinkedin as LinkedIn,
 TbBrandSpotify as Music,
 TbBrandGithub as Github,
 TbBrandTwitter as Twitter,
 TbBrandGmail as Mail,
} from "react-icons/tb";

const Socials = () => {
 return (
  <>
   <a
    className="border-b-4 border-transparent border-solid transition-border hover:border-b-linkedin focus:border-b-linkedin"
    title="LinkedIn"
    href="https://linkedin.com/in/jbolden9"
    target="_blank"
    rel="noreferrer noopener"
   >
    <LinkedIn className="w-12 h-12" />
   </a>
   <a
    className="border-b-4 border-transparent border-solid transition-border hover:border-b-twitter focus:border-b-twitter"
    title="Twitter"
    href="https://twitter.com/thagoldenbolden"
    target="_blank"
    rel="noreferrer noopener"
   >
    <Twitter className="w-12 h-12" />
   </a>
   <a
    className="border-b-4 border-transparent border-solid transition-border hover:border-b-github focus:border-b-github dark:hover:border-b-light dark:focus:border-b-light"
    title="Github"
    href="https://github.com/thegoldenbolden"
    target="_blank"
    rel="noreferrer noopener"
   >
    <Github className="w-12 h-12" />
   </a>
   <a
    className="border-b-4 border-transparent border-solid transition-border hover:border-b-spotify focus:border-b-spotify"
    title="Spotify"
    href="https://open.spotify.com/user/thegoldenbolden"
    target="_blank"
    rel="noreferrer noopener"
   >
    <Music className="w-12 h-12" />
   </a>
   <a
    className="border-b-4 border-transparent border-solid transition-border hover:border-b-gmail focus:border-b-gmail"
    title="Contact"
    href="mailto:jlbolden9@gmail.com"
    target="_blank"
    rel="noreferrer noopener"
   >
    <Mail className="w-12 h-12" />
   </a>
  </>
 );
};

export default Socials;
