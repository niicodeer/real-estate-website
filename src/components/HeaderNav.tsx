import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import Button from "./Button";

function HeaderNav() {
  return (
    <header className="bg-gray-10 text-white body-font flex justify-center">
      <div className="w-[80%] xl:max-w-[1600px] flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Logo />
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center gap-8">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 rounded-lg"
                : "hover:font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 rounded-lg"
                : "hover:font-semibold"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"properties"}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 rounded-lg"
                : "hover:font-semibold"
            }
          >
            Properties
          </NavLink>
          <NavLink
            to={"services"}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 rounded-lg"
                : "hover:font-semibold"
            }
          >
            Services
          </NavLink>
        </nav>
        <Button text={"Contact us"} secondary/>
      </div>
    </header>
  );
}

export default HeaderNav;
