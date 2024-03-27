import { getImageUrl } from "../../pages/utils";
import run from "../../assets/image/contact/email.png";
const Contact = () => {
  return (
    <footer>
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/email.png")} alt="Email-Icon" />
          <a href="http://www.murtuza.programmer@gmail.com" target="_blank">
            MyEmail@email.com
          </a>
        </li>
        <li>
          <img src={getImageUrl("contact/linkdin.png")} alt="LinkedIn-Icon" />
          <a href="https://www.linkedin.com/in/murtuza-ahmed-36012628b/"></a>
          LinkedIn.com
        </li>
        <li>
          <img src={getImageUrl("contact/git-hub.png")} alt="GitHub-Icon" />
          <a href="https://github.com/Murtuza-Ahmed">GitHub.com</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
