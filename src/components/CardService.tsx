import { ReactElement } from "react";
import CardContainer from "./CardContainer";
import SectionValueItem from "./SectionValueItem";

type CardServiceProps = {
  title: string;
  text: string;
  children: ReactElement;
};
export default function CardService({ title, text, children }:CardServiceProps) {
  return (
    <CardContainer className="p-6 xl:p-10 2xl:p-12 xl:max-w-[395px] 2xl:max-w-[500px] bg-gray-08">
      <SectionValueItem
        title={title}
        text={text}
        bigIcon
      >
        {children}
      </SectionValueItem>
    </CardContainer>
  );
}
