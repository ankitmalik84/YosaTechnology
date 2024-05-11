import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import AOS from "aos";
import {
  AboutPage,
  HomePage,
  ContactPage,
  Faq,
  MedicalBilling,
  Transcription,
  Privacy,
  Solutions,
  Testimonial,
} from "./pages";
import "aos/dist/aos.css";
const App = () => {
  AOS.init();
  return (
    <div className=" w-full overflow-hidden">
      <Router basename="/">
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/transcription" element={<Transcription />} />
          <Route path="/medicalbilling" element={<MedicalBilling />} />
        </Routes>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
