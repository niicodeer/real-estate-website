import StarsHeader from "../assets/icons/StarsHeader";
import Button from "./Button";

type SectionHeaderProps = {
  title: string;
  text: string;
  buttonText?: string;
  horizontal?: boolean;
};

export default function SectionHeader({
  title,
  text,
  buttonText,
  horizontal,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-wrap w-full ${
        horizontal ? "xl:mb-0 mb-10" : "mb-10 lg:mb-14 2xl:mb-20"
      } justify-between relative`}
    >
      <div className="absolute -top-6 lg:-top-10 -left-2 lg:-left-4 h-5 lg:h-7">
        <StarsHeader />
      </div>
      <div
        className={`${
          horizontal ? " " : "lg:w-4/5"
        } w-full 2xl:mb-6 lg:mb-4 mb-0 xl:max-w-[1200px]`}
      >
        <h1 className="text-3xl 2xl:text-5xl lg:text-4xl font-semibold mb-2 text-white xl:leading-[72px] 2xl:mb-3.5">
          {title}
        </h1>
        <p className="w-full leading-relaxed font-medium text-gray-60 text-sm lg:text-[16px] 2xl:text-base">
          {text}
        </p>
      </div>
      {buttonText ? (
        <div className="hidden lg:self-end">
          <Button text={buttonText} secondary />
        </div>
      ) : null}
    </div>
  );
}
