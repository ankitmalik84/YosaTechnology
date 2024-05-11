import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Footer,
  Navbar,
  Hero,
  Services,
  Mentor,
  FAQ,
  Timer,
} from "./components";
import AOS from "aos";

import "aos/dist/aos.css";
const App = () => {
  AOS.init();
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Router basename="/">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

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
            <Footer />
          </div>
        </div>
        <Routes>
          <Route path="/" element="" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
