import CardContainer from "./CardContainer";

export default function CardSimpleBg({ children = <></>, classname="" }) {
  return <CardContainer className={"bg-gray-10 " + classname}>{children}</CardContainer>;
}
