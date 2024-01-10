import { FaqType } from "../data/data";
import Button from "./Button";
import CardContainer from "./CardContainer";

/* type FaqProps = {
  faq: FaqType;
}; */

export default function CardFaq({ question, description }: FaqType) {
  return (
    <CardContainer>
      <div className="text-white p-12 min-w-[360px] xl:max-w-[412px] 2xl:max-w-[512px] flex flex-col gap-7 justify-center items-start">
        <h2 className="text-lg xl:text-xl 2xl:text-2xl font-semibold h-[72px]">{question}</h2>
        <p className="text-sm xl:text-base 2xl:text-lg text-gray-60">{description}</p>
        <Button text="Read More" secondary className="bg-gray-10" />
      </div>
    </CardContainer>
  );
}
