import styles from "./CSS/LoginSignup.module.css";

const LoginSignup = () => {
  return (
    <div className={styles.LoginSignup}>
      <div className={styles.LoginSignupContainer}>
        <h1>Sign Up</h1>
        <div className={styles.LoginSignupField}>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={styles.LoginSignupLogin}>
          Already have an account? <span>Login Here</span>
        </p>
        <div className={styles.LoginSignupAgree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
