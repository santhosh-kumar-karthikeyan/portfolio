import style from "./Projects.module.css";
import Project from "../Project/Project";


export default function Projects({ projects }) {
  const projectList = projects.map(project => <Project project = {project} />);
  return (
      <main className={style.projects}>
          {projectList}
      </main>
  )
}
