import AbstractWaves from "../assets/AbstractWaves";
import Button from "./Button";

type CardAbstractProps = {
  title: string;
  text: string;
  vertical?: boolean;
};

export default function CardWithAbstractBg({
  title,
  text,
  vertical,
}: CardAbstractProps) {
  return (
    <div className="relative z-0 bg-gray-10 border border-gray-15 rounded-xl p-6 xl:p-10 2xl:p-[50px] flex xl:justify-center xl:flex-1 gap-5 2xl:gap-8 flex-col overflow-hidden">
      <div className="absolute -z-10 w-[400px] xl:w-[1920px] -top-4 xl:-top-40 -left-5 xl:-left-48 ">
        <AbstractWaves />
      </div>
      {!vertical ? (
        <>
          <div className="flex flex-col gap-5 xl:flex-row xl:justify-between xl:items-center">
            <h2 className="text-white font-bold text-xl xl:text-2xl 2xl:text-3xl">
              {title}
            </h2>
            <Button text="Learn More" secondary />
          </div>
          <p className="text-gray-60 text-sm xl:text-[16px] 2xl:text-base ">
            {text}
          </p>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-5 xl:justify-between ">
            <h2 className="text-white font-bold text-xl xl:text-2xl 2xl:text-3xl">
              {title}
            </h2>
            <p className="text-gray-60 text-sm xl:text-[16px] 2xl:text-base ">
              {text}
            </p>
            <Button text="Learn More" secondary />
          </div>
        </>
      )}
    </div>
  );
}
