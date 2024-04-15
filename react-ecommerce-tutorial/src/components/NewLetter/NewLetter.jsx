import styles from "./NewLetter.module.css";

const NewLetter = () => {
  return (
    <div className={styles.NewLetter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newLetter and stay update</p>
      <div>
        <input type="email" name="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
