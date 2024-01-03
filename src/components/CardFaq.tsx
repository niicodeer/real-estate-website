import { FaqType } from "../data/data";
import Button from "./Button";
import CardContainer from "./CardContainer";

type FaqProps = {
  faq: FaqType;
};

export default function CardFaq({ faq }: FaqProps) {
  return (
    <CardContainer>
      <div className="text-white p-12 max-w-[512px] flex flex-col gap-7 justify-center items-start">
        <h2 className="text-2xl font-semibold h-[72px]">{faq.question}</h2>
        <p className="text-base text-gray-60">{faq.description}</p>
        <Button text="Read More" secondary className="bg-gray-10" />
      </div>
    </CardContainer>
  );
}
