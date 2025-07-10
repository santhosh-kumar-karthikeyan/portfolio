import { FaGithub } from "react-icons/fa";
import style from "./Project.module.css";
import { TbLivePhoto } from "react-icons/tb";
import { HiExternalLink } from "react-icons/hi";

export default function Project({ project }) {
  return (
    <main
      className={`${style.projectBox} ${project.id % 2 ? style.leftBox : ""}`}>
      <aside className={style.sectionContainer}>
        <img
          src={project.imgSrc}
          alt="image description of the project"
          width={"150%"}
        />
        <section className={style.buttonGroup}>
          <a href={project.ghLink} target="_blank">
            <button>
              <FaGithub size="20" />
              Github Repo
              <HiExternalLink size="22.5" />
            </button>
          </a>
          {project.type.includes("Live") && (
            <a href={project.liveLink} target="__blank">
              <button>
                <TbLivePhoto size="22" />
                Live Site
                <HiExternalLink size="22.5" />
              </button>
            </a>
          )}
        </section>
      </aside>
      <article>
        <h3 className={style.projectTitle}>{project.name}</h3>
        <p className={style.projectDescription}>{project.description}</p>
        <section className={style.tagContainer}>
          <h4 className={style.tagHeading}>Techologies</h4>
          <ul className={style.tagList}>
            {project.technologies.map((technology, idx) => (
              <li key={idx}>{technology}</li>
            ))}
          </ul>
        </section>
        <section className={style.tagContainer}>
          <h4 className={style.tagHeading}>Skills learnt</h4>
          <ul className={style.tagList}>
            {project.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
