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
   <a title="LinkedIn" href="https://linkedin.com/in/jbolden9" target="_blank" rel="noreferrer noopener">
    <LinkedIn className="w-12 h-12" />
   </a>
   <a title="Twitter" href="https://twitter.com/thagoldenbolden" target="_blank" rel="noreferrer noopener">
    <Twitter className="w-12 h-12" />
   </a>
   <a title="Github" href="https://github.com/thegoldenbolden" target="_blank" rel="noreferrer noopener">
    <Github className="w-12 h-12 hover:text-light focus:text-light" />
   </a>
   <a title="Spotify" href="https://open.spotify.com/user/thegoldenbolden" target="_blank" rel="noreferrer noopener">
    <Music className="w-12 h-12" />
   </a>
   <a title="Contact" href="mailto:jlbolden9@gmail.com" target="_blank" rel="noreferrer noopener">
    <Mail className="w-12 h-12" />
   </a>
  </>
 );
};

export default Socials;
