import IconMail from "../assets/icons/IconMail";
import IconSend from "../assets/icons/IconSend";
import Logo from "../assets/Logo";
import { links } from "../data/footerLinks.js";
import FooterCategory from "./FooterCategory.js";

export default function Footer() {
  return (
    <footer className="text-white body-font">
      <FooterLinks />
      {/* social links */}
      <div className="bg-gray-10">
        <div className="container mx-auto py-6 flex flex-wrap flex-col-reverse gap-y-5 sm:flex-row items-center">
          <div className="flex flex-col lg:flex-row gap-y-2.5 items-center lg:gap-x-10">
            <p className="text-white text-lg text-center">
              @2023 Estatein. All Rights Reserved.
            </p>
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-white ml-8 text-lg"
              target="_blank"
            >
              Terms & Conditions
            </a>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start items-center gap-2">
            <a className="text-white w-14 lg:w-12 h-14 lg:h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-white w-14 lg:w-12 h-14 lg:h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-white w-14 lg:w-12 h-14 lg:h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="text-white w-14 lg:w-12 h-14 lg:h-12 rounded-full bg-gray-08 flex justify-center items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
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

function FooterLinks() {
  return (
    <div className="container py-12 px-4 lg:px-0 lg:py-24 mx-auto flex items-start flex-col lg:flex-row">
      <div className="w-full xl:w-2/6 flex-shrink-0  relative">
        <a className="flex font-medium lg:items-center justify-start text-white h-8 2xl:h-12">
          <Logo />
        </a>
        {/* input */}
        <div className="relative flex items-end  mt-4">
          <div className="relative w-full lg:w-[80%]">
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder="Enter Your Email"
              className="w-full rounded-xl border border-gray-15 bg-gray-08 focus:ring-2 focus:ring-purple-70 focus:border-purple-75 text-lg outline-none text-gray-60 py-5 px-16 leading-8 transition-colors duration-200 ease-in-out"
            />
            <div
              className="absolute p-1 w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 inset-y-0 left-5 top-5
              flex items-center justify-center 
                pointer-events-none"
            >
              <IconMail />
            </div>
            <div
              className="absolute p-1 w-8 h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 inset-y-0 right-5 top-5 
                flex items-center justify-center 
                cursor-pointer"
            >
              <IconSend />
            </div>
          </div>
        </div>
      </div>
      {/* Categories Section */}
      <div className="w-full xl:w-4/6 flex lg:justify-end flex-wrap lg:flex-nowrap mt-10 lg:mt-0 text-left lg:gap-x-16">
        {links.map((link,i) => (
          <FooterCategory data={link} key={i} />
        ))}
      </div>
    </div>
  );
}
