import { useContext } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMusic } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const Socials = () => {
 const { toggle } = useContext(ThemeContext);

 return (
  <nav id="socials" aria-label="social-links">
   <a aria-label="contact" target="_blank" href="mailto: jlbolden.pro@gmail.com">
    <FiMail size={24} />
   </a>
   <a aria-label="twitter" target="_blank" href="https://twitter.com/thagoldenbolden">
    <FiTwitter size={24} />
   </a>
   <a aria-label="github" target="_blank" href="https://github.com/thegoldenbolden">
    <FiGithub size={24} />
   </a>
   <a aria-label="linkedin" target="_blank" href="https://www.linkedin.com/in/jbolden9">
    <FiLinkedin size={24} />
   </a>
   <a aria-label="spotify" target="_blank" href="https://open.spotify.com/user/thegoldenbolden">
    <FiMusic size={24} />
   </a>
   <MdOutlineWbSunny aria-label="dark mode" className="theme icon" size={24} onClick={toggle} />
  </nav>
 );
};

export default Socials;
