import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuList = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Shop",
      url: "/shop",
    },
    {
      id: 3,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 4,
      name: "Contact Us",
      url: "/contact-us",
    },
    {
      id: 5,
      name: "Get In Touch",
      url: "/get-in-touch",
    },
  ];

  return (
    <header className="absolute sticky left-0 top-0 z-50 bg-white/90 w-full backdrop-blur">
      <div className="mx-auto h-[90px] max-w-5xl px-8 md:px-6">
        <div className="relative flex h-full items-center justify-between border-b border-slate-500/10">
          {/* logo */}
          <div className="w-[5rem] max-w-full">
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/images/earthly logo.png"}
                alt="logo"
                className="w-full w-[4.75rem] h[4.75rem]"
              />
            </a>
          </div>
          {/* menu */}
          <div className="flex w-full items-center justify-between">
            <nav
              id="navbarCollapse"
              className={`absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0 ${
                open === false && "hidden"
              }`}
            >
              <ul className="flex flex-col justify-center gap-8 lg:flex-row">
                {menuList.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.url}
                      className={`text-lg font-medium text-slate-700 duration-200 hover:text-[#D21143] lg:text-base ${
                        item === "Get In Touch" &&
                        "rounded-full py-2 px-4 border border-text-[#D21143]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* menu btn  */}
          <div className="flex">
            <IoCartOutline className="hidden py-2.5 text-6xl text-[#D21143] duration-200 hover:bg-opacity-90 sm:block lg:mr-0" />
            <button
              onClick={() => setOpen(!open)}
              id="navbarToggler"
              className="block lg:hidden"
            >
              <GiHamburgerMenu className="text-4xl text-[#D21143]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
