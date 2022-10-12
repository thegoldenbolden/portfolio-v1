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
   <div className={"flex flex-col items-center justify-center"}>
    <a
     href="https://linkedin.com/in/jbolden9"
     target="_blank"
     rel="noreferrer noopener"
     className={className + "icon-1 lg:p-1"}
    >
     <LinkedIn className="lg:p-1" />
    </a>
    <span className="text-xs sm:text-base">LinkedIn</span>
   </div>
   <div className="flex flex-col items-center justify-center">
    <a
     href="https://twitter.com/thagoldenbolden"
     target="_blank"
     rel="noreferrer noopener"
     className={className + "icon-2"}
    >
     <Twitter className="lg:p-1" />
    </a>
    <span className="text-xs sm:text-base">Twitter</span>
   </div>
   <div className="flex flex-col items-center justify-center">
    <a
     href="https://github.com/thegoldenbolden"
     target="_blank"
     rel="noreferrer noopener"
     className={className + "icon-3"}
    >
     <Github className="lg:p-1" />
    </a>
    <span className="text-xs sm:text-base">Github</span>
   </div>
   <div className="flex flex-col items-center justify-center">
    <a
     href="https://open.spotify.com/user/thegoldenbolden"
     target="_blank"
     rel="noreferrer noopener"
     className={className + "icon-4"}
    >
     <Music className="lg:p-1" />
    </a>
    <span className="text-xs sm:text-base">Spotify</span>
   </div>
   <div className="flex flex-col items-center justify-center">
    <a href="mailto:jlbolden9@gmail.com" target="_blank" rel="noreferrer noopener" className={className + "icon-5"}>
     <Mail className="lg:p-1" />
    </a>
    <span className="text-xs sm:text-base">Contact</span>
   </div>
  </div>
 );
};

export default Socials;
