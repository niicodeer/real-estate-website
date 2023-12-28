import { ReactElement } from "react";
import IconUpRightArrow from "../assets/icons/IconUpRightArrow";

type SectionItemProps={
  children: ReactElement,
  title: string,
}

export default function FeatureSectionItem({children, title}:SectionItemProps) {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="relative border-2 border-gray-15 px-5 py-10 rounded-lg bg-gray-10 flex items-center flex-col gap-4">
        <div className="absolute top-5 right-5">
          <IconUpRightArrow />
        </div>
        {children}
        <h2 className="title-font font-semibold text-xl text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}
