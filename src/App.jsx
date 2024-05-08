import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Participat,
  Footer,
  Navbar,
  Sponser,
  Hero,
  Services,
  Team,
  Mentor,
  FAQ,
  Timer,
  TimelineSection,
} from "./components";
import AOS from "aos";

import "aos/dist/aos.css";
import Community from "./components/Community";
import Faculty from "./components/Faculty";

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
            {/* <Participat /> */}
            <Services />
            {/* <TimelineSection /> */}
            <Timer />
            {/* <Faculty /> */}
            {/* <Team /> */}
            <Mentor />
            {/* <Sponser /> */}
            {/* <Community /> */}
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
