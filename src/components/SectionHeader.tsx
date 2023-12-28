import StarsHeader from "../assets/icons/StarsHeader";
import Button from "./Button";

type SectionHeaderProps={
  title:string,
  text:string,
  buttonText?:string,
}

export default function SectionHeader({ title, text, buttonText }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap w-full mb-20 justify-between relative">
      <div className="absolute -top-10 -left-4">
        <StarsHeader />
      </div>
      <div className="lg:w-4/5 w-full mb-6 lg:mb-0 xl:max-w-[1200px]">
        <h1 className="text-3xl xl:text-5xl font-semibold mb-2 text-white xl:leading-[72px]">
          {title}
        </h1>
        <p className="w-full leading-relaxed text-gray-60 text-base">
          {text}
        </p>
      </div>
      {buttonText ? (
        <div className="self-end">
          <Button text={buttonText} secondary />
        </div>
      ) : null}
    </div>
  );
}
