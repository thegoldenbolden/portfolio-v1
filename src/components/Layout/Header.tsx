import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { BsGrid, BsHouse, BsFilePdf } from "react-icons/bs";
import Image from "next/image";

const Header = () => {
 const [active, setActive] = useState(0);
 const router = useRouter();

 useEffect(() => {
  switch (router.route) {
   default:
   case "/":
    setActive(0);
    break;
   case "/projects":
    setActive(1);
  }
 }, [router?.route]);

 return (
  <header>
   <nav>
    <Link href="/">
     <a id="logo" style={{ textDecoration: "none", position: "relative", height: "64px", width: "64px" }}>
      <Image src="/projects/logos/portfolio_v2.png" layout="fill" objectFit="cover" />
     </a>
    </Link>
    <div className="flex gap-md center-align">
     <Link href="/">
      <a {...(active == 0 && { className: "active-link" })}>home</a>
     </Link>
     <Link href="/projects">
      <a {...(active == 1 && { className: "active-link" })}>projects</a>
     </Link>
     <Link href="/resume.pdf">
      <a onClick={() => setActive(2)} {...(active == 2 && { className: "active-link" })}>
       resume
      </a>
     </Link>
     <a
      onClick={() => setActive(3)}
      href="mailto: jlbolden.pro@gmail.com"
      {...(active == 3 && { className: "active-link" })}
     >
      contact
     </a>
    </div>
   </nav>
   <nav id="menu-icons">
    <Link href="/">
     <a id="logo">JB</a>
    </Link>
    <div className="flex gap-md center-align">
     <Link href="/">
      <a {...(active == 0 && { className: "active-link no-border" })}>
       <BsHouse />
      </a>
     </Link>
     <Link href="/projects">
      <a {...(active == 1 && { className: "active-link no-border" })}>
       <BsGrid />
      </a>
     </Link>
     <Link href="/resume.pdf">
      <a onClick={() => setActive(2)} {...(active == 2 && { className: "active-link no-border" })}>
       <BsFilePdf />
      </a>
     </Link>
     <a
      onClick={() => setActive(3)}
      {...(active == 3 && { className: "active-link no-border" })}
      href="mailto: jlbolden.pro@gmail.com"
     >
      <MdMailOutline />
     </a>
    </div>
   </nav>
  </header>
 );
};

export default Header;
