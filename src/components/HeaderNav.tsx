import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import Button from "./Button";
import IconMenuHamburguer from "../assets/icons/IconMenuHamburguer";
import { useState } from "react";

function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-10 text-white flex justify-center sticky top-0 z-50 px-4">
      <div className="w-full xl:max-w-[1600px] flex flex-wrap py-5 xl:px-20 2xl:px-0 flex-row items-center justify-between">
        <a className="flex items-center justify-center text-white h-7 lg:h-12">
          <Logo />
        </a>
        <div className="lg:hidden">
          <IconMenuHamburguer onClick={() => setOpen(!open)} open={open} />
        </div>
        <div className={`lg:flex flex-1 justify-end ${open ? 'absolute top-14 flex flex-col items-end gap-y-12 p-8 bg-gray-10 w-full':'hidden' }`}>
          <nav className={`flex w-full text-base gap-8 lg:flex-1 ${open ? 'flex-col items-center' : 'items-center justify-center'}`}>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 rounded-lg"
                  : "hover:font-semibold"
              }
              onClick={()=>setOpen(!open)}
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
              onClick={()=>setOpen(!open)}
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
              onClick={()=>setOpen(!open)}
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
              onClick={()=>setOpen(!open)}
            >
              Services
            </NavLink>
          </nav>
          <div className="">
            <Button text={"Contact us"} secondary />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
