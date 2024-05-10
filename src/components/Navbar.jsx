import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <nav
      className="w-full flex py-6 justify-between items-center navbar relative z-10"
      data-aos="slide-down"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <img src={logo} alt="yosatechnology" className="w-[194px] h-[40px]" />
      <h1>Yosa Technology</h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onMouseEnter={() => setHovered(nav.title)}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
            {hovered === nav.title && nav.sublinks.length > 0 && (
              <div
                className={`absolute top-full ${
                  nav.title === "Why Choose Us" ? "right-90" : "right-50"
                } mt-[-28px] p-3 bg-black-gradient rounded-xl sidebar z-20`}
                onMouseEnter={() => setHovered(nav.title)}
                onMouseLeave={() => setHovered(null)}
              >
                <ul className="list-none flex justify-start items-start flex-1 flex-col">
                  {nav.sublinks.map((item, index) => (
                    <li
                      key={item.id}
                      className={` font-poppins font-medium cursor-pointer text-[18px] text-white`}
                      onClick={() => setActive(item.title)}
                    >
                      <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
