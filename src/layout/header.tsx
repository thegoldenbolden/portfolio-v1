import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { MdMailOutline, MdOutlineWbSunny } from "react-icons/md";
import { BsGrid, BsHouse, BsFilePdf } from "react-icons/bs";
import CustomImage from "../components/Image";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
 const { toggle } = useContext(ThemeContext);
 const router = useRouter();
 const isActive = (route: string) => router.route === route;

 return (
  <header>
   <nav aria-label="navigation links">
    <div>
     <MdOutlineWbSunny onClick={toggle} />
     <Link href="/">
      <a>jacob</a>
     </Link>
    </div>
    <div id="links">
     <Link href="/">
      <a {...(isActive("/") && { className: "active-link" })}>home</a>
     </Link>
     <Link href="/projects">
      <a {...(isActive("/projects") && { className: "active-link" })}>projects</a>
     </Link>
     <Link href="/resume.pdf">
      <a>resume</a>
     </Link>
     <Link href="mailto: jlbolden.pro@gmail.com">
      <a>contact</a>
     </Link>
    </div>
   </nav>
   <MobileIcons toggle={toggle} isActive={isActive} />
  </header>
 );
};

function MobileIcons({ isActive, toggle }) {
 return (
  <nav aria-label="navigation links" id="menu-icons">
   <Link href="/">
    <a {...(isActive("/") && { className: "active-link" })}>
     <BsHouse />
    </a>
   </Link>
   <Link href="/projects">
    <a {...(isActive("/projects") && { className: "active-link" })}>
     <BsGrid />
    </a>
   </Link>
   <Link href="/resume.pdf">
    <a {...(isActive("/resume.pdf") && { className: "active-link" })}>
     <BsFilePdf />
    </a>
   </Link>
   <Link href="mailto:jlbolden.pro@gmail.com">
    <a>
     <MdMailOutline />
    </a>
   </Link>
   <MdOutlineWbSunny onClick={toggle} />
  </nav>
 );
}

export default Header;
