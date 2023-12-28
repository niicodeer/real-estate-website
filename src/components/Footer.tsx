import IconMail from "../assets/icons/IconMail";
import IconSend from "../assets/icons/IconSend";
import Logo from "../assets/Logo";
import { links } from "../footerLinks";
import FooterCategory from "./FooterCategory.js";

export default function Footer() {
  return (
    <footer className="text-white body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col gap-16">
        <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Logo />
          </a>
          {/* input */}
          <div className="relative flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start mt-4">
            <div className="relative sm:w-auto ">
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                placeholder="Enter Your Email"
                className="w-full rounded-xl border border-gray-15 bg-gray-08 focus:ring-2 focus:ring-purple-70 focus:border-purple-75 text-base outline-none text-gray-60 py-4 px-14 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div
                className="absolute inset-y-0 left-0 pl-4  
                    flex items-center  
                    pointer-events-none"
              >
                <IconMail />
              </div>
              <div
                className="absolute inset-y-0 right-0 pr-4  
                    flex items-center  
                    pointer-events-none"
              >
                <IconSend />
              </div>
            </div>
          </div>
        </div>
        {/* Categories Section */}
        <div className="flex-grow flex flex-wrap md:mt-0 mt-10 md:text-left text-center">
          {links.map((link) => (
            <FooterCategory data={link} />
          ))}
        </div>
      </div>
      {/* social links */}
      <div className="bg-gray-10">
        <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-white text-base text-center sm:text-left">
            @2023 Estatein. All Rights Reserved.
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-white ml-8 text-base"
              target="_blank"
            >
              Terms & Conditions
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start items-center gap-2">
            <a className="text-white w-12 h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-white w-12 h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-white w-12 h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="text-white w-12 h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
