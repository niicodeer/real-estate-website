import IconCap from "../assets/icons/IconCap";
import IconStar from "../assets/icons/IconStar";
import CardContainerShadow from "./CardContainerShadow";
import IconPeople from "../assets/icons/IconPeople";
import SectionValueItem from "./SectionValueItem";
import SeparatorLine from "./SeparatorLine";

export default function SectionValues() {
  return (
    <div >
      <CardContainerShadow rounded>
        <>
        {/* render for mobile and tablet */}
        <div className="p-6 flex gap-5 flex-col xl:hidden rounded-xl">
          <SectionValueItem
            title="Trust"
            text="Trust is the cornerstone of every successful real estate transaction."
          >
            <IconStar purple />
          </SectionValueItem>
          <SeparatorLine />
          <SectionValueItem
            title="Excellence"
            text="We set the bar high for ourselves. From the properties we list to the services we provide."
          >
            <IconCap />
          </SectionValueItem>
          <SeparatorLine />
          <SectionValueItem
            title="Client-Centric"
            text="Your dreams and needs are at the center of our universe. We listen, understand."
          >
            <IconPeople />
          </SectionValueItem>
          <SeparatorLine />
          <SectionValueItem
            title="Our Commitment"
            text="We are dedicated to providing you with the highest level of service, professionalism"
          >
            <IconStar purple />
          </SectionValueItem>
        </div>
        {/* render if >1280 screen */}
        <div className="hidden p-6 xl:flex xl:p-12 2xl:p-[60px] xl:gap-6 2xl:gap-7 flex-col flex-wrap rounded-xl">
          <div className="flex xl:gap-6 2xl:gap-7 min-h-32">
            <SectionValueItem
              title="Trust"
              text="Trust is the cornerstone of every successful real estate transaction."
            >
              <IconStar purple />
            </SectionValueItem>
            <SeparatorLine vertical />
            <SectionValueItem
              title="Excellence"
              text="We set the bar high for ourselves. From the properties we list to the services we provide."
            >
              <IconCap />
            </SectionValueItem>
          </div>
          <SeparatorLine />
          <div className="flex xl:gap-6 2xl:gap-7 min-h-32">
            <SectionValueItem
              title="Client-Centric"
              text="Your dreams and needs are at the center of our universe. We listen, understand."
            >
              <IconPeople />
            </SectionValueItem>
            <SeparatorLine vertical />
            <SectionValueItem
              title="Our Commitment"
              text="We are dedicated to providing you with the highest level of service, professionalism"
            >
              <IconStar purple />
            </SectionValueItem>
          </div>
        </div>
      </>
      </CardContainerShadow>
    </div>
  );
}
