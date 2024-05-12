import styles from "../style";
import { logo2 } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo2}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Talk to online doctors and get medical advice, online prescriptions,
          refills and medical notes within minutes. On-demand healthcare
          services at your fingertips.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {/* {link.name} */}
                  <a href={`${link.link}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            India Office
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[26px] text-dimWhite mb-2">
              402, Piramyd Icon
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[32px] text-dimWhite mb-2">
              Shreeji Nagri Rd/Ugat Rd
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[32px] text-dimWhite mb-2">
              Jakeriya Circle LP Savani, Rd to
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[32px] text-dimWhite mb-2">
              Jahangirabad, Palanpur Jakatnaka
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[32px] text-dimWhite mb-2">
              Surat, Gujarat 395005
            </li>
          </ul>
        </div>
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            know More
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              <a href="mailto:Hr@yosatechnology.com">Hr@yosatechnology.com</a>
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              <a href="mailto:Info@yosatechnology.com">
                Info@yosatechnology.com
              </a>
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              <a href="tel:+91 8650029851">+91 8650029851</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Yosa Technology. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
