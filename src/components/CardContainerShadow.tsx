import { ReactElement } from "react";
import CardContainer from "./CardContainer";

type CardShadowProps={
  children:ReactElement;
  rounded?:boolean;
}

export default function CardContainerShadow({children, rounded=false}:CardShadowProps) {
  return (
    <div className={`shadow-[0px_0px_4px_rgba(38,38,38,1)] xl:shadow-[0px_0px_6px_rgba(38,38,38,1)] 2xl:shadow-[0px_0px_8px_rgba(38,38,38,1)] xl:flex-1 overflow-hidden ${rounded ? "rounded-xl ": " "}`}>
      <CardContainer>{children}</CardContainer>
    </div>
  );
}
