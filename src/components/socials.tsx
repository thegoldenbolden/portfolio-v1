import {
 TbBrandLinkedin as LinkedIn,
 TbBrandSpotify as Music,
 TbBrandGithub as Github,
 TbBrandTwitter as Twitter,
 TbBrandGmail as Mail,
 TbExternalLink,
} from "react-icons/tb";

const Socials = () => {
 const className = "p-1 rounded ";
 return (
  <div className="flex flex-wrap items-center justify-between flex-grow gap-2 text-4xl rounded text-complement sm:text-5xl md:text-6xl">
   <a
    title="LinkedIn"
    href="https://linkedin.com/in/jbolden9"
    target="_blank"
    rel="noreferrer noopener"
    className={className + "icon-1 lg:p-1"}
   >
    <LinkedIn className="lg:p-1" />
   </a>
   <a
    title="Twitter"
    href="https://twitter.com/thagoldenbolden"
    target="_blank"
    rel="noreferrer noopener"
    className={className + "icon-2"}
   >
    <Twitter className="lg:p-1" />
   </a>
   <a
    title="Github"
    href="https://github.com/thegoldenbolden"
    target="_blank"
    rel="noreferrer noopener"
    className={className + "icon-3"}
   >
    <Github className="lg:p-1" />
   </a>
   <a
    title="Spotify"
    href="https://open.spotify.com/user/thegoldenbolden"
    target="_blank"
    rel="noreferrer noopener"
    className={className + "icon-4"}
   >
    <Music className="lg:p-1" />
   </a>
   <a
    title="Contact"
    href="mailto:jlbolden9@gmail.com"
    target="_blank"
    rel="noreferrer noopener"
    className={className + "icon-5"}
   >
    <Mail className="lg:p-1" />
   </a>
  </div>
 );
};

export default Socials;
