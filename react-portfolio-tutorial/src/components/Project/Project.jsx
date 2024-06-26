import styles from "./Project.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
export default Project;
