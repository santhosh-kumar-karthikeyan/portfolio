import style from "./Projects.module.css";
import Project from "../Project/Project";

export default function Projects({ projects }) {
  const projectList = projects.map((project) => (
    <Project key={project.id} project={project} />
  ));
  return (
    <main className={style.projectsBox}>
      <h2 className={style.heading}>Projects</h2>
      {projectList}
    </main>
  );
}


