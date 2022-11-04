import { Fragment, FC } from "react";
import { projects } from "../lib";
import { ContentProps } from "../types";

const Content: FC<ContentProps> = ({ content, setContent }) => {
 const { name, description, site, github } = content;
 const hdClassName =
  name == ""
   ? ""
   : "text-dark/25 dark:text-light/25 hover:text-dark dark:hover:text-light focus:text-light dark:focus:text-light";

 return (
  <div className="rounded px-2 flex relative flex-col gap-4 text-base w-full min-h-[40vh] md:max-w-[50%] lg:max-w-[60%]">
   <p className="py-2">Welcome, I&apos;m Jacob</p>
   <h2 className="text-2xl sm:text-3xl sm:w-max">
    <button
     className={hdClassName}
     onClick={(e) => {
      setContent(projects[0]);
      const ul = document.getElementsByTagName("ul")?.item(0);
      if (ul) {
       ul.style.backgroundSize = "1px 0px";
      }
     }}
    >
     About
    </button>
    {name && <span className="text-dark dark:text-light"> / {name}</span>}
   </h2>
   <div className="flex flex-col justify-between flex-grow gap-4">
    <div className="text-lg sm:text-xl">
     {description.split("\n").map((description, i) => {
      return (
       <Fragment key={i}>
        {(i + 1) % 2 == 0 && <br />}
        <p>{description}</p>
       </Fragment>
      );
     })}
    </div>
    <div className="flex flex-wrap justify-end gap-4">
     {site && (
      <a
       href={site}
       target="_blank"
       rel="noreferrer noopener"
       className="grow sm:grow-0 min-w-[150px] p-2 text-center border-2 border-solid rounded border-dark/25 dark:border-light/25 hover:border-dark dark:hover:border-light focus:border-dark dark:focus:border-light"
      >
       View Site
      </a>
     )}
     {github && (
      <a
       href={github}
       target="_blank"
       rel="noreferrer noopener"
       className="grow sm:grow-0 min-w-[150px] p-2 text-center border-2 border-solid rounded border-dark/25 dark:border-light/25 hover:border-dark dark:hover:border-light focus:border-dark dark:focus:border-light"
      >
       View Code
      </a>
     )}
    </div>
   </div>
  </div>
 );
};

export default Content;
