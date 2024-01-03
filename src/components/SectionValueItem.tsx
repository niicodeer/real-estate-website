import { ReactNode } from "react";
type ValueItemProps={
  children:ReactNode;
  title:string;
  text:string;
}
export default function SectionValueItem({title, text, children}:ValueItemProps) {
  return (
    <div className="flex flex-col gap-3 xl:gap-4 text-left xl:w-[330px] 2xl:w-[410px]">
      <div className="flex gap-2 xl:gap-2.5 2xl:gap-3 items-center">
        <div className="h-12 w-12 xl:h-[60px] xl:w-[60px] 2xl:h-[74px] 2xl:w-[74px] border border-purple-60 rounded-full p-3 xl:p-4 2xl:p-5">
          {children}
        </div>
        <h2 className="text-white font-semibold text-base xl:text-xl 2xl:text-2xl">
          {title}
        </h2>
      </div>
      <p className="text-gray-60 text-sm xl:text-[16px] 2xl:text-base ">
        {text}
      </p>
    </div>
  );
}
