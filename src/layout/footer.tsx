import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import Socials from "../components/socials";

const Footer = () => {
 return (
  <footer>
   <Socials />
   <p>{`© 2022 | Designed & coded by Jacob Bolden`}</p>
  </footer>
 );
};

export default Footer;
