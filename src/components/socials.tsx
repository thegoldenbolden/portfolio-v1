import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Socials = () => {
 return (
  <nav>
   <ul aria-label="social-links" id="socials" className="flex gap-md column center-align">
    <li>
     <a href="mailto: jlbolden.pro@gmail.com">
      <FiMail size={24} />
     </a>
    </li>
    <li>
     <a href="https://twitter.com/thagoldenbolden">
      <FiTwitter size={24} />
     </a>
    </li>
    <li>
     <a href="https://github.com/thegoldenbolden">
      <FiGithub size={24} />
     </a>
    </li>
    <li>
     <a href="https://www.linkedin.com/in/jbolden9">
      <FiLinkedin size={24} />
     </a>
    </li>
   </ul>
  </nav>
 );
};

export default Socials;
