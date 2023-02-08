import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-slate-50/80 pt-16">
      <div className="mx-auto max-w-5xl px-8 md:px-6">
        <div className="flex flex-col justify-between border-t py-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © Copyright {new Date().getFullYear() + " "}
            <a href="/" className="text-[#D21143] hover:bg-opacity-90">
              earthly&nbsp;
            </a>
            All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <a href="/">
              <IoLogoFacebook className="text-2xl text-red-600 hover:bg-opacity-90 duration-300" />
            </a>
            <a href="/">
              <IoLogoTwitter className="text-2xl text-red-600 hover:bg-opacity-90 duration-300" />
            </a>
            <a href="/">
              <IoLogoYoutube className="text-2xl text-red-600 hover:bg-opacity-90 duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
