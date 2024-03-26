import skills from "../../data/skills.json";
import historyItem from "../../data/history.json";
import { getImageUrl } from "../../pages/utils";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ul className={styles.history}>
        {historyItem.map((history, id) => (
          <li key={id} className={historyItem}>
            <img
              src={getImageUrl(history.imageSrc)}
              alt={`${history.organisation} Logo`}
            />
            <div className={historyItemDetail}>
              <h3>{`${history.role}, ${history.organisation}`}</h3>
              <p>{`${history.startDate} - ${history.endDate}`}</p>
              <ul>
                {history.experiences.map((exp, id) => (
                  <li key={id}>{exp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Experience;
