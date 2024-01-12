import IconLocation from '../assets/icons/IconLocation'
import Button from './Button'
import CardContainer from './CardContainer'
import Input from './Input'

export default function FormPricingDetails() {
  return (
    <CardContainer className="p-5 xl:p-10 2xl:p-[50px] 2xl:gap-7 xl:max-w-[790px] 2xl:max-w-[984px]">
    <form className="flex flex-wrap gap-5 xl:gap-7 2xl:gap-12">
      <Input
        type="text"
        id="firstname"
        label="First Name"
        placeholder="Enter First Name"
        classname="xl:max-w-[48%] 2xl:max-w-[47%]  "
      />
      <Input
        type="text"
        id="lastname"
        label="Last Name"
        placeholder="Enter Last Name"
        classname="xl:max-w-[48%] 2xl:max-w-[47%] "
      />
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder="Enter your Email"
        classname="xl:max-w-[48%] 2xl:max-w-[47%] "
      />
      <Input
        type="tel"
        id="phone"
        label="Phone"
        placeholder="Enter Phon Number"
        classname="xl:max-w-[48%] 2xl:max-w-[47%] "
      />
      <div className="flex flex-col gap-4 w-full ">
        <label
          htmlFor="contactMethod"
          className="text-white font-semibold 2xl:text-xl leading-[150%]"
        >
          Selected Property
        </label>
        <div className="flex gap-4 flex-col">
          <div className="relative ">
            <input
              className="h-14 2xl:h-16 w-full rounded-lg bg-gray-10 border border-gray-15 py-4 px-5 2xl:py-5 text-white 2xl:text-lg"
              type="text"
              name="location"
              id="location"
              value="Seaside Serenity Villa, Malibu, California"
            ></input>
            <div className="w-5 h-5 2xl:w-6 2xl:h-6 absolute top-[50%] -translate-y-[50%] right-5">
              <IconLocation />
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
  )
}
