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
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <CardContainer>
        <div className="relative px-5 py-10 bg-gray-10 flex items-center flex-col gap-4">
          <div className="absolute top-5 right-5">
            <IconUpRightArrow />
          </div>
          {children}
          <h2 className="title-font font-semibold text-xl text-white">
            {title}
          </h2>
        </div>
      </CardContainer>
    </div>
  );
}
