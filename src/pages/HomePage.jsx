import styles from "../style";
import "../styles/Home.css";
import { AboutUs, Hero, Services, Mentor, FAQ, Timer } from "../components";
const HomePage = () => (
  <div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs />
        <Services />
        <Timer />
        <Mentor />
        <FAQ />
      </div>
    </div>
  </div>
);

export default HomePage;
