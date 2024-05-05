import styles from "../style";
import { fetch } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAngleUp,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[34px] text-white ss:leading-[70.8px] leading-[75px] text-center sm:text-left">
            Build Your Dream With
            <span
              className="text-gradient"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              Yosa Technology
            </span>
          </h1>
        </div>
        <p
          className={`${styles.paragraph} max-w-[880px] mt-5`}
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Yosa Technology has revenue cycle solutions customized for hospitals,
          physician practices, vendors and laboratories. The company’s line of
          solutions aims to increase cash flow, maximize productivity and reduce
          paper processing dependency.{" "}
          <span className="text-gradient font-bold"> Yosa Technology</span>{" "}
          specializes in electronic transaction management, emergency department
          business services and laboratory revenue cycle management.
        </p>
        <div className="flex gap-4">
          <Button styles={`mt-10`} text={`Our Services`} link={``} />
          <Button styles={`mt-10`} text={`Contact Us`} link={``} />
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={fetch}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
