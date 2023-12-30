import { FaqType } from "../data/data";
import Button from "./Button";
import CardContainer from "./CardContainer";

type FaqProps = {
  faq: FaqType;
};

export default function CardFaq({ faq }: FaqProps) {
  return (
    <CardContainer>
      <div className="text-white p-8 lg:p-10 2xl:p-12 w-full lg:max-w-[412px] 2xl:max-w-[512px] flex flex-col gap-5 lg:gap-8 justify-center lg:items-start">
        <h2 className="text-base lg:text-xl 2xl:text-2xl font-semibold min-h-14 lg:h-20">{faq.question}</h2>
        <p className="text-sm lg:text-[16px] 2xl:text-base text-gray-60">{faq.description}</p>
        <Button text="Read More" secondary className="bg-gray-10" />
      </div>
    </CardContainer>
  );
}
