import skills from "../../data/skills.json";
import historyItem from "../../data/history.json";
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
      <ul>
        {historyItem.map((history, id) => (
          <li key={id}>
            <img
              src={getImageUrl(history.imageSrc)}
              alt={`${history.organisation} Logo`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Experience;
