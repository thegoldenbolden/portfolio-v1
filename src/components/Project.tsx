import Image from "next/image";
import { P } from "./Projects";
import styles from "../styles/Projects.module.scss";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

const Project = ({ project }: { project: P }) => {
  return (
    <div className={`glass ${styles.project}`}>
      <div className={styles.info}>
        <div className={styles["p-hd"]}>
          <h2>{project.name}</h2>
          <div className={styles.action}>
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener">
                <VscGithubAlt size={24} color="$primary" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener">
                <VscLinkExternal size={24} color="$primary" />
              </a>
            )}
          </div>
        </div>
        <div className={styles.dsc}>
          <div className={styles.image}>
            <Image
              src={`/projects/${project.img}`}
              layout="responsive"
              objectFit="cover"
              height={210}
              width={244}
            />
          </div>
          <div className={styles.content}>
            <p>{project.description}</p>
            {project.tags && project.tags.length > 0 ? (
              <ul className={styles.tags}>
                {project.tags.map((tag: string) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
