import { aboutImage } from "../assets";
import styles, { layout } from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.css";

const AboutUs = () => (
  <section id="About" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={aboutImage}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2
        className={styles.heading2}
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Why Choose
        <br className="sm:block hidden" />{" "}
        <span
          className="text-gradient font-extrabold"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          Yosa Technology{" "}
        </span>
        ?
      </h2>
      <p
        className={`${styles.paragraph} max-w-[680px] mt-5`}
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Discover the reasons to choose Yosa Technology for your needs.
        Experience expert care, convenience, and personalized solutions, making
        your well-being our top priority. Join us on a journey to better health
        and a happier life.
      </p>
      <p className="ba-checks ba-check-first">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#5BD7E3" }} />{" "}
        Best Professional Doctors
      </p>
      <p className="ba-checks">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#5BD7E3" }} />{" "}
        Emergency Care
      </p>
      <p className="ba-checks">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#5BD7E3" }} />{" "}
        24/7 Support Live Chat
      </p>
      <p className="ba-checks ba-check-last">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#5BD7E3" }} />{" "}
        Enrollment Easy and Quick
      </p>
    </div>
  </section>
);

export default AboutUs;
