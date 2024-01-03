import { CardStepProps } from "../data/data";

export default function CardStep({ number, title, text }: CardStepProps) {
  return (
    <div className="flex-col justify-start items-start flex xl:min-h-[275px] ">
      <div className="px-4 py-3.5 border-l border-purple-60 text-left">
        <span className=" text-white text-[16px] 2xl:text-xl font-medium leading-normal">
          Step {number}
        </span>
      </div>
      <div className="bg-gradient-to-br from-purple-60 to-gray-15 to-15% p-[1px] rounded-xl rounded-tl-none h-full">
        <div className=" h-full p-8 xl:p-10 2xl:p-12 rounded-xl bg-gradient-to-br from-purple-60/10 to-gray-08 to-15% flex flex-col justify-start items-start gap-3.5 xl:gap-4 2xl:gap-5">
          <h3 className="text-white text-base xl:text-xl 2xl:text-[26px] font-semibold leading-[27px]">
            {title}
          </h3>
          <p className="text-gray-60 text-sm xl:text-[16px] 2xl:text-base font-medium leading-[21px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
