import { useState } from "react";
import IconMessage from "../assets/icons/IconMessage";
import IconPhone from "../assets/icons/IconPhone";
import Button from "./Button";
import CardContainer from "./CardContainer";
import Input from "./Input";

type FormProps={
  className:string;
}

export default function Form({className}:FormProps) {
  const [selected, setSelected] = useState("phone");
  return (
    <CardContainer className={className} >
      
      <form className="flex flex-wrap gap-5 xl:gap-7 2xl:gap-12">
        <Input
          type="text"
          id="firstname"
          label="First Name"
          placeholder="Enter First Name"
        />
        <Input
          type="text"
          id="lastname"
          label="Last Name"
          placeholder="Enter Last Name"
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Enter your Email"
        />
        <Input
          type="tel"
          id="phone"
          label="Phone"
          placeholder="Enter Phone Number"
        />
        <Input
          select
          id="location"
          label="Preferred Location"
          placeholder="Select Location"
          options={["Argentina", "Uruguay", "Chile"]}
        />
        <Input
          select
          id="propertyType"
          label="Property Type"
          placeholder="Select Property Type"
          options={["House", "Ville", "Penthouse"]}
        />
        <Input
          select
          id="numBathrooms"
          label="No. of Bathrooms"
          placeholder="Select no of Bathrooms"
          options={[1, 2, 3, 4]}
        />
        <Input
          select
          id="numBedrooms"
          label="No. of Bedrooms"
          placeholder="Select no. of Bedrooms"
          options={[1, 2, 3, 4]}
        />
        <Input
          select
          id="budget"
          label="Budget"
          placeholder="Select budget"
          options={[1, 2, 3, 4]}
          classname="xl:max-w-[568px] 2xl:max-w-[670px]"
        />
        <div className="flex flex-col gap-4 w-full xl:max-w-[568px] 2xl:max-w-[670px]">
          <label
            htmlFor="contactMethod"
            className="text-white font-semibold 2xl:text-xl leading-[150%]"
          >
            Preferred Contact Method
          </label>
          <div className="flex gap-4 flex-col xl:flex-row ">
            <div className="relative ">
              <input
                className="h-14 2xl:h-16 w-full rounded-lg bg-gray-10 border border-gray-15 py-4 px-[54px] 2xl:py-5 text-white 2xl:text-lg"
                type="tel"
                name="contactMethod"
                id="phoneMethod"
              ></input>
              <div
                className={`absolute top-6 2xl:top-[26px] right-5 w-3 h-3 2xl:w-4 2xl:h-4 rounded-full border border-purple-60 cursor-pointer ${
                  selected === "phone" ? "bg-purple-60" : "bg-transparent "
                }`}
                onClick={() => setSelected("phone")}
              />
              <div className="w-5 h-5 2xl:w-6 2xl:h-6 absolute top-[20px] left-5">
                <IconPhone />
              </div>
            </div>
            <div className="relative ">
              <input
                className="h-14 2xl:h-16 w-full rounded-lg bg-gray-10 border border-gray-15 py-4 px-[54px] 2xl:py-5 text-white 2xl:text-lg"
                type="email"
                name="contactMethod"
                id="emailMethod"
              ></input>
              <div
                className={`absolute top-6 2xl:top-[26px] right-5 w-3 h-3 2xl:w-4 2xl:h-4 rounded-full border border-purple-60 cursor-pointer ${
                  selected === "email" ? "bg-purple-60" : "bg-transparent "
                }`}
                onClick={() => setSelected("email")}
              />
              <div className="w-5 h-5 2xl:w-6 2xl:h-6 absolute top-[20px] left-5">
                <IconMessage />
              </div>
            </div>
          </div>
        </div>
        <Input
          textarea
          id="message"
          label="Message"
          placeholder="Enter your Message here..."
          classname="xl:w-full xl:max-w-full 2xl:w-full 2xl:max-w-full xl:h-[150px] 2xl:h-[170px] overflow-y-auto outline-none"
        />
        {/* Terms & conditions */}
        <div className="flex flex-col gap-5 xl:flex-row xl:justify-between w-full">
          <div className="flex gap-4 justify-center items-center">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="opacity-0 absolute" // Utiliza opacity-0 en lugar de hidden
            />
            <label
              id="label-check"
              htmlFor="terms"
              className="h-6 w-6 2xl:h-7 2xl:w-7 rounded border border-gray-15 flex items-center justify-center bg-gray-10 cursor-pointer transition duration-300" // Agrega la clase transition para animaciones suaves
            >
              {/* Icono para indicar que es un checkbox */}
              <svg
                className="w-4 h-4 text-transparent pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </label>
            <p className="text-gray-60 font-medium text-sm xl:text-base 2xl:text-lg">
              I agree with{" "}
              <a href="" className="underline">
                {" "}
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
          <Button text="Send Your Message" primary />
        </div>
      </form>
    </CardContainer>
  );
}
