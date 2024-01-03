import IconGrid from "../assets/icons/IconGrid";
import IconThunder from "../assets/icons/IconThunder";
import { CardClientsProps } from "../data/data";
import Button from "./Button";
import CardContainer from "./CardContainer";
import FeaturesContainer from "./FeaturesContainer";
import SeparatorLine from "./SeparatorLine";


export default function CardClients({since, title, domain, category, text}:CardClientsProps) {
  return (
    <FeaturesContainer>
      <CardContainer>
        <div className="flex flex-col min-w-[357px] w-full p-6 xl:p-10 2xl:p-12 gap-7 2xl:gap-10 ">
          <div className="flex flex-col xl:flex-row xl:justify-between gap-5">
            <div className="flex flex-col items-start gap-y-1">
              <span className="text-gray-60 font-medium text-sm xl:text-[16px] 2xl:text-base leading-[150%]">
                Since {since}
              </span>
              <h3 className="text-white font-semibold text-xl xl:text-2xl 2xl:text-3xl leading-[150%]">
                {title}
              </h3>
            </div>
            <Button
              text="Visit Website"
              secondary
              className="bg-gray-10 hover:bg-gray-15"
            />
          </div>
          <div className="flex justify-start items-center gap-4 xl:gap-5 2xl:gap-8">
            <div className="flex flex-col gap-1 items-start justify-start xl:w-[250px] 2xl:w-[305px]">
              <div className="flex items-center gap-1">
                <div className="w-[18px] h-[18px] xl:w-5 xl:h-5 2xl:w-6 2xl:h-6">
                  <IconGrid />
                </div>
                <span className="text-gray-60 font-medium text-xs xl:text-sm 2xl:text-[16px]">
                  Domain
                </span>
              </div>
              <p className="text-white font-medium text-sm xl:text-[16px] 2xl:text-xl text-left">
                {domain}
              </p>
            </div>
            <div className="h-16">
              <SeparatorLine vertical />
            </div>
            <div className="flex flex-col text-left gap-1">
              <div className="flex items-center gap-1">
                <div className="w-[18px] h-[18px] xl:w-5 xl:h-5 2xl:w-6 2xl:h-6">
                  <IconThunder />
                </div>
                <span className="text-gray-60 font-medium text-xs xl:text-sm 2xl:text-[16px]">
                  Category
                </span>
              </div>
              <p className="text-white font-medium text-sm xl:text-[16px] 2xl:text-base">
                {category}
              </p>
            </div>
          </div>
          <CardContainer>
            <div className="text-left p-5 xl:p-6 2xl:p-7 flex flex-col gap-y-2 min-h-[150px]">
              <h5 className="text-gray-60 font-medium text-sm xl:text-[16px] 2xl:text-base leading-[150%]">
                What They Said 🤗
              </h5>
              <p className="text-white font-medium text-sm xl:text-[16px] 2xl:text-base leading-[150%]">
                {text}
              </p>
            </div>
          </CardContainer>
        </div>
      </CardContainer>
    </FeaturesContainer>
  );
}
