import styles from "../style";
import Button from "./Button";
import Countdown from "./Countdown";

const Timer = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} justify-around sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className=" flex flex-col">
      <h2
        className={`font-poppins font-semibold xs:text-[28px] text-[20px] text-white w-full text-gradient`}
      >
        COMPREHENSIVE REVENUE CYCLE MANAGEMENT SOLUTIONS THAT TACKLE PHYSICIAN
        GROUPS’ BIGGEST CHALLENGES.
      </h2>
      <p className={`text-white sm:self-start mt-5 xs:text-[18px] text-[14px]`}>
        Your Yosa Technology Client Services team can help you with specific
        revenue cycle challenges or conduct a complete revenue cycle audit to
        identify inefficiencies in your current Yosa Technology systems. Plug
        into our proprietary intelligent automation and expert services
        capabilities to reduce denials, improve revenue capture, boost staff
        productivity, eliminate outdated processes, and put an end to revenue
        leakage.
      </p>
    </div>
    {/* <div
      className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 flex-col gap-3`}
    >
      <Button
        styles={`sm:text-xl text-lg font-semibold mb-3 sm:mb-0`}
        text={` Registartion Close `}
      />
    </div> */}
  </section>
);

export default Timer;
