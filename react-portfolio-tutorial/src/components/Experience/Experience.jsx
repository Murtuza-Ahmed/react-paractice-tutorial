import skills from "../../data/skills.json";
import { getImageUrl } from "../../pages/utils";
console.log(getImageUrl);
console.log(skills);

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        <div>
          <div>
            {skills.map((skill, id) => (
              <div key={id}>
                <div>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
