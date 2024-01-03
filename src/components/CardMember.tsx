import IconSend from "../assets/icons/IconSend";
import { CardMembersProps } from "../data/data";
import CardContainer from "./CardContainer";

export default function CardMember({
  image,
  twitter,
  name,
  ocuppation,
}: CardMembersProps) {
  return (
    <CardContainer>
      <div className="p-5 xl:p-6 2xl:p-8 flex flex-col gap-y-10 xl:gap-y-12 2xl:gap-y-[50px] xl:w-[300px] 2xl:w-[378px]">
        <div className="relative bg-gray-15 w-full h-[268px] xl:h-[220px] 2xl:h-[253px] rounded-xl">
          <img
            src={image}
            alt={name}
            className="block object-fill object-center w-auto h-full rounded-xl"
          />
          <a
            className="absolute -bottom-[8%] left-[50%] -translate-x-[50%] bg-purple-60 w-[60px] h-10 2xl:w-[76px] 2xl:h-[52px] rounded-[44px] text-white flex justify-center items-center"
            href={twitter}
          >
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
        </div>
        <div className="flex justify-center flex-col items-center gap-4 xl:gap-5 2xl:gap-6">
          <div className="text-center">
            <h1 className="font-semibold text-white text-base xl:text-xl 2xl:text-2xl leading-7 2xl:mb-2">
              {name}
            </h1>
            <p className=" font-semibold text-gray-60 text-sm xl:text-[16px] 2xl:text-xl leading-6">
              {ocuppation}
            </p>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="msg-input"
              name="msg-input"
              placeholder="Say Hello 👋"
              className="w-full h-16 xl:h-14 2xl:h-[72px] rounded-[100px] border border-gray-15 bg-gray-10 focus:ring-2 focus:ring-purple-70 focus:border-purple-75 text-base outline-none text-white py-2 px-6 pr-16 leading-8 transition-colors duration-200 ease-in-out"
            />
            <div className="absolute inset-y-0 p-3 right-2 top-2 xl:top-2.5 xl:right-2.5 2xl:top-3.5 2xl:right-3.5 w-12 h-12 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 flex items-center justify-center cursor-pointer bg-purple-60 rounded-full">
              <IconSend />
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
