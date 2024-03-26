import styles from "./Project.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../pages/utils";

const Project = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => (
          <div key={id}>
            <img
              src={getImageUrl(project.imageSrc)}
              alt={`Image of ${project.title}`}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.skills.map((skill, id) => (
                <li key={id}>{skill}</li>
              ))}
            </ul>
            <div>
              <a href={project.demo}>Demo</a>
              <a href={project.sourcs}>Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
