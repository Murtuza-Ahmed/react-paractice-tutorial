import skills from "../../data/skills.json";
import { getImageUrl } from "../../pages/utils";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div></div>
      <div>
        {skills.map((skill, id) => {
          return (
            <div key={id}>
              <div>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
      <ul></ul>
    </section>
  );
};
export default Experience;
