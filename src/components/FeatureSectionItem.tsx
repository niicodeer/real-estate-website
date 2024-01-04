import { ReactElement } from "react";
import IconUpRightArrow from "../assets/icons/IconUpRightArrow";
import CardContainer from "./CardContainer";

type SectionItemProps = {
  children: ReactElement;
  title: string;
};

export default function FeatureSectionItem({
  children,
  title,
}: SectionItemProps) {
  return (
    <div className="min-w-[180px] rounded-lg lg:rounded-none flex-1 ">
      <CardContainer>
        <div className="relative px-3 py-5 lg:px-4 lg:py-8 2xl:px-5  2xl:py-10 bg-gray-10 flex items-center flex-col gap-4">
          <div className="absolute top-5 right-5 w-6 h-6 2xl:w-8 2xl:h-8">
            <IconUpRightArrow />
          </div>
          {children}
          <h2 className="title-font font-semibold text-sm lg:text-[16px] 2xl:text-xl text-white">
            {title}
          </h2>
        </div>
      </CardContainer>
    </div>
  );
}
