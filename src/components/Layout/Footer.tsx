const Footer = () => {
 return (
  <footer className="flex space center-align">
   <nav aria-label="social-links">
    <ul aria-label="social-links" className="flex gap-md center-align">
     <li>
      <a href="mailto: jlbolden.pro@gmail.com">Contact Me</a>
     </li>
     <li>
      <a href="https://twitter.com/thagoldenbolden">Twitter</a>
     </li>
     <li>
      <a href="https://github.com/thegoldenbolden">Github</a>
     </li>
     <li>
      <a href="https://www.linkedin.com/in/jbolden9">LinkedIn</a>
     </li>
    </ul>
   </nav>
   <p>{`© 2022 | Designed & coded by Jacob Bolden`}</p>
  </footer>
 );
};

export default Footer;
